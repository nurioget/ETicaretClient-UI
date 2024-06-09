import { Component, OnInit } from '@angular/core';
import { log } from 'console';
import { NgxSpinnerService } from 'ngx-spinner';
import { extname } from 'path';
import { BaseComponent, SpinnerType } from 'src/app/base/base.component';
import { Product } from 'src/app/contracts/product';
import { HttpClientService } from 'src/app/services/common/http-client.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent extends BaseComponent implements OnInit {

  constructor(spinner: NgxSpinnerService, private httpClientService: HttpClientService) {
    super(spinner)
  }

  ngOnInit(): void {
    this.showSpinner(SpinnerType.BallAtom)

    this.httpClientService.get<Product[]>({
      controller: "products"
    }).subscribe(data => console.log(data));

    // this.httpClientService.post({
    //   controller: "products"
    // }, {
    //   name:"Product1",
    //   stock:"100",
    //   price:7
    // }).subscribe();


    // this.httpClientService.put({
    //   controller:"products"
    // },{
    //   id:"358ca719-4fc5-4bee-8727-0d6e06898a9c",
    //   name:"Product10",
    //   stock:789,
    //   price:123.45
    // }).subscribe();


    // this.httpClientService.delete({
    //   controller: "products"
    // }, "949cf29c-5b9a-4fb1-a9d3-bed120c5efe1")
    //   .subscribe();

    // this.httpClientService.get({
    //   fullEndPoint:"https://jsonplaceholder.typicode.com/posts"
    // }).subscribe(data=>console.log(data));



  }

}
