import {Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { NewsService } from '../services/news.service';
import {Platform} from '@ionic/angular';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})

export class Tab2Page implements OnInit{
    public http;
    public books: any[];
    page = 0;
    constructor(private router: Router, private News: NewsService, private plt:Platform) {
    }
    ngOnInit() {
        this.plt.ready().then(() => {
            this.loadData(true);
        });
    }
    loadData(refresh = false, refresher?) {
       this.News.getNews2(refresh).subscribe(res => {
           this.books = res;
           if(refresher){
               refresher.target.complete();
           }
       })
    }
}
