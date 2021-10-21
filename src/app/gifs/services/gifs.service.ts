import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable, IterableDiffers } from '@angular/core';
import { ResupuestaGifsServicio, Gif } from '../interfaces/gifs.interface';

@Injectable({
  providedIn: 'root'
})
export class GifsService {

  private urlServicio = "https://api.giphy.com/v1/gifs";
  private apiKey = "vHAUFNx6NGvQh5Ut8onz2sCcvmstY71D";
  private _busquedas: string[] = [];
  public resultados: Gif[] = [];

  constructor(private http: HttpClient) {

    //this._busquedas =  JSON.parse( localStorage.getItem('busquedas')!)|| [];
    if (localStorage.getItem('busquedas')) {
      this._busquedas = JSON.parse(localStorage.getItem('busquedas')!);
    }

    if (localStorage.getItem('resultados')) {
      this.resultados = JSON.parse(localStorage.getItem('resultados')!);
    }

  }

  get busquedas() {
    return [...this._busquedas];
  }


  buscarGifs(query: string) {
    if (query.trim().length == 0) return;
    const params = new HttpParams()
      .set('api_key', this.apiKey)
      .set('q', query)
      .set('limit', "10");

    this.http.get<ResupuestaGifsServicio>(`${this.urlServicio}/search`, { params: params }).subscribe(
      (resp) => {
        this.resultados = resp.data;
        localStorage.setItem('resultados', JSON.stringify(resp.data));
      }
    )

    if (!this._busquedas.includes(query.trim())) {
      this._busquedas.unshift(query);
      localStorage.setItem('busquedas', JSON.stringify(this._busquedas));
      this._busquedas = this._busquedas.splice(0, 10);
    }
  }





}
