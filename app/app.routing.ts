import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {SearchComponent} from './components/search/search.component';
import {ProfileComponent} from './components/profile/profile.component';
import {AboutComponent} from './components/about/about.component';
import {UserComponent} from './components/user/user.component';
import {ContactComponent} from './components/contact/contact.component';

const appRoutes: Routes = [
    {
        path:'',
        component:SearchComponent
    },
	{
		path:'places/:id',
		component:ProfileComponent
	},
    {
        path:'about',
        component: AboutComponent
    },
    {
        path:'profile',
        component: UserComponent
    },
    {
        path:'contact',
        component: ContactComponent
    },
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);