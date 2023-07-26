import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FICCION_STOCK } from '../../models/ficcion'

@Component({
  selector: 'app-fdetalles',
  templateUrl: './fdetalles.component.html',
  styleUrls: ['./fdetalles.component.css']
})
export class FdetallesComponent implements OnInit {
  idProducto: number = 0;
  ficcion = FICCION_STOCK;
  detalleF: any;
  constructor(private routeActivate: ActivatedRoute){
  }

  ngOnInit(): void {
    this.idProducto = this.routeActivate.snapshot.params["id"];
    this.ficcion.forEach((producto) => {
      if (producto.id == this.idProducto){
        this.detalleF = producto;        
      }
    })
  }
}


