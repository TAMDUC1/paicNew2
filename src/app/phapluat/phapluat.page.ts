import { Component, OnInit } from '@angular/core';
import { NewsService } from '../services/news.service';
import {Router} from '@angular/router';
import {Platform} from '@ionic/angular';

@Component({
    selector: 'app-phapluat',
    templateUrl: './phapluat.page.html',
    styleUrls: ['./phapluat.page.scss'],
})
export class PhapluatPage implements OnInit {
    public newsphapluat =[];
    // inject cac service de dung
    constructor(private router: Router, private News: NewsService, private plt: Platform) { }

    ngOnInit() {
        this.plt.ready().then(() => {
            this.loadData(true);
        });
    }

    loadData(refresh = false, refresher?) {
        this.News.getNewsPhapLuat(refresh).subscribe(res => {
            this.newsphapluat = res;
            if(refresher){
                refresher.target.complete();
            }
        })
    }

}
