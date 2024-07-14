import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { CustomToastrService, TosterMessageType, TosterPosition } from './services/ui/custom-toastr.service';
import { log } from 'console';
import { AuthService } from './services/common/auth.service';
import { Router } from '@angular/router';


declare var $: any

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(public authService: AuthService,
    private toastrService: CustomToastrService,
    private router: Router,
  ) {
    authService.identityCheck();
  }

  signOut(){
    localStorage.removeItem("accessToken");
    this.authService.identityCheck();
    this.router.navigate([""])
    this.toastrService.message("Oturum kapatılmıştır!", "Oturum Kapatıldı", {
      messageType: TosterMessageType.Warning,
      position: TosterPosition.TopRight
    });
  }
}



