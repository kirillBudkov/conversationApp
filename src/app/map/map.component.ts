import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'app-map',
    templateUrl: './map.component.html',
    styleUrls: ['./map.component.sass']
})

export class MapComponent implements OnInit {
    ltChange: boolean;	
    lat: number=0;
    lng: number=0;
    
    @Input() set lattCh(lt) {
	    if(lt) {
            this.lat = parseInt(lt)
        };
    };

    @Input() set lnggCh(lg) {
	    if(lg) {
            this.lng = parseInt(lg)
        }
    };
    @Input() latt;
    @Input() lngg;

    constructor() { }
 
    ngOnInit() {
        this.lat = parseInt(this.latt);
        this.lng = parseInt(this.lngg);
    }
}
