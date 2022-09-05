import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './Pages/login/login.component';
import { ProductsComponent } from './Pages/products/products.component';

const routes: Routes = [
  { path: '', redirectTo: 'products/', pathMatch: 'full' },
  { path: 'products', component: ProductsComponent },
  { path: 'login', component: LoginComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
