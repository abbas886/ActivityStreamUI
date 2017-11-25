import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { CircleComponent } from './circle/circle.component';
import { MessageComponent } from './message/message.component';
import { UserComponent } from './user/user.component';

export const routes: Routes = [
  {
    path: 'users',
    component: UserComponent
  },
  {
    path: 'circles',
    component: CircleComponent
  },
  {
    path: 'messages',
    component: MessageComponent
  },
  {
    path: 'user/messages/:id',
    component: MessageComponent
  },
  {
    path: 'circle/messages/:id',
    component: MessageComponent
  }
  
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);
