import { Component, OnInit } from '@angular/core';
import { GifsPageComponent } from 'src/app/gifs/gifs-page/gifs-page.component';
import { GifsService } from '../../gifs/services/gifs.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

   get busquedas() {
     return this.gifService.busquedas;
   }

  constructor(private gifService : GifsService) { }

  ngOnInit(): void {
    
  }

  buscar(q : string) {
    this.gifService.buscarGifs(q);
  }

}
