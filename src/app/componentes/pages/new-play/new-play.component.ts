import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-new-play',
  templateUrl: './new-play.component.html',
  styleUrls: ['./new-play.component.css']
})
export class NewPlayComponent implements OnInit {
  logado: boolean = false;
  iniciado: boolean = false;
  user!: string;
  
  constructor(){

  }

  ngOnInit(): void {
    
  }

  receberValorLogado(dados: any){
    console.log(dados);
    this.user = dados['user'];
    this.logado = dados['logado'];
  }

  jogoIniciado(jogoIniciado: boolean){
    this.iniciado = jogoIniciado;
  }

  jogoFinalizado(jogoFinalizado: boolean){
    this.iniciado = jogoFinalizado;
    this.logado = false;
    this.user = ''; 
  }
}
