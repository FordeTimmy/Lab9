import { Component, OnInit } from '@angular/core';
import {Storage} from '@ionic/storage-angular';
import { NavController } from '@ionic/angular';
@Component({
  selector: 'app-status',
  templateUrl: './status.page.html',
  styleUrls: ['./status.page.scss'],
})
export class StatusPage implements OnInit {
myStatus:String = "";
  constructor(private storage:Storage,private  navCtrl:NavController) {}

  ngOnInit() {
  }

  async onSave(){
    await this.storage.create();
    await this.storage.set("Status",this.myStatus)
    .then(
      ()=>{this.navCtrl.navigateBack('/home')}
    ).catch();
  }

}
