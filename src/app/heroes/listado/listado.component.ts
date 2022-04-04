import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent {
  heroes: string[] = ['Spiderman', 'Deadpool', 'Thor', 'Antman'];  
  heroeBorrado: string = '';
  mostarBorrado: boolean = false;

  borrarHeroe() {
    if (this.heroes.length > 2) {
      this.heroeBorrado = this.heroes.splice(2, 1).toString();
      console.log(this.heroeBorrado);
    }
    
    if (this.heroeBorrado != '') {
      this.mostarBorrado = true;
    }
  
  }

}
