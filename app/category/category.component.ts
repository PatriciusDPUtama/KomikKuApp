import { Component, OnInit } from '@angular/core';
import { CategoryModel } from '../category.model';
import { ComicService } from '../comic.service';
import { ComicModel } from '../comic.model';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss'],
})
export class CategoryComponent implements OnInit {

  categories:any = []
  comics:any=[];
  constructor(public cs:ComicService) { }

  listComic() {
    this.cs.comicList().subscribe(
       (data) => {
        this.comics=data
      });
  }

  listCategories() {
    this.cs.categoryList().subscribe(
       (data) => {
        this.categories=data
      });
  }

  listOfComicsPerCategories(categoryNumber:number) {
    this.cs.categoryComicList(categoryNumber).subscribe(
       (data) => {
        this.comics=data
      });
  }

  getComicsPerCategories(categoryID : number){
    this.comics = [];
    this.listOfComicsPerCategories(categoryID);
  }

  ngOnInit() {
    this.listComic();
    this.listCategories();
  }

}
