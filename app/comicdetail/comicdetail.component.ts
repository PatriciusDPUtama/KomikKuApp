import { Component, OnInit } from '@angular/core';
import { ComicModel } from '../comic.model'
import { ComicService } from '../comic.service';
import { ActivatedRoute } from '@angular/router';
import { RangeCustomEvent } from '@ionic/angular';
import { RangeValue } from '@ionic/core';
import { Storage } from '@ionic/storage-angular';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-comicdetail',
  templateUrl: './comicdetail.component.html',
  styleUrls: ['./comicdetail.component.scss'],
})
export class ComicdetailComponent implements OnInit {
  comics: any = [];
  pages: any = [];
  reviews:any=[];
  userid = "";
  success: any = "";

  rating = 0;
  addComment = "";

  comicDetails(comicID: number) {
    this.cs.comicDetails(comicID).subscribe(
      (data) => {
        this.comics = data;
      });
  }

  reviewList(comicID: number) {
    this.cs.comicReviews(comicID).subscribe(
      (data) => {
        this.reviews = data;
      });
  }

  addReviews(comicID: number,username:string,comment:string,rating:number) {
    this.cs.addReview(comicID,username,comment,rating).subscribe(
      (data) => {
        this.reviewList(comicID);
      });
  }

  comicPages(comicID: number) {
    this.cs.comicPages(comicID).subscribe(
      (data) => {
        this.pages = data;
      });
  }

  addFavorite(comicID: number, username: string) {
    this.success = [];
    this.cs.addToFavorite(comicID, username).subscribe(
      (data) => {
        this.success = data.result;
      });
  }

  deleteFavorite(comicID: number, username: string) {
    this.success = [];
    this.cs.deleteFromFavorite(comicID, username).subscribe(
      (data) => {
        this.success = data.result;
      });
  }

  async addingReviews(comicID: number, username: string,comment:string,rating:number) {
    this.addReviews(comicID, username,comment,rating);
    const alert = await this.alertController.create({
      header: "Review",
      message: 'Add Review!',
      buttons: ['OK'],
    });
    await alert.present();
  }

  async deletingFavorite(comicID: number, username: string) {
    this.deleteFavorite(comicID, username);
    const alert = await this.alertController.create({
      header: "Delete",
      message: 'Deleted to Favorites!',
      buttons: ['OK'],
    });
    await alert.present();
  }

  async addingToFavorite(comicID: number, username: string) {
    this.addFavorite(comicID, username);
    const alert = await this.alertController.create({
      header: "Favorites",
      message: 'Added to Favorites!',
      buttons: ['OK'],
    });
    await alert.present();
  }

  constructor(public cs: ComicService,
    public route: ActivatedRoute, public storage: Storage, private alertController: AlertController) { }

  async ngOnInit() {
    await this.storage.create();
    this.userid = await this.storage.get('user_id');
    var id: number = this.route.snapshot.params['id'];
    this.comicDetails(id);
    this.comicPages(id);
    this.reviewList(id);
  }

}
