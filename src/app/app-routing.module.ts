import { NgModule } from '@angular/core';
import { Router, RouterModule, Routes } from '@angular/router';
import { CartComponent } from './components/cart/cart';
import { LoginComponent } from './components/login/login';
import { ProductDetailComponent } from './components/products/products';
import { ProductListComponent } from './components/listofprod/listofprod';
import { RegisterComponent } from './components/credentials/credentials';
import { UserDetailComponent } from './components/user-detail/user-detail';

const routes: Routes = [
    {path: '', redirectTo: '/login', pathMatch: 'full'},
    {path: 'register', component: RegisterComponent},
    {path: 'login', component: LoginComponent},
    {path: 'shop', component: ProductListComponent},
    {path: 'shop/:term', component: ProductListComponent},
    {path: 'shop/products/:id', component: ProductDetailComponent},
    {path: 'account', component: UserDetailComponent},
    {path: 'cart', component: CartComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 
    constructor (router : Router) {}
}
