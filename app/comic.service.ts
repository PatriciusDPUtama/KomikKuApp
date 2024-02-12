import { Injectable } from '@angular/core';
import { ComicModel } from './comic.model';
import { CategoryModel } from './category.model';
import { Observable } from 'rxjs';
import { of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ComicService {
  listOfComics: ComicModel[] = [];
  listOfCategorys: CategoryModel[] = [];

  comicList(): Observable<any> {
    return this.http.get("https://ubaya.fun/hybrid/160420121/php_files/comiclist.php");
  }

  comicListSearch(searchword:string): Observable<any> {
    let body = new HttpParams();
    body = body.set('search', searchword);
    return this.http.post("https://ubaya.fun/hybrid/160420121/php_files/comiclist.php",body);
  }

  categoryList(): Observable<any> {
    return this.http.get("https://ubaya.fun/hybrid/160420121/php_files/listcategory.php");
  }

  categoryComicList(categoryid:number): Observable<any> {
    let body = new HttpParams();
    body = body.set('category', categoryid);
    return this.http.post("https://ubaya.fun/hybrid/160420121/php_files/comicpercategory.php", body);
  }

  comicDetails(comicid:number): Observable<any> {
    let body = new HttpParams();
    body = body.set('comicsearch', comicid);
    return this.http.post("https://ubaya.fun/hybrid/160420121/php_files/detailcomics.php", body);
  }

  comicPages(comicid:number): Observable<any> {
    let body = new HttpParams();
    body = body.set('search', comicid);
    return this.http.post("https://ubaya.fun/hybrid/160420121/php_files/pagelist.php", body);
  }

  comicReviews(comicid:number): Observable<any> {
    let body = new HttpParams();
    body = body.set('comicid', comicid);
    return this.http.post("https://ubaya.fun/hybrid/160420121/php_files/reviewlist.php", body);
  }

  pageOfComic(pageid:number): Observable<any> {
    let body = new HttpParams();
    body = body.set('search', pageid);
    return this.http.post("https://ubaya.fun/hybrid/160420121/php_files/pagedetail.php", body);
  }

  favoriteComic(username:string): Observable<any> {
    let body = new HttpParams();
    body = body.set('username', username);
    return this.http.post("https://ubaya.fun/hybrid/160420121/php_files/listfavorites.php", body);
  }

  addToFavorite(comicid:number,username:string): Observable<any> {
    let body = new HttpParams();
    body = body.set('comicid',comicid)
    body = body.set('username', username);
    return this.http.post("https://ubaya.fun/hybrid/160420121/php_files/fav.php", body);
  }

  deleteFromFavorite(comicid:number,username:string): Observable<any> {
    let body = new HttpParams();
    body = body.set('comicid',comicid)
    body = body.set('username', username);
    return this.http.post("https://ubaya.fun/hybrid/160420121/php_files/deletefav.php", body);
  }

  addReview(comicid:number,username:string,comment:string,rating:number): Observable<any> {
    let body = new HttpParams();
    body = body.set('comicid',comicid)
    body = body.set('username', username);
    body = body.set('comment', comment);
    body = body.set('ratings', rating); 
    return this.http.post("https://ubaya.fun/hybrid/160420121/php_files/addreview.php", body);
  }

  constructor(private http: HttpClient) { }
}
