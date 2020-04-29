import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'home',
        children: [
          {
            path: '',
            loadChildren: () => import('../home/home.module').then(m => m.HomePageModule)
          }
        ]
      },
      {
        path: 'marcacao-ponto',
        children: [
          {
            path: '',
            loadChildren: () => import('../marcacao-ponto/marcacao-ponto.module').then(m => m.MarcacaoPontoPageModule)
          }
        ]
      },
      {
        path: 'view-marcacao',
        children: [
          {
            path: '',
            loadChildren: () => import('../view-ponto/view-ponto.module').then(m => m.ViewPontoPageModule)
          }
        ]
      }
      ,
      {
        path: 'perfil',
        children: [
          {
            path: '',
            loadChildren: () => import('../perfil/perfil.module').then(m => m.PerfilPageModule)
          }
        ]
      },
      {
        path: '',
        redirectTo: '/tabs/home',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}
