import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class CustomToastrService {

  constructor(private toastr: ToastrService) { }

  message(message: string, title: string, tosterOptions:Partial<TosterOptions>) {
    this.toastr[tosterOptions.messageType](message, title,{
      positionClass:tosterOptions.position
    });
  }
}

export enum TosterMessageType {
  Success = "success",
  Info = "info",
  Warning = "warning",
  Error = "error"
}
export class TosterOptions{
  messageType: TosterMessageType;
  position: TosterPosition;
}


export enum TosterPosition {
  TopRight ="toast-top-right",
  BottomRight="toast-bottom-right",
  BottomLeft="toast-botom-left",
  TopLeft="toast-top-left",
  TopFullWidth="toast-top-full-width",
  BottomFullWidth="toast-bottom-full-width",
  TopCenter="toast-top-center",
  BottomCenter="toast-botom-center",
}
