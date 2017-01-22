import { NgModule } from "@angular/core";
import { HomeComponent } from "./home.component";
import { BrowserModule } from "@angular/platform-browser";
/**
 * Created by matuszewski on 22/01/2017.
 */

@NgModule( {
  declarations: [ HomeComponent ],
  imports: [ BrowserModule ],
  exports: [ HomeComponent ]
} )
export class HomeModule {

}
