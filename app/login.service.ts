import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  login(username:string,password:string): Observable<any> {
    let body = new HttpParams();
    body = body.set('username', username);
    body = body.set('user_password',password)
    return this.http.post("https://ubaya.fun/hybrid/160420121/php_files/login.php", body);
  }
  constructor(private http: HttpClient) { }
}
