import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TERROR_STOCK } from '../../models/terror'

@Component({
  selector: 'app-tdetalles',
  templateUrl: './tdetalles.component.html',
  styleUrls: ['./tdetalles.component.css']
})
export class TdetallesComponent implements OnInit {
  idProducto: number = 0;
  terror = TERROR_STOCK;
  detalle: any;
  constructor(private routeActivate: ActivatedRoute){
  }

  //este metodo es el primero que se ejecuta
  ngOnInit(): void {
    this.idProducto = this.routeActivate.snapshot.params["id"];
    this.terror.forEach((producto) => {
      if (producto.id == this.idProducto){
        this.detalle = producto;        
      }
    })
  }
}
