import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { LocalStorageService } from 'src/app/local-storage.service';
import { MessagesService } from 'src/app/service/message/messages.service';
import { MovieBattleService } from 'src/app/service/movie-battle.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm!: FormGroup;
  @Output() usuarioLogadoEmiter = new EventEmitter;
  usuarioLogado: boolean = false;
  


  constructor(private movieBattleService: MovieBattleService, 
    private messageService: MessagesService, 
    private localStorage: LocalStorageService) { }

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      login: new FormControl('', [Validators.required]),
      senha: new FormControl('', [Validators.required])
    });
  }

  get login(){
    return this.loginForm.get('login');
  }

  get senha() {
    return this.loginForm.get('senha');
  }

  async logar(){
    if (this.loginForm.invalid) {
      return;
    }

    console.log(this.loginForm.value);

   await this.movieBattleService.logar(this.loginForm.value).subscribe(auth => {
      this.messageService.add('Login realizado com Sucesso');
      this.usuarioLogado = true;

      var dadosLogin = {'logado': this.usuarioLogado, 'user': this.loginForm.get('login')?.value}


      this.usuarioLogadoEmiter.emit(dadosLogin);
      this.localStorage.set('token', auth.token);     

   }, (err: any) => { 
     console.log('raw error =>', err);
     this.messageService.add('Dados de login incorretos');
   });
  }

}
