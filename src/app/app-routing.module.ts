import { NgModule } from "@angular/core";
import { Routes, RouterModule, CanActivate } from "@angular/router";
import { LoginComponent } from "./page/login/login.component";
import { ClaimPageComponent } from "./page/claim-page/claim-page.component";
import { AuthGuardService } from "./guards/auth-guard.service";
import { SectionComponent } from "./components/section/section.component";
import { ExpenceClaimComponent } from "src/app/components/form-templates/expense-claim/expense-claim.component";
import { DomesticClaimComponent } from "src/app/components/form-templates/domestic-claim/domestic-claim.component";
import { ForeignClaimComponent } from "src/app/components/form-templates/foreign-claim/foreign-claim.component";
import { LocalConveyanceClaimComponent } from "src/app/components/form-templates/local-conveyance-claim/local-conveyance-claim.component";

const routes: Routes = [
  { path: "login", component: LoginComponent },
  { path: "", component: ClaimPageComponent, canActivate: [AuthGuardService] },
  { path: "claim", component: SectionComponent },
  { path: "expenceClaim", component: ExpenceClaimComponent },
  { path: "domesticClaim", component: DomesticClaimComponent },
  { path: "foreignClaim", component: ForeignClaimComponent },
  { path: "localConveyanceClaim", component: LocalConveyanceClaimComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
