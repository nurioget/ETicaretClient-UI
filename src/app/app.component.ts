import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { CustomToastrService, TosterMessageType, TosterPosition } from './services/ui/custom-toastr.service';

declare var $: any

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ETicaretClient';
  constructor(private toastrservice: CustomToastrService) {
    toastrservice.message("merhaba","nuri",{
      messageType:TosterMessageType.Info,
      position:TosterPosition.BottomCenter
    });
    toastrservice.message("merhaba","nuri",{
      messageType:TosterMessageType.Success,
      position:TosterPosition.TopRight
    });
    toastrservice.message("merhaba","nuri",{
      messageType:TosterMessageType.Error,
      position:TosterPosition.TopFullWidth
    });
    toastrservice.message("merhaba","nuri",{
      messageType:TosterMessageType.Warning,
      position:TosterPosition.TopCenter
    })
  }
}

