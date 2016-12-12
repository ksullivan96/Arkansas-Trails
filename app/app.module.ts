import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpModule} from '@angular/http';
import {FormsModule} from '@angular/forms';
import { AppComponent }  from './app.component';
import { ProfileComponent } from './components/profile/profile.component';
import { SearchComponent } from './components/search/search.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AboutComponent } from './components/about/about.component';
import { UserComponent } from './components/user/user.component';
import { FooterComponent } from './components/footer/footer.component';
import { ContactComponent } from './components/contact/contact.component';
import { AgmCoreModule } from 'angular2-google-maps/core';
import {routing} from './app.routing';
import {AUTH_PROVIDERS} from 'angular2-jwt';
import {Auth} from './services/auth.service';

@NgModule({
  imports: [ BrowserModule, routing, HttpModule, FormsModule, AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAzfTfmV81lTnQlYFoFJdMUFn07jV5jHmU'
    })
  ],
  declarations: [ AppComponent, ProfileComponent, SearchComponent, NavbarComponent, AboutComponent, UserComponent, ContactComponent, FooterComponent],
  bootstrap: [ AppComponent ],
  providers: [AUTH_PROVIDERS, Auth]
})
export class AppModule { }
