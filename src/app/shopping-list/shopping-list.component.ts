import { Component, OnInit } from '@angular/core';
import { Ingredient } from './Ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css'],
})
export class ShoppingListComponent implements OnInit {
  ingredients: Ingredient[] = [
    new Ingredient('Orange', 2),
    new Ingredient('Apples', 5),
  ];

  newRecipeAdd(event: Ingredient) {
    this.ingredients.push(event);
  }

  constructor() {}

  ngOnInit(): void {}
}
