import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export class Acervo{
  id!: number;
  titulo!: string;
  autor!: string;
  generoDocumental!: string;
  tipoDocumental!: string;
  apresentacaoGrafica!: string;
  area!: string;
  assunto!: string;
  dataProducao!: string;
  instituicao!: string;
  ambito!: string;
  orientador!: string;
  recorteTemporal!: string;
  recorteEspacial!: string;
  local!: string;
  link!: string;
}


@Injectable({
  providedIn: 'root'
})
export class AcervoService {
	host: string = '/api';
	//host: string = 'https://observatorio.ufsj.edu.br/api';

  constructor(private http: HttpClient) {}

	getJsonBD(): Observable<Acervo[]> {
		return this.http.get<Acervo[]>('/assets/bd/bd.json');
	}
	
	getTrabalhos(): Observable<Acervo[]> {
		return this.http.get<Acervo[]>(this.host + '/acervo');
	}

	getTrabalho(id: number): Observable<Acervo> {
		return this.http.get<Acervo>(this.host + '/acervo/' + id);
	}
}
