import { Component, OnInit } from '@angular/core';
import { ComicModel } from '../comic.model';
import { ComicService } from '../comic.service';

@Component({
  selector: 'app-comics',
  templateUrl: './comics.component.html',
  styleUrls: ['./comics.component.scss'],
})
export class ComicsComponent implements OnInit {
  comics: any = [];
  ratings: any=[];

  constructor(public cs: ComicService) { }

  searchComics(event:any) {
    const searchWord = event.target.value.toLowerCase();
    this.comics = [];
    this.listComicSearch(searchWord);
  }

  listComic() {
    this.cs.comicList().subscribe(
      (data) => {
        this.comics = data
      });

  }
  
  listComicSearch(search: string) {
    this.cs.comicListSearch(search).subscribe(
      (data) => {
        this.comics = data
      });
  }

  ngOnInit() {
    this.listComic();
  }

}
