import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { TopNavigationLayoutComponent } from "./top-navigation-layout.component";
import { RouterModule } from "@angular/router";
import { TopNavigationModule } from "../top-navigation/top-navigation.module";
/**
 * Created by matuszewski on 25/01/2017.
 */

@NgModule( {
  declarations: [
    TopNavigationLayoutComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    TopNavigationModule
  ],
  exports: [
    TopNavigationLayoutComponent
  ]
} )
export class LayoutModule {

}
