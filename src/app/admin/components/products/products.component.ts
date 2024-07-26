import { Component, OnInit, ViewChild } from '@angular/core';
import { log } from 'console';
import { NgxSpinnerService } from 'ngx-spinner';
import { extname } from 'path';
import { BaseComponent, SpinnerType } from 'src/app/base/base.component';
import { Create_Product } from 'src/app/contracts/create_product';
import { HttpClientService } from 'src/app/services/common/http-client.service';
import { ListComponent } from './list/list.component';
import { DialogService } from 'src/app/services/common/dialog.service';
import { QrcodeReadingDialogComponent } from 'src/app/dialogs/qrcode-reading-dialog/qrcode-reading-dialog.component';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent extends BaseComponent implements OnInit {

  constructor(spinner: NgxSpinnerService,
    private httpClientService: HttpClientService,
    private dialogService: DialogService) {
    super(spinner)
  }

  ngOnInit(): void {

  }
  @ViewChild(ListComponent) listComponets: ListComponent

  createdProduct(createdProduct: Create_Product) {
    this.listComponets.getProducts();
  }

  showProductQrCodeReading() {
    this.dialogService.openDialog({
      componnentType: QrcodeReadingDialogComponent,
      data: null,
      options: {
        width: "1000px"
      },
      afterClosed: () => { }
    });
  }
}
