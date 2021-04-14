import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';
import {MainComponent} from './main/main.component';
import {ProductsComponent} from './products/products.component';
import {ContactUsComponent} from './contact-us/contact-us.component';
import {FeedbackComponent} from './feedback/feedback.component';
import {LoginComponent} from './login/login.component';


const routes: Routes = [
  {path:'home', component:MainComponent},
  {path:'',redirectTo:'/home',pathMatch:'full'},
  {path:'products',component:ProductsComponent},
  {path:'aboutUs',component:AboutUsComponent},
  {path:'contactUs',component:ContactUsComponent},
  {path:'feedback',component:FeedbackComponent},
  {path:'login',component:LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
