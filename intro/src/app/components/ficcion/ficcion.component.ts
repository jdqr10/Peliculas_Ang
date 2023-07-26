import { Component, OnInit } from '@angular/core';
import { FICCION_STOCK } from '../../models/ficcion';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ficcion',
  templateUrl: './ficcion.component.html',
  styleUrls: ['./ficcion.component.css']
})
export class FiccionComponent implements OnInit {
  ficcion = FICCION_STOCK;
  constructor(private router: Router) { }
  
  ngOnInit(): void {
  }
  
  verMas(id: number){
    console.log(id);
    this.router.navigate(['../tdetalles', id]);
  }
}
