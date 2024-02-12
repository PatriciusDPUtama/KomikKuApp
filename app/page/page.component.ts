import { Component, OnInit } from '@angular/core';
import { ComicService } from '../comic.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.scss'],
})
export class PageComponent implements OnInit {

  pages:any=[];
  i=1;
  pageID:number=0;

  constructor(public cs: ComicService,
    public route: ActivatedRoute) { }

  numOfPages(pageId:number) {
    this.cs.pageOfComic(pageId).subscribe(
      (data) => {
        const numOfPage = data[0].num_pages;
        for (let x = 1; x <=numOfPage; x++) {
          this.pages.push(x)
        }
      });

  }

  ngOnInit() {
    var id: number = this.route.snapshot.params['id'];
    this.pageID = id;
    this.numOfPages(id);
  }

}
