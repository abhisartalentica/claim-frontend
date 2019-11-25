import { NgModule } from "@angular/core";
import { Routes, RouterModule, CanActivate } from "@angular/router";
import { LoginComponent } from "./page/login/login.component";
import { ClaimPageComponent } from "./page/claim-page/claim-page.component";
import { AuthGuardService } from "./guards/auth-guard.service";
import { SectionComponent } from "./components/section/section.component";
import { ExpenceClaimComponent } from "src/app/components/form-templates/expense-claim";

const routes: Routes = [
  { path: "login", component: LoginComponent },
  { path: "", component: ClaimPageComponent, canActivate: [AuthGuardService] },
  { path: "claim", component: SectionComponent },
  { path: "expenceClaim", component: ExpenceClaimComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
