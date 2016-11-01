import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
import {Places} from '../../../Places';
import {GithubService} from '../../services/github.services';
import {Auth} from '../../services/auth.service';

@Component({
	moduleId: module.id,
    selector: 'about',
    templateUrl: 'about.component.html'
})
export class AboutComponent{ 
	constructor(){
        
    }
}