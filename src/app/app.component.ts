import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { CustomToastrService, TosterMessageType, TosterPosition } from './services/ui/custom-toastr.service';
import { log } from 'console';

declare var $: any

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ETicaretClient';
  constructor() {
  }
}



$.get("https://localhost:7161/api/Products",data=>{
  console.log(data)
})