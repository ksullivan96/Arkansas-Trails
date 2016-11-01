"use strict";
var router_1 = require('@angular/router');
var search_component_1 = require('./components/search/search.component');
var profile_component_1 = require('./components/profile/profile.component');
var about_component_1 = require('./components/about/about.component');
var user_component_1 = require('./components/user/user.component');
var contact_component_1 = require('./components/contact/contact.component');
var appRoutes = [
    {
        path: '',
        component: search_component_1.SearchComponent
    },
    {
        path: 'places/:id',
        component: profile_component_1.ProfileComponent
    },
    {
        path: 'about',
        component: about_component_1.AboutComponent
    },
    {
        path: 'profile',
        component: user_component_1.UserComponent
    },
    {
        path: 'contact',
        component: contact_component_1.ContactComponent
    },
];
exports.routing = router_1.RouterModule.forRoot(appRoutes);
//# sourceMappingURL=app.routing.js.map