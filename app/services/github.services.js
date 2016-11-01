"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var http_1 = require('@angular/http');
require('rxjs/add/operator/map');
var GithubService = (function () {
    function GithubService(_http) {
        this._http = _http;
    }
    GithubService.prototype.searchCity = function (str) {
        this.headers = new http_1.Headers();
        this.headers.append('X-Mashape-Key', 'r3K3Xohf9QmshR14w0wHuaKKET3xp1NZiHCjsnqyRjPi1DtMYt');
        this.searchUrl = 'https://trailapi-trailapi.p.mashape.com/?q[city_cont]=' + str + '&q[state_cont]=Arkansas&radius=25';
        return this._http.get(this.searchUrl, {
            headers: this.headers
        })
            .map(function (res) { return res.json(); });
    };
    GithubService.prototype.getPlace = function (id) {
        this.headers = new http_1.Headers();
        this.headers.append('X-Mashape-Key', 'r3K3Xohf9QmshR14w0wHuaKKET3xp1NZiHCjsnqyRjPi1DtMYt');
        this.placeUrl = "https://trailapi-trailapi.p.mashape.com/?q[activities_unique_id_eq]=" + id;
        return this._http.get(this.placeUrl, {
            headers: this.headers
        })
            .map(function (res) { return res.json(); });
    };
    GithubService.prototype.searchImage = function (str) {
        this.headers = new http_1.Headers();
        this.headers.append('Api-Key', 'mhtqsqxg3qw8mm4dk7rdcrk5');
        this.imageUrl = 'https://api.gettyimages.com:443/v3/search/images?page=1&page_size=15&phrase=' + str + '%20arkansas&sort_order=best_match';
        return this._http.get(this.imageUrl, {
            headers: this.headers
        })
            .map(function (res) { return res.json(); });
    };
    GithubService.prototype.getWeather = function (str) {
        this.weatherUrl = "http://api.wunderground.com/api/160f6608cad2dafd/conditions/q/AR/" + str + ".json";
        return this._http.get(this.weatherUrl)
            .map(function (res) { return res.json(); });
    };
    GithubService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], GithubService);
    return GithubService;
}());
exports.GithubService = GithubService;
//# sourceMappingURL=github.services.js.map