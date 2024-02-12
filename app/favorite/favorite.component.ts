import { Component, OnInit } from '@angular/core';
import { ComicService } from '../comic.service';
import { ComicModel } from '../comic.model';
import { Storage } from '@ionic/storage-angular';
@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.scss'],
})
export class FavoriteComponent implements OnInit {
  userid="";
  comics:any=[];

  constructor(public storage: Storage,public cs:ComicService) { }

  listFavorties(username:string) {
    this.cs.favoriteComic(username).subscribe(
      (data) => {
        this.comics = data;
      });

  }

  async ngOnInit() {
    await this.storage.create();
    this.userid = await this.storage.get('user_id');
    this.listFavorties(this.userid);
  }

}
