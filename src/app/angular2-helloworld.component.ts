import { Component, AfterViewInit} from '@angular/core';
import { HomeComponent } from './+home';
import { Routes, ROUTER_DIRECTIVES, ROUTER_PROVIDERS, Router} from '@angular/router';

@Component({
    moduleId: module.id,
    selector: 'angular2-helloworld-app',
    templateUrl: 'angular2-helloworld.component.html',
    styleUrls: ['angular2-helloworld.component.css'],
    directives: [ROUTER_DIRECTIVES],
    providers: [ROUTER_PROVIDERS]
})
@Routes([
    { path: '/home', component: HomeComponent }
])
export class Angular2HelloworldAppComponent implements AfterViewInit {
    title = 'Hello Angular2';
    
    constructor(public router:Router){}
    
    ngAfterViewInit() {
        this.router.navigateByUrl("/home");
    }
}
