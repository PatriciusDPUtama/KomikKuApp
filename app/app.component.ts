import { Component } from '@angular/core';
import { Storage } from '@ionic/storage-angular';
import { LoginService } from './login.service';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  user_id = '';

  login_user = "";
  login_passwd = ""
  login_error = ""
  resultUsername="";

  async login() {
    this.getAccount(this.login_user,this.login_passwd)
    if (this.login_user==this.resultUsername) {
      this.user_id = this.resultUsername;
      this.storage.set('user_id', this.user_id);
    }
    else {;
      const alert = await this.alertController.create({
        header: "Login",
        message: 'Username and/or Password is Wrong!',
        buttons: ['OK'],
      });
      await alert.present();
    }
  }

  logout() {
    this.user_id = '';
    this.storage.remove('user_id');
  }

  getAccount(username:string,password:string) {
    this.ls.login(username,password).subscribe(
      (data) => {
        this.resultUsername = data[0].username;
      });

  }
  constructor(public storage: Storage,public ls:LoginService,private alertController: AlertController) { }

  async ngOnInit() {
    await this.storage.create();
    this.user_id = await this.storage.get('user_id');
  }
}
