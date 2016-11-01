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
var platform_browser_1 = require('@angular/platform-browser');
var http_1 = require('@angular/http');
var forms_1 = require('@angular/forms');
var app_component_1 = require('./app.component');
var profile_component_1 = require('./components/profile/profile.component');
var search_component_1 = require('./components/search/search.component');
var navbar_component_1 = require('./components/navbar/navbar.component');
var about_component_1 = require('./components/about/about.component');
var user_component_1 = require('./components/user/user.component');
var contact_component_1 = require('./components/contact/contact.component');
var core_2 = require('angular2-google-maps/core');
var app_routing_1 = require('./app.routing');
var angular2_jwt_1 = require('angular2-jwt');
var auth_service_1 = require('./services/auth.service');
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [platform_browser_1.BrowserModule, app_routing_1.routing, http_1.HttpModule, forms_1.FormsModule, core_2.AgmCoreModule.forRoot({
                    apiKey: 'AIzaSyAzfTfmV81lTnQlYFoFJdMUFn07jV5jHmU'
                })
            ],
            declarations: [app_component_1.AppComponent, profile_component_1.ProfileComponent, search_component_1.SearchComponent, navbar_component_1.NavbarComponent, about_component_1.AboutComponent, user_component_1.UserComponent, contact_component_1.ContactComponent],
            bootstrap: [app_component_1.AppComponent],
            providers: [angular2_jwt_1.AUTH_PROVIDERS, auth_service_1.Auth]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map