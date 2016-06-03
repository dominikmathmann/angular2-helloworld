import { Component, OnInit } from '@angular/core';

declare var jQuery: any;

@Component({
    moduleId: module.id,
    selector: 'app-home',
    templateUrl: 'home.component.html',
    styleUrls: ['home.component.css'],
})
export class HomeComponent implements OnInit {

    constructor() { }

    ngOnInit() {
        //TODO move to directive
        if (jQuery('#fh5co-team').length > 0) {
            jQuery('#fh5co-team').waypoint(function(direction) {
                if (direction === 'down' && !jQuery(this.element).hasClass('animated')) {
                    setTimeout(() => {
                        if (jQuery('#fh5co-team').length > 0) {
                            jQuery('#fh5co-team .to-animate').each(function(k) {

                                var el = jQuery(this);

                                setTimeout(function() {
                                    console.log('yaya');
                                    el.addClass('fadeInUp animated');
                                }, k * 200, 'easeInOutExpo');

                            });
                        }
                    }, 200);
            jQuery(this.element).addClass('animated');
        }
    }, { offset: '80%' });
        }
    }
}
