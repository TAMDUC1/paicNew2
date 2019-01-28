import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-tab4',
  templateUrl: 'tab4.page.html',
  styleUrls: ['tab4.page.scss']
})
export class Tab4Page {
    constructor(private router: Router,private navCrl: NavController) {

    }
    go() {
        this.navCrl.navigateForward('/animals');
    }
    goTinTapDoan(){
        this.navCrl.navigateForward('/tin-tap-doan');

    }
    goTinPhapLuat(){
        this.navCrl.navigateForward('/phapluat');

    }
    goTinCongTrinhDauKhi(){
        this.navCrl.navigateForward('/congtrinhdaukhi');

    }
}
