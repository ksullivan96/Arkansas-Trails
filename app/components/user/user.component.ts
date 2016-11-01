import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
import {Places} from '../../../Places';
import {GithubService} from '../../services/github.services';
import {Auth} from '../../services/auth.service';

@Component({
	moduleId: module.id,
    selector: 'user',
    templateUrl: 'user.component.html'
})
export class UserComponent{ 
	profile:any;
    
    constructor(private auth: Auth){
        this.profile = JSON.parse(localStorage.getItem('profile'));
        console.log(this.profile);
    }
}