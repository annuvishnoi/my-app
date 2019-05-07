import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [  
  {
    path: '',
    redirectTo: 'en/project',
    pathMatch: 'full'
  },
  {
    path: ':lang/project',
    
    loadChildren: './project/project.module#ProjectModule',
  },
  {
    path: ':lang/addTask',    
    loadChildren: './add-task/add-task.module#AddTaskModule',
  },
  {
    path: ':lang/user',
    loadChildren: './user/user.module#UserModule',
  },
  {
    path: ':lang/viewTask',
    loadChildren: './view-task/view-task.module#ViewTaskModule',
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
