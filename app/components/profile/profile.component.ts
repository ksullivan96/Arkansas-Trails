import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
import {Places} from '../../../Places';
import {GithubService} from '../../services/github.services';

@Component({
	moduleId: module.id,
    selector: 'profile',
    templateUrl: 'profile.component.html'
})
export class ProfileComponent implements OnInit{ 
    id:string;
	imgStr: string;
    placeRes: Places[];
	imgRes: any;
    trailDesc: Places[];
    noImgRes: any;
    city: string;
    weather: any;

	constructor(
        private _githubService:GithubService, 
        private _route:ActivatedRoute){
        
    }
	ngOnInit(){
        this._route.params
            .map(params => params['id'])
            .subscribe((id) => {
                this._githubService.getPlace(id)
                    .subscribe(res => {
                        this.placeRes = res.places[0]
                        this.city = res.places[0].city
                        this._githubService.getWeather(this.city)
                        .subscribe(
                            res => {
                                this.weather = res
                                this.weather = res.current_observation
                            }
                        ),
                        this.trailDesc = res.places[0].activities[0]
						this.imgStr = res.places[0].name
						this._githubService.searchImage(this.imgStr)
						.subscribe(
							res => {
                                if (res.images.length < 1) {
                                    this.imgRes = false
                                    this.noImgRes = true
                                }
                                else {
                                    this.imgRes = res.images
                                }

							},
                            err => {
                                this.noImgRes = true
                            });
                    })
            });
    }
	
	
}