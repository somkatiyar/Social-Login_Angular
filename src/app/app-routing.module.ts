import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SwapvalueComponent } from './pages/swapvalue/swapvalue.component';
import { EmailComponent } from './email/email.component';


const routes: Routes = [
  { path: '', redirectTo: '/stateDistrict', pathMatch: 'full' },
  { path:'stateDistrict', component:SwapvalueComponent},
  { path:'email', component:EmailComponent},
  

  { path:'stateDistrict', component:SwapvalueComponent}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
