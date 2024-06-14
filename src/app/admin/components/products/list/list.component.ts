import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { _MatTableDataSource, MatTableDataSource } from '@angular/material/table';
import { NgxSpinnerService } from 'ngx-spinner';
import { SpinnerType } from 'src/app/base/base.component';
import { List_Product } from 'src/app/contracts/list_products';
import { AlertifyService, MessageType, Position } from 'src/app/services/admin/alertify.service';
import { ProductService } from 'src/app/services/common/models/product.service';
import { BasketsComponent } from 'src/app/ui/components/baskets/baskets.component';


declare var $:any;
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent extends BasketsComponent implements OnInit {


  constructor(spinner: NgxSpinnerService, private productService: ProductService, private alertifyService: AlertifyService) {
    super(spinner)
  }



  displayedColumns: string[] = ['name', 'stock', 'price', 'createDate', 'updateDate', 'edit', 'delete'];
  dataSource: MatTableDataSource<List_Product> = null;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  async getProducts() {
    this.showSpinner(SpinnerType.BallAtom)
    const allPoroducts: { totalCount: number; products: List_Product[] } = await this.productService.read(this.paginator ? this.paginator.pageIndex : 0
      , this.paginator ? this.paginator.pageSize : 5, () => this.hideSpinner(SpinnerType.BallAtom),
      errorMessage => this.alertifyService.message(errorMessage, {
        dismissOthers: true,
        messageType: MessageType.Error,
        position: Position.BottomRight
      }))
    this.dataSource = new MatTableDataSource<List_Product>(allPoroducts.products);
    this.paginator.length = allPoroducts.totalCount;
  }

  async pageChange() {
    await this.getProducts();
  }
  // delete(id, event) {
  //   const img:HTMLImageElement=event.srcElement;
  //   $(img.parentElement.parentElement).fadeOut(2000)
  // }

  override async ngOnInit() {
    await this.getProducts();

  }
}

