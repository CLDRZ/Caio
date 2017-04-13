import { Component } from '@angular/core';
import { Cliente } from './cliente';

@Component({
  selector: 'my-app',
  template: `
            <h1>{{titulo}}</h1>
            <h2>Cliente selecionado: {{cliente}}</h2>
            <hr>
            <div style="text-align: left">
            <ul>
                <li *ngFor="let cli of clientes">
                  <strong>Cliente Nº {{cli.id}}</strong> - {{cli.nome}}: <em>{{cli.saldo | currency:'BRL':true:'4.2-2'}}</em>.
                  <strong>CEP: {{cli.cep | cep}}</strong>
                  <br><br>
                </li>
            </ul>
            </div>

            <p *ngIf="clientes.length<1">Não há nenhum cliente registrado</p>
            `
})

export class AppComponent {
  titulo:string = 'Listagem de Clientes';
  clientes = [
    new Cliente(1, 'Fulano de Tal', 1500, '048490172'),
    new Cliente(2, 'Sir Deutrano', 800, '012345678'),
    new Cliente(3, 'I`m error', 5300, '048490172')
  ];
  cliente:string = this.clientes[0].nome;
}
