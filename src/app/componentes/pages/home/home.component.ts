import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { MovieBattleService } from 'src/app/service/movie-battle.service';
import { User } from 'src/app/User';
import { faSearch } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  filter: string = ''
  listusers: User[] = []
  listUsersFilter: User[] = []
  faSearch = faSearch;
  hasMore: boolean = true;
  currentPage: number = 0;
  position: number = 0;
  
  constructor(private movieBattleService: MovieBattleService) { }
  

  ngOnInit(): void {
    this.load();
  }

  load(){
    this.movieBattleService.listAllRankingPaginated(++this.currentPage).subscribe(users => {
      this.limparFilterConsulta();
      users.map((user) => {
        user.position = ++this.position;
      });
      console.log(this.listusers);
      this.listusers.push(...users);
      this.listUsersFilter.push(...users);


      if(!users.length)
        this.hasMore = false;
    });
  }

  search(e: Event): void {
    const target = e.target as HTMLInputElement;
    this.filter = target.value;
    this.atualizarExibicao();   
  }

  atualizarExibicao() {
    this.listusers = this.listUsersFilter.filter(user => 
      user.usuario?.toLowerCase().includes(this.filter.toLowerCase()));
  }
  
  limparFilterConsulta(){
    this.filter = '';
    this.atualizarExibicao();
  }

}
