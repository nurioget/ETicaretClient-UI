import { Injectable } from '@angular/core';

declare var alertify: any;

@Injectable({
  providedIn: 'root'
})
export class AlertifyService {

  constructor() { }

  //message(message: string, messageType: MessageType, position: Position, delay: number = 3, dismissOthers: boolean = false) {
  message(message: string, options: Partial<AlertifyOptions>) {
    alertify.set('notifier', 'delay', options.delay);
    alertify.set('notifier', 'position', options.position);
    const msj = alertify[options.messageType](message)
    if (options.dismissOthers)
      msj.dismissOthers();
  }

  dismiss() {
    alertify.dismissAll();
  }
}


export enum MessageType {
  Error = "error",
  Message = "message",
  Notify = "notify",
  Success = "success",
  Warning = "warning"
}

export class AlertifyOptions {
  messageType: MessageType = MessageType.Message;
  position: Position = Position.BottomRight;
  delay: number = 3;
  dismissOthers: boolean = false;
}

export enum Position {
  TopRight = "top-right",
  TopCenter = "top-center",
  messageTypeopLeft = "top-left ",
  BottomRight = "bottom-right",
  BottomCenter = "bottom-center",
  BottomLeft = "bottom-left"
}