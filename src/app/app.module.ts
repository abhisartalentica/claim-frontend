import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { LoginComponent } from "./page/login/login.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { ClaimPageComponent } from "./page/claim-page/claim-page.component";
import { NavBarComponent } from "./components/nav-bar/nav-bar.component";
import { OverviewComponent } from "./page/overview/overview.component";
import { ToggleButtonComponent } from "./components/toggle-button/toggle-button.component";
import { TableComponent } from "./components/table/table.component";
import { ExpenceClaimComponent } from "./components/form-templates/expense-claim/expense-claim.component";
import { DomesticClaimComponent } from "./components/form-templates/domestic-claim/domestic-claim.component";
import { ForeignClaimComponent } from "./components/form-templates/foreign-claim/foreign-claim.component";
import { LocalConveyanceClaimComponent } from "./components/form-templates/local-conveyance-claim/local-conveyance-claim.component";
import { TableRenderer } from "./components/table-renderer/table-renderer";
import { SectionComponent } from "./components/section/section.component";
import { SectionGroupComponent } from "./components/section/section-group/section-group.component";
import { SectionHeaderComponent } from "./components/section/section-header/section-header.component";
import { SectionContentComponent } from "./components/section/section-content/section-content.component";
import { FilterClaimPipe } from "./filter-claim.pipe";
import { SearchComponent } from "./components/search/search.component";
import { HttpClientModule } from "@angular/common/http";
import { ClaimDetailComponent } from "./page/claim-detail/claim-detail.component";
import { PanelComponent } from "./components/panel/panel.component";
import { SignUpComponent } from "./page/login/sign-up/sign-up.component";
import { StoreModule } from "@ngrx/store";
import { UserReducer } from "./reducers/users.reducer";
import { TeamReducer } from "./reducers/teams.reducer";
import { ClaimReducer } from "./reducers/claims.reducer";
import { CookieService } from "ngx-cookie-service";
import { NgSelectModule } from "@ng-select/ng-select";
import { MultiSelectComponent } from "./components/multi-select/multi-select.component";
import { HighlightDirective } from "./util/dropdownMenu.directive";
import { CreateClaimComponent } from './page/create-claim/create-claim.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ClaimPageComponent,
    NavBarComponent,
    OverviewComponent,
    ToggleButtonComponent,
    TableComponent,
    SectionComponent,
    SectionGroupComponent,
    SectionHeaderComponent,
    SectionContentComponent,
    FilterClaimPipe,
    SearchComponent,
    ExpenceClaimComponent,
    TableRenderer,
    DomesticClaimComponent,
    ForeignClaimComponent,
    LocalConveyanceClaimComponent,
    ClaimDetailComponent,
    PanelComponent,
    SignUpComponent,
    MultiSelectComponent,
    HighlightDirective,
    CreateClaimComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    StoreModule.forRoot({
      user: UserReducer,
      teams: TeamReducer,
      claims: ClaimReducer
    }),
    NgSelectModule
  ],
  providers: [CookieService],
  bootstrap: [AppComponent]
})
export class AppModule {}
