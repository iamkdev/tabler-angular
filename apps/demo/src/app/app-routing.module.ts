import { RouterModule, Routes } from '@angular/router'
import { ModuleWithProviders } from '@angular/core'
import { LayoutBaseComponent, LayoutComponent } from '@tabler/angular-ui'

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: 'components',
        loadChildren: './components/components.module#ComponentsModule',
      },
      { path: 'home', loadChildren: './home/home.module#HomeModule' },
      {
        path: 'interface',
        loadChildren: './interface/interface.module#InterfaceModule',
      },
      {
        path: 'profile',
        loadChildren: './profile/profile.module#ProfileModule',
      },
      { path: 'forms', loadChildren: './forms/forms.module#FormsModule' },
      {
        path: 'gallery',
        loadChildren: './gallery/gallery.module#GalleryModule',
      },
      {
        path: 'messages',
        loadChildren: './messages/messages.module#MessagesModule',
      },
      { path: 'empty', children: [] },
    ],
  },
  {
    path: '',
    component: LayoutBaseComponent,
    children: [
      { path: '', loadChildren: './auth/auth.module#AuthModule' },
      { path: '**', redirectTo: '/404?message=Invalid route' },
    ],
  },
]

export const AppRoutingModule: ModuleWithProviders = RouterModule.forRoot(routes)
