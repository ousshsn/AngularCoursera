import {Component, Input, OnInit} from '@angular/core';
import {Dish} from '../shared/dish';
@Component({
  selector: 'app-dishdetails',
  templateUrl: './dishdetails.component.html',
  styleUrls: ['./dishdetails.component.css']
})
export class DishdetailsComponent implements OnInit {

  constructor() { }
  @Input()
  dish: Dish;
  ngOnInit() {
  }


}
