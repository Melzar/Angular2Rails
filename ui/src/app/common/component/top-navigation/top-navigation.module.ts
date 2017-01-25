import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { TopNavigationComponent } from "./top-navigation.component";
/**
 * Created by matuszewski on 25/01/2017.
 */

@NgModule( {
  declarations: [
    TopNavigationComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    TopNavigationComponent
  ]
} )
export class TopNavigationModule {

}
