import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProdutosComponent } from './components/produtos/produtos.component';
import { ProdutoSozinhoComponent } from './components/produto-sozinho/produto-sozinho.component';
import { HomeComponent } from './components/home/home.component';
import { SobreNosComponent } from './components/sobre-nos/sobre-nos.component';
import { ItemsComponent } from './components/items/items.component';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { LoginComponent } from './components/login/login.component';
import { AdicionarProdutosComponent } from './components/adicionar-produtos/adicionar-produtos.component';


const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: "produtos",
    component: ProdutosComponent
  },
  {
    path: "produto-sozinho",
    component: ProdutoSozinhoComponent
  },
  {
    path: 'sobre-nos',
    component: SobreNosComponent
  },
  {
    path: 'items',
    component: ItemsComponent
  },
  {
    path: 'checkout',
    component: CheckoutComponent
  },
  {
    path: 'login',
    component:LoginComponent
  },
  {
    path: "adicionar-produto",
    component: AdicionarProdutosComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
