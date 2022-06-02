import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Jogada } from 'src/app/Jogada';
import { Movie } from 'src/app/Movie';
import { MovieBattleService } from 'src/app/service/movie-battle.service';
import { User } from 'src/app/User';

@Component({
  selector: 'app-sortear',
  templateUrl: './sortear.component.html',
  styleUrls: ['./sortear.component.css']
})
export class SortearComponent implements OnInit {
  movies: Movie[] = [];
  @Input() userName!: string;
  @Output() jogoFinalizadoEmiter = new EventEmitter;
  user: User = {};
  jogada!: Jogada;
  finalizado: boolean = false;

  constructor(private movieService: MovieBattleService) {
    this.jogada = new Jogada;
   }

  ngOnInit(): void {
  }

  sortear() {
    
    this.movieService.sortear().subscribe(movies => {
      var i:number = 1;
      movies.map((movie) => {
        movie.position = i++;
      });
      this.movies = movies;
      this.user = {};
    });
  }

  jogar(movie: Movie) {

    this.jogada.imdbID = movie.imdbID;
    this.jogada.loginUser = this.userName;

    this.movieService.jogar(this.jogada).subscribe(user => {
      this.user = user;
      this.movies = [];
      console.log(this.user);
      if(user.finalizado) {
        this.encerrar(user);
      }        
    });
  }

  finalizar() {
    this.movieService.finalizar().subscribe(user => {
      this.encerrar(user);  
    }, (err: any) => { 
      console.log('raw error =>', err);      
    });
  }

  private encerrar(user: User){
    this.finalizado  = true;
    user.message += '.\n Você será enviado para página de login.'
    this.user = user;
    setTimeout(() => {
      this.jogoFinalizadoEmiter.emit(false);
      this.user = {};
    }, 7000);     
  }

}
