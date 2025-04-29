import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TodosComponent } from './todos/todos.component';
import { Amplify } from 'aws-amplify';
import outputs from '../../amplify_outputs.json';

//Importación autenticación mediante AWS - INICIO
import { AmplifyAuthenticatorModule, AuthenticatorService } from '@aws-amplify/ui-angular';
//Importación autenticación mediante AWS - FIN

Amplify.configure(outputs);

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports: [RouterOutlet, TodosComponent, 

  //Importación autenticación mediante AWS - INICIO
    AmplifyAuthenticatorModule
  //Importación autenticación mediante AWS - FIN
  
],
})
export class AppComponent {
  title = 'amplify-angular-template';
    
  //Importación autenticación mediante AWS - INICIO
  constructor(public authenticator: AuthenticatorService) {
    Amplify.configure(outputs);
  }
  //Importación autenticación mediante AWS - FIN
  
}
