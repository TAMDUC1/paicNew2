import { Component, OnInit } from '@angular/core';
import { NewsService } from '../services/news.service';
import {Router} from '@angular/router';
import {Platform} from '@ionic/angular';

@Component({
    selector: 'app-tin-tap-doan',
    templateUrl: './tin-tap-doan.page.html',
    styleUrls: ['./tin-tap-doan.page.scss'],
})
export class TinTapDoanPage implements OnInit {

    public newsbds = [];
    constructor(private router: Router, private News: NewsService, private plt: Platform) { }

    ngOnInit() {
        this.plt.ready().then(() => {
            this.loadData(true);
        });
    }

    loadData(refresh = false, refresher?) {
        this.News.getNewBDS(refresh).subscribe(res => {
            this.newsbds = res;
            if(refresher){
                refresher.target.complete();
            }
        })
    }

}
