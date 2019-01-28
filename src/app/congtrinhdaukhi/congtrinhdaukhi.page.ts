import { Component, OnInit } from '@angular/core';
import { NewsService } from '../services/news.service';
import {Router} from '@angular/router';
import {Platform} from '@ionic/angular';

@Component({
    selector: 'app-congtrinhdaukhi',
    templateUrl: './congtrinhdaukhi.page.html',
    styleUrls: ['./congtrinhdaukhi.page.scss'],
})
export class CongtrinhdaukhiPage implements OnInit{
    public newsctdk = [];
    constructor(private router: Router, private News: NewsService, private plt: Platform) { }

    ngOnInit() {
        this.plt.ready().then(() => {
            this.loadData(true);
        });
    }

    loadData(refresh = false, refresher?) {
        this.News.getNewsCongTrinhDauKhi(refresh).subscribe(res => {
            this.newsctdk = res;
            if(refresher){
                refresher.target.complete();
            }
        })
    }
}
