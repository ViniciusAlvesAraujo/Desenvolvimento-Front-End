import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  public email!: string;

  public limparCampo() {
    this.email = ''
  }

  public senha!: any ;
  public limparCampoSenha() {
    this.senha = ''
  }
}
