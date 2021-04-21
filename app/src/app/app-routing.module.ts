//import all dependencies
import {
  NgModule
} from '@angular/core';
import {
  Routes,
  RouterModule
} from '@angular/router';
import {
  AboutUsComponent
} from './about-us/about-us.component';
import {
  MainComponent
} from './main/main.component';
import {
  ProductsComponent
} from './products/products.component';
import {
  ContactUsComponent
} from './contact-us/contact-us.component';
import {
  FeedbackComponent
} from './feedback/feedback.component';
import {
  LoginComponent
} from './login/login.component';
import {
  ProductDetailsComponent
} from './product-details/product-details.component';
import {
  ProductsByCategoryComponent
} from './products-by-category/products-by-category.component';

//define all routes
const routes: Routes = [{
    path: 'home',
    component: MainComponent,
  },
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: 'products',
    component: ProductsComponent,
  },
  {
    path: 'aboutUs',
    component: AboutUsComponent
  },
  {
    path: 'contactUs',
    component: ContactUsComponent
  },
  {
    path: 'feedback',
    component: FeedbackComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'productDetail/:id',
    component: ProductDetailsComponent
  },
  {
    path: 'productsByCategory/:id',
    component: ProductsByCategoryComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
