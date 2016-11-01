import {Injectable, Inject} from '@angular/core';
import {Http, Response, RequestOptions, Headers, Request, RequestMethod} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()

export class GithubService{
	headers: any;
    private searchUrl: string;
	private placeUrl: string;
	private imageUrl: string;
	private weatherUrl: string;
	private googleUrl: string;

    constructor(private _http:Http){
        
    }
    searchCity(str:string){
		this.headers = new Headers();
		this.headers.append('X-Mashape-Key', 'r3K3Xohf9QmshR14w0wHuaKKET3xp1NZiHCjsnqyRjPi1DtMYt');
		
        this.searchUrl = 'https://trailapi-trailapi.p.mashape.com/?q[city_cont]=' + str +'&q[state_cont]=Arkansas&radius=25';
        return this._http.get(this.searchUrl, {
			headers : this.headers
		})
            .map(res => res.json());
    }
	getPlace(id:string) {
		this.headers = new Headers();
		this.headers.append('X-Mashape-Key', 'r3K3Xohf9QmshR14w0wHuaKKET3xp1NZiHCjsnqyRjPi1DtMYt');
		this.placeUrl = "https://trailapi-trailapi.p.mashape.com/?q[activities_unique_id_eq]=" + id;
		return this._http.get(this.placeUrl, {
			headers : this.headers
		})
            .map(res => res.json());
	}
	searchImage(str:string){
		this.headers = new Headers();
		this.headers.append('Api-Key', 'mhtqsqxg3qw8mm4dk7rdcrk5');
		
		this.imageUrl = 'https://api.gettyimages.com:443/v3/search/images?page=1&page_size=15&phrase='+ str +'%20arkansas&sort_order=best_match';
		return this._http.get(this.imageUrl, {
			headers : this.headers
		})
			.map(res => res.json());
	}
	getWeather(str:string){
		this.weatherUrl = "http://api.wunderground.com/api/160f6608cad2dafd/conditions/q/AR/" + str + ".json";
		return this._http.get(this.weatherUrl)
			.map(res => res.json());

	}
	
}