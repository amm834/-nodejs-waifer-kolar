import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HomeComponent} from './home/home.component';
import {NavComponent} from './nav/nav.component';
import {LocalService} from "../services/local.service";
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {DetailComponent} from './detail/detail.component';
import {AuthComponent} from './auth/auth.component';
import {LoginComponent} from './auth/login/login.component';
import {RegisterComponent} from './auth/register/register.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {AdminPanelComponent} from './admin-panel/admin-panel.component';
import {GalleryCreateComponent} from './admin-panel/gallery-create/gallery-create.component';
import {AdminGalleryComponent} from './admin-panel/admin-gallery/admin-gallery.component';
import {AdminHomeComponent} from './admin-panel/admin-home/admin-home.component';
import {PostCreateComponent} from './admin-panel/post-create/post-create.component';
import {RequestInterceptor} from "./helper/request.interceptor";
import {ImageCropperModule} from "ngx-image-cropper";
import {PostAllComponent} from './post-all/post-all.component';
import {LoadingComponent} from './loading/loading.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavComponent,
    DetailComponent,
    AuthComponent,
    LoginComponent,
    RegisterComponent,
    AdminPanelComponent,
    GalleryCreateComponent,
    AdminGalleryComponent,
    AdminHomeComponent,
    PostCreateComponent,
    PostAllComponent,
    LoadingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    ImageCropperModule
  ],
  providers: [
    LocalService,
    {provide: HTTP_INTERCEPTORS, useClass: RequestInterceptor, multi: true},
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
