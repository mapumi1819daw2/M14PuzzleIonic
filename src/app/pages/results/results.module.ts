import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';
import { ComponentsModule } from 'src/app/components/components.module';
import {DragDropModule} from '@angular/cdk/drag-drop';
import {ResultsComponent} from './results.component';


const routes: Routes = [
    {
        path: '',
        component: ResultsComponent
    }
];


@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        DragDropModule,
        ComponentsModule,
        RouterModule.forChild(routes)
    ],

    declarations: [ResultsComponent]
})

export class ResultsModule {}
