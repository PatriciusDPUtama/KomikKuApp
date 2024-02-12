import { Component, NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy, Routes } from '@angular/router';
import { RouterModule } from '@angular/router';
import { ComicService } from './comic.service';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { ComicsComponent } from './comics/comics.component';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { CategoryComponent } from './category/category.component';
import { HttpClientModule } from '@angular/common/http';
import { IonicStorageModule } from '@ionic/storage-angular';
import { FormsModule } from '@angular/forms';
import { ComicdetailComponent } from './comicdetail/comicdetail.component';
import { PageComponent } from './page/page.component';
import { LoginService } from './login.service';
import { FavoriteComponent } from './favorite/favorite.component';
import { ServiceWorkerModule } from '@angular/service-worker';

const appRoutes : Routes = [
  {path:'comics',component: ComicsComponent},
  {path:'category',component:CategoryComponent},
  {path:'detail/:id' , component:ComicdetailComponent},
  {path:'page/:id' , component:PageComponent},
  {path:'favorite', component:FavoriteComponent},
];

@NgModule({
  declarations: [AppComponent,ComicsComponent,CategoryComponent,ComicdetailComponent,PageComponent,FavoriteComponent],
  imports: [FormsModule,IonicStorageModule.forRoot(),HttpClientModule,BrowserModule, IonicModule.forRoot(), AppRoutingModule,RouterModule.forRoot(appRoutes), ServiceWorkerModule.register('ngsw-worker.js', {
  enabled: !isDevMode(),
  // Register the ServiceWorker as soon as the application is stable
  // or after 30 seconds (whichever comes first).
  registrationStrategy: 'registerWhenStable:30000'
})],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy },ComicService,LoginService],
  bootstrap: [AppComponent],
})
export class AppModule {}
