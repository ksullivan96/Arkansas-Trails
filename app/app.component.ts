import { Component } from '@angular/core';
import {GithubService} from './services/github.services';
import {Auth} from './services/auth.service';


@Component({
	moduleId: module.id,
    selector: 'my-app',
    templateUrl: 'app.component.html',
	providers: [GithubService, Auth]
})
export class AppComponent {
    constructor(private auth: Auth) {
    
    }
}
