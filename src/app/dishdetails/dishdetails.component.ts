import {Component, Input, OnInit} from '@angular/core';
import {Dish} from '../shared/dish';
import { DishService } from '../services/dish.service';
import { Params, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
@Component({
  selector: 'app-dishdetails',
  templateUrl: './dishdetails.component.html',
  styleUrls: ['./dishdetails.component.css']
})
export class DishdetailsComponent implements OnInit {
  dish: Dish;
  constructor(private dishervice: DishService,
              private route: ActivatedRoute,
              private location: Location) { }

  ngOnInit() {
    const id = this.route.snapshot.params['id'];
    this.dishervice.getDish(id)
      .subscribe(dish => this.dish = dish);
  }
  goBack(): void {
    this.location.back();
  }


}
