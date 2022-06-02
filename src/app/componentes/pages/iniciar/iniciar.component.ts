import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MessagesService } from 'src/app/service/message/messages.service';
import { MovieBattleService } from 'src/app/service/movie-battle.service';
import { User } from 'src/app/User';

@Component({
  selector: 'app-iniciar',
  templateUrl: './iniciar.component.html',
  styleUrls: ['./iniciar.component.css']
})
export class IniciarComponent implements OnInit {
  user!: User;
  @Input() userName!: string;
  jogoIniciado: boolean = false;
  @Output() jogoIniciadoEmiter: EventEmitter<boolean> = new EventEmitter;

  constructor(private movieBattleService: MovieBattleService,  private message: MessagesService) { 
  }

  ngOnInit(): void {
  }

  iniciar() {
    this.movieBattleService.iniciarJogo().subscribe(dados => this.user = dados);
    this.jogoIniciado = true;
    this.jogoIniciadoEmiter.emit(this.jogoIniciado);
  }

}
