import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
    {
        path: '', children: [
            {
                path: 'data-table',
                loadChildren: () => import('app/showcase/data-showcase/data-table-showcase/data-table-showcase.module').then(m => m.DataTableShowcaseModule)
            },
            {
                path: 'tree',
                loadChildren: () => import('app/showcase/data-showcase/tree-showcase/tree-showcase.module').then(m => m.TreeShowcaseModule)
            },
        ]
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(routes),
    ],
})
export class DataShowcaseModule { }
