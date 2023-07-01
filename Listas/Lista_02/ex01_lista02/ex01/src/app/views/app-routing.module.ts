import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { FuncionariosComponent } from "../funcionarios.component";
import { LoginComponent } from "./login/login.component";
import { CadastroComponent } from "../cadastro/cadastro.component";

const routes: Routes = [
  { path: "", component: FuncionariosComponent},
  { path: "login", component: LoginComponent},
  { path: "cadastro", component: CadastroComponent}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule{

}
