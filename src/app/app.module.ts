import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FlexLayoutModule } from "@angular/flex-layout";

import { AppComponent } from "./app.component";
import { FloatterComponent } from "./floatter/floatter.component";
import { LeftComponent } from './left/left.component';
import { RightComponent } from './right/right.component';
import { AboutusComponent } from './aboutus/aboutus.component';

@NgModule({
  declarations: [AppComponent, FloatterComponent, LeftComponent, RightComponent, AboutusComponent],
  imports: [BrowserModule, FlexLayoutModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
