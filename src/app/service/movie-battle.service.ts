import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../User';
import { environment } from 'src/environments/environment';
import { Movie } from '../Movie';
import { Jogada } from '../Jogada';
import { Jogador } from '../Jogador';
import { Auth } from '../Auth';
import { LocalStorageService } from '../local-storage.service';

@Injectable({
  providedIn: 'root'
})
export class MovieBattleService {
  baseApiUrl = environment.baseApi
  baseSite = environment.baseSite
  urlRanking = `${this.baseApiUrl}ranking`
  urlIniciar = `${this.baseApiUrl}iniciar`
  urlSortear = `${this.baseApiUrl}sortear`
  urlJogar = `${this.baseApiUrl}jogar`
  urlFinalizar = `${this.baseApiUrl}finalizar`
  urlNewUser = `${this.baseSite}create/new-user`
  token: string = ''
  

  constructor(private http: HttpClient,  private localStorage: LocalStorageService) {
     
  }

  protected securityHeaders(): HttpHeaders {
    return new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${this.token}`
    });
  }

  protected deductHeader() {
    return {headers: this.hasToken() ? this.securityHeaders() : this.headers()};
  }

  protected headers(): HttpHeaders {
    return new HttpHeaders({
      'Content-Type': 'application/json'
    });
  }

  hasToken(): boolean {
    const jwt = this.token;
    return jwt != null && jwt !== '';
  }

  listAllRanking():Observable<User[]> {
    return this.http.get<User[]>(this.urlRanking, this.deductHeader())
  }

  listAllRankingPaginated(page: number):Observable<User[]> {
    const params = new HttpParams()
                        .append('page' , page.toString());

    return this.http.get<User[]>(this.urlRanking, {params: params})
  }

  logar(dadosLogin: FormData): Observable<Auth>{
    return this.http.post<Auth>('http://localhost:8080/auth', dadosLogin, this.deductHeader());
  }

  recuperarTokenSessao() {
    this.token = this.localStorage.get('token');
  }

  iniciarJogo():Observable<User>{
    this.recuperarTokenSessao();
    return this.http.get<User>(this.urlIniciar,  this.deductHeader());
  } 

  sortear():Observable<Movie[]>{
    return this.http.get<Movie[]>(this.urlSortear,  this.deductHeader());
  }

  jogar(jogada: Jogada):Observable<User>{
   
    return this.http.post<User>(this.urlJogar, jogada, this.deductHeader());
  }

  finalizar(): Observable<User>{
    return this.http.get<User>(this.urlFinalizar,  this.deductHeader());
  }

  cadastrar(newJogador: Jogador):Observable<Jogador>{
    return this.http.post<Jogador>(this.urlNewUser, newJogador);
  }

}
