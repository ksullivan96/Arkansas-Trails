import { Component } from '@angular/core';
import {GithubService} from '../../services/github.services';
import {Places} from '../../../Places';
import { AppComponent } from '../../app.component'
@Component({
	moduleId: module.id,
    selector: 'search',
    templateUrl: 'search.component.html'
})
export class SearchComponent { 
	searchStr: string;
	searchRes: Places[];
	imgStr: string;
	trailId: number;

	constructor(private _githubService: GithubService) {

}
	searchCity(){
        this._githubService.searchCity(this.searchStr)
			.subscribe(
				res => {
				this.searchRes = res.places
				});
	}
	
	
}