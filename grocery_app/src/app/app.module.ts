import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './Layout/navbar/navbar.component';
import { HomeComponent } from './Layout/home/home.component';
// import { CategoriesComponent } from './navbar/categories/categories.component';
import { AboutComponent } from './Layout/navbar/about/about.component';
import { ContactusComponent } from './Layout/navbar/contactus/contactus.component';
import { CatalogModule } from './Modules/front/catalog/catalog.module';
import { FooterComponent } from './footer/footer.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { MatCarouselModule } from '@thouet/material-carousel';
import { CategoryComponent } from './Modules/front/catalog/category/category.component';
import { CommonModule } from '@angular/common';
import { CategoryProductsComponent } from './Modules/front/catalog/category-products/category-products.component';
import { IvyCarouselModule } from 'angular-responsive-carousel';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { CartComponent } from './Modules/front/catalog/cart/cart/cart.component';
import { UsersModule } from './Modules/front/users/users.module';
import { FrontModule } from './Modules/front/front.module';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { CategoryService } from './Shared/Services/category.service';
import { AuthInterceptor } from './Shared/interceptors/auth.interceptor';
import { UserService } from './Shared/Services/user.service';
import { MatCardModule } from '@angular/material/card';
import { NgxDialogsModule } from 'ngx-dialogs';
import { MatExpansionModule } from '@angular/material/expansion';
import { OrdersComponent } from './Modules/front/users/profilePage/profile-page/profileMenuPages/orders/orders.component';
import { NgxSpinnerModule } from 'ngx-spinner';
import {MatSelectModule} from '@angular/material/select';

// import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import {
  NgxAwesomePopupModule,
  DialogConfigModule,
  ConfirmBoxConfigModule,
  ToastNotificationConfigModule
} from '@costlydeveloper/ngx-awesome-popup';
import { CategoryFilterPipe } from './Modules/front/catalog/category/category-filter.pipe';
import { ErrorpageComponent } from './Shared/Components/errorpage/errorpage.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    AboutComponent,
    ContactusComponent,
    FooterComponent,
    CategoryComponent,
    OrdersComponent,
    CategoryProductsComponent,
    ErrorpageComponent,
  ],
  providers: [
    CategoryService,
    UserService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormsModule,
    CarouselModule,
    MatCarouselModule,
    IvyCarouselModule,
    HttpClientModule,
    CatalogModule,
    FrontModule,
    UsersModule,
    MatSnackBarModule,
    MatCardModule,
    MatExpansionModule,
    NgxDialogsModule,
    NgxSpinnerModule,
    ToastrModule.forRoot(),
    NgxAwesomePopupModule.forRoot(), // Essential, mandatory main module.
    DialogConfigModule.forRoot(), // Needed for instantiating dynamic components.
    ConfirmBoxConfigModule.forRoot(), // Needed for instantiating confirm boxes.
    ToastNotificationConfigModule.forRoot(),
    MatSelectModule
  
  ],
})
export class AppModule {}
