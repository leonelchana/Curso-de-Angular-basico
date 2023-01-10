import { Component ,Input} from '@angular/core';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-pesonajes',
  templateUrl: './pesonajes.component.html',
  styles: [
  ]
})
export class PesonajesComponent {
/*   @Input() personajes :any[]=[];
 */
get personajes(){
  return this.dbzService.personajes
}
constructor (private dbzService: DbzService){
  
}
}
