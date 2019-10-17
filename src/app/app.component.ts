import { Component } from '@angular/core';
import { SwUpdate } from '@angular/service-worker';
import { AuthService, GoogleLoginProvider, FacebookLoginProvider } from 'angular4-social-login';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'demo1';

  isUpdate: boolean = false;
  // constructor(update: SwUpdate) {
  //   update.available.subscribe(result => {
  //    this.isUpdate = true;
  //     update.activateUpdate().then(()=>{
  //       document.location.reload()
  //     })

  //   })
  // }


  user: any;
 
  constructor(private _socioAuthServ: AuthService) { }
 
  // Method to sign in with google.
  singIn(platform : string): void {

    if(platform =="Google") {
      platform = GoogleLoginProvider.PROVIDER_ID;

    }
    if(platform =="Facebook") {
      platform = FacebookLoginProvider.PROVIDER_ID;

    }

    this._socioAuthServ.signIn(platform).then(
      (response) => {
        console.log(platform + " logged in user data is= " , response);
        this.user = response;
      }
    );
  }
 
  // Method to log out.
  signOut(): void {
    this._socioAuthServ.signOut().then(result => {
      this.user = null;
      console.log('User signed out.');
    }).catch(err => {
      console.log(err);
    });
   
   
  }
}
