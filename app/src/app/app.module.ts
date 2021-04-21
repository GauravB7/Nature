//import all dependencies
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule,HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { NavbarComponent } from './navbar/navbar.component';
import { MenubarComponent } from './menubar/menubar.component';
import { FooterComponent } from './footer/footer.component';
import { MainComponent } from './main/main.component';
import { ProductsComponent } from './products/products.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { LoginComponent } from './login/login.component';
import {FormsModule} from '@angular/forms';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ProductsByCategoryComponent } from './products-by-category/products-by-category.component';
import { UserService } from './services/user.service';
import {AuthInterceptor} from './interceptors/auth-interceptor';
import {ReactiveFormsModule} from '@angular/forms';


@NgModule({
  declarations: [
    //Declare all components
    AppComponent,
    HeaderComponent,
    NavbarComponent,
    MenubarComponent,
    FooterComponent,
    MainComponent,
    ProductsComponent,
    AboutUsComponent,
    ContactUsComponent,
    FeedbackComponent,
    LoginComponent,
    ProductDetailsComponent,
    ProductsByCategoryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [UserService,{
    provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptor,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
