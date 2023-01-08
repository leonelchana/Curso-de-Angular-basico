import { Component } from '@angular/core';
@Component({
    selector: 'app-contador',

    templateUrl:'contador.component.html',
/*     template: `    <h1>{{title}}</h1>
    <button (click)="numero =numero+1">+1</button>
    <button (click)="sumar()">+1</button>
    <button (click)="acumular(+5)">+1</button>
    <button (click)="acumular(base)">+{{base}}</button>
    
    <span>{{numero}}</span>
    <button (click)="numero =numero-1">-1</button>`, */
   
  })
export class ContadorComponent{
    title:string = 'Contador APP';
    numero:number=10;
    base:number=5;
  sumar(){
    this.numero+=1;
  }
  restar(){
    this.numero-=1;
  }
  acumular( valor:number){
  this.numero+=valor;
  }
}
