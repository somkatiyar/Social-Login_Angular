import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsersComponent } from './pages/users/users.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { DataService } from './services/data.service';
import { ServiceWorkerModule } from '@angular/service-worker';

import { BlockUIModule } from 'ng-block-ui';
import { LoaderService } from './services/loader.service';
import { LoaderInterceptorService } from './services/loader-interceptor.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { GlobalerrorhandlerService } from './services/globalerror/globalerrorhandler.service';
import { ToastrModule } from 'ng6-toastr-notifications';

import { LeafletModule } from '@asymmetrik/ngx-leaflet';

import { FormsModule } from '@angular/forms';
import { AgmCoreModule } from '@agm/core';
import { SwapvalueComponent } from './pages/swapvalue/swapvalue.component';
import { SocialLoginModule, AuthServiceConfig, GoogleLoginProvider, FacebookLoginProvider } from 'angular4-social-login';
import { EmailComponent } from './email/email.component';

const baseURL = 'http://localhost:3000/' 


let config = new AuthServiceConfig([
  {
    id: GoogleLoginProvider.PROVIDER_ID,
    provider: new GoogleLoginProvider('757153566648-tlusimuv9sth8lfg9rbvhaf1fg5kg0d4.apps.googleusercontent.com')
  },
  {
    id: FacebookLoginProvider.PROVIDER_ID,
    provider: new FacebookLoginProvider('405166630170659')
  }
]);
@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,



    SwapvalueComponent,



    EmailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    SocialLoginModule.initialize(config),
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyB4JW3K5VKVIJfL-DVZbfFkuW18BLU6-ag',
      libraries: ["places"]
}),

    BlockUIModule.forRoot(),
    ToastrModule.forRoot(),
    BrowserAnimationsModule,
    LeafletModule.forRoot(),
  ],
  providers: [DataService,LoaderService,
    { provide: 'baseURL', useValue: baseURL },
    // { provide: ErrorHandler, useClass: GlobalerrorhandlerService },
  { provide: HTTP_INTERCEPTORS,
    useClass: LoaderInterceptorService,
    multi: true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
