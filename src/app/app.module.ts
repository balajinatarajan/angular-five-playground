import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';

import { TextService } from './text.service';
import { AccountComponent } from './account/account.component';
import { ReviewComponent } from './review/review.component';
import { CompleteComponent } from './complete/complete.component';
import { HttpClientModule } from '@angular/common/http';
import { TestModule } from './test/test.module';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    AccountComponent,
    ReviewComponent,
    CompleteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    TestModule
  ],
  providers: [TextService],
  bootstrap: [AppComponent]
})
export class AppModule {}
