import { Component, OnInit } from '@angular/core';
import { TERROR_STOCK } from '../../models/terror';
import { Router } from '@angular/router';

@Component({
  selector: 'app-terror',
  templateUrl: './terror.component.html',
  styleUrls: ['./terror.component.css']
})
export class TerrorComponent implements OnInit {
  terror = TERROR_STOCK;
  constructor(private router: Router) { }
  
  ngOnInit(): void {
  }
  
  verMas(id: number){
    console.log(id);
    this.router.navigate(['../tdetalles', id]);
  }
}



