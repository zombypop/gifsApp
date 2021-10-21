import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { GifsService } from '../services/gifs.service';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styles: [
  ]
})
export class BusquedaComponent implements OnInit {

  @ViewChild("txtBuscar") txtBuscar!: ElementRef<HTMLInputElement>;
  constructor(private gifService: GifsService) { }

  ngOnInit(): void {
  }

  buscar() {
    this.gifService.buscarGifs(this.txtBuscar.nativeElement.value);
    this.txtBuscar.nativeElement.value = '';
  }

}
