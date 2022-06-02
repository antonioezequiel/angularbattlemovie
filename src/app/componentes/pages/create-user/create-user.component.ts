import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ValidatorFn, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Jogador } from 'src/app/Jogador';
import { MessagesService } from 'src/app/service/message/messages.service';
import { MovieBattleService } from 'src/app/service/movie-battle.service';
import { validarSenhasIguais } from './validator-senhas-iguais';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent implements OnInit {
  cadastroForm!: FormGroup

  constructor(private movieBattleService: MovieBattleService,
     private message: MessagesService,
     private router: Router) { }

  ngOnInit(): void {
    this.cadastroForm = new FormGroup({
      login: new FormControl('', [Validators.required]),
      senha: new FormControl('', [Validators.required]),
      confirmSenha: new FormControl('', [Validators.required, ])
    }, {
      // *******************************
      // Registrando o custom validator:
      // *******************************
      validators: [validarSenhasIguais('senha', 'confirmSenha')]
    });
  }

  get login () {
    return this.cadastroForm.get('login');
  }

  get senha() {
    return this.cadastroForm.get('senha');
  }

  get confirmSenha() {
    return this.cadastroForm.get('confirmSenha');
  }

  async cadastrar() {
    
    if (this.cadastroForm.invalid) {
      return;
    }

    var newJogador = new Jogador;
    newJogador.nome = this.cadastroForm.get('login')?.value;
    newJogador.senha = this.cadastroForm.get('senha')?.value;

    await this.movieBattleService.cadastrar(newJogador).subscribe(jogador => {
     this.message.add("Jogador cadastrado com sucesso");
     this.router.navigate(['/batalha/new']);
    }, (err: any) => { 
      console.log('raw error =>', err);
      this.message.add('Erro ao cadastrar o jogador');
    }); 

  }

}
