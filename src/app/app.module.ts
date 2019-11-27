import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { LoginComponent } from "./page/login/login.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { ClaimPageComponent } from './page/claim-page/claim-page.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { OverviewComponent } from './page/overview/overview.component';
import { ToggleButtonComponent } from './components/toggle-button/toggle-button.component';
import { TableComponent } from './components/table/table.component';
import { ExpenceClaimComponent } from './components/form-templates/expense-claim';
import { SectionComponent } from './components/section/section.component';
import { SectionGroupComponent } from './components/section/section-group/section-group.component';
import { SectionHeaderComponent } from './components/section/section-header/section-header.component';
import { SectionContentComponent } from './components/section/section-content/section-content.component';
import { FilterClaimPipe } from './filter-claim.pipe';
import { SearchComponent } from './components/search/search.component';
@NgModule({
  declarations: [AppComponent, LoginComponent, ClaimPageComponent, NavBarComponent, OverviewComponent, ToggleButtonComponent, TableComponent, SectionComponent, SectionGroupComponent, SectionHeaderComponent, SectionContentComponent, FilterClaimPipe, SearchComponent, ExpenceClaimComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
