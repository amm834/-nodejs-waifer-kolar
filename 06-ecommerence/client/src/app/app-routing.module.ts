import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {DetailComponent} from "./detail/detail.component";
import {AuthComponent} from "./auth/auth.component";
import {LoginComponent} from "./auth/login/login.component";
import {RegisterComponent} from "./auth/register/register.component";
import {AdminPanelComponent} from "./admin-panel/admin-panel.component";
import {AdminHomeComponent} from "./admin-panel/admin-home/admin-home.component";
import {AdminGalleryComponent} from "./admin-panel/admin-gallery/admin-gallery.component";
import {GalleryCreateComponent} from "./admin-panel/gallery-create/gallery-create.component";
import {PostCreateComponent} from "./admin-panel/post-create/post-create.component";

const routes: Routes = [
  {path: "", component: HomeComponent},
  {path: "detail/:id", component: DetailComponent},
  {
    path: "auth", component: AuthComponent, children: [
      {path: "", component: LoginComponent},
      {path: "register", component: RegisterComponent}
    ]
  },
  {
    path: "admin", component: AdminPanelComponent, children: [
      {path: "", component: AdminHomeComponent},
      {path: "gallery", component: AdminGalleryComponent},
      {path: "gallery/create", component: GalleryCreateComponent},
      {path: "post", component: PostCreateComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
