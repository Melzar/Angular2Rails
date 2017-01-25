import { Routes } from "@angular/router";
import { TopNavigationLayoutComponent } from "./common/component/layout/top-navigation-layout.component";
import { HomeComponent } from "./home/home.component";
/**
 * Created by matuszewski on 25/01/2017.
 */

export const ROUTES: Routes = [
  // Default Route
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  // App view route
  {
    path: '', component: TopNavigationLayoutComponent,
    children: [
      { path: 'home', component: HomeComponent }
    ]
  }
]
