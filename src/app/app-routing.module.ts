import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsComponent } from './products/products.component';
import { ContactsComponent } from './contacts/contacts.component';

const routes: Routes = [
  {path: 'products', component: ProductsComponent},
  {path: '', component: ProductsComponent},
  {path: 'contacts', component: ContactsComponent},
  {path: '**', redirectTo: ''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
