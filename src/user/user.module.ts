import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {Routes, RouterModule} from '@angular/router';
import {MaterialModule} from '@angular/material';
import {FlexLayoutModule} from "@angular/flex-layout";

import {AuthGuard} from '../auth/auth.module';

import {UserComponent} from './user.component';
import {DataService} from "../common/data.service";

const routes: Routes = [
    {path: 'user/:userId', component: UserComponent, canActivate: [AuthGuard]}
];

@NgModule({
    declarations: [
        UserComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        MaterialModule,
        FlexLayoutModule,
        RouterModule.forChild(routes)
    ],
    providers: [
        DataService
    ]
})

export class UserModule {
}

export {DataService};
