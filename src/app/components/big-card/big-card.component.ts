import { Component , Input } from '@angular/core';
import { StringifyOptions } from 'querystring';

@Component({
  selector: 'app-big-card',
  standalone: true,
  imports: [],
  templateUrl: './big-card.component.html',
  styleUrl: './big-card.component.css'
})
export class BigCardComponent {
  @Input()
  photoCover:string="";
  @Input()
  cardTtle:string="";
  @Input()
  cardDescription:String="";

}
