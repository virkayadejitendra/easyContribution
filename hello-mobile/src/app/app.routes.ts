import { Routes } from '@angular/router'; 
import { AppComponent } from './app.component';  
import {GroupDetailComponent} from  './group-detail/group-detail.component';
import { FirstComponent } from './first/first.component';  
export const routes: Routes=[
    { path: 'First', component: FirstComponent },
    {path:'group-detail', component:GroupDetailComponent}
    ];

