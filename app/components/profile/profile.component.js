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
var router_1 = require('@angular/router');
var github_services_1 = require('../../services/github.services');
var ProfileComponent = (function () {
    function ProfileComponent(_githubService, _route) {
        this._githubService = _githubService;
        this._route = _route;
    }
    ProfileComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._route.params
            .map(function (params) { return params['id']; })
            .subscribe(function (id) {
            _this._githubService.getPlace(id)
                .subscribe(function (res) {
                _this.placeRes = res.places[0];
                _this.city = res.places[0].city;
                _this._githubService.getWeather(_this.city)
                    .subscribe(function (res) {
                    _this.weather = res;
                    _this.weather = res.current_observation;
                }),
                    _this.trailDesc = res.places[0].activities[0];
                _this.imgStr = res.places[0].name;
                _this._githubService.searchImage(_this.imgStr)
                    .subscribe(function (res) {
                    if (res.images.length < 1) {
                        _this.imgRes = false;
                        _this.noImgRes = true;
                    }
                    else {
                        _this.imgRes = res.images;
                    }
                }, function (err) {
                    _this.noImgRes = true;
                });
            });
        });
    };
    ProfileComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'profile',
            templateUrl: 'profile.component.html'
        }), 
        __metadata('design:paramtypes', [github_services_1.GithubService, router_1.ActivatedRoute])
    ], ProfileComponent);
    return ProfileComponent;
}());
exports.ProfileComponent = ProfileComponent;
//# sourceMappingURL=profile.component.js.map