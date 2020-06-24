import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopNavbarComponent } from './Components/top-navbar/top-navbar.component';
import { FooterComponent } from './Components/footer/footer.component';
import { FrontComponent } from './Components/front/front.component';
import { MainComponent } from './Components/main/main.component';
import { CoursesComponent } from './Components/courses/courses.component';

@NgModule({
  declarations: [
    AppComponent,
    TopNavbarComponent,
    FooterComponent,
    FrontComponent,
    MainComponent,
    CoursesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
