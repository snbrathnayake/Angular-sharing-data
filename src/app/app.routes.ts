import { RouterModule, Routes } from '@angular/router';
import { RootComponent } from './root/root.component';
import { ChildAppComponent } from './child-app/child-app.component';
import { ParentAppComponent } from './parent-app/parent-app.component';
import { GrandComponent } from './grand/grand.component';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'root',
        pathMatch: 'full'
    },
    {
        path: 'root',
        component: RootComponent
    },
    {
        path: 'parent',
        component: ParentAppComponent
    },
    {
        path: 'child',
        component: ChildAppComponent
    },
    {
        path: 'grand',
        component: GrandComponent
    },
    
]

export const Routing = RouterModule.forRoot(routes, {useHash:true});