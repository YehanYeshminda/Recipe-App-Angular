import { EventEmitter, Injectable, Output } from '@angular/core';
import { Ingredient } from '../Ingredient.model';

@Injectable()
export class ManageShoppingListService {
  @Output()
  ingredientsChanged = new EventEmitter<Ingredient[]>();

  private ingredients: Ingredient[] = [
    new Ingredient('Orange', 2),
    new Ingredient('Apples', 5),
  ];

  getIngredients() {
    return this.ingredients.slice();
  }

  addIngredients(ingredient: Ingredient) {
    this.ingredients.push(ingredient);

    // we call this because we want a new object always want to returned everytime we create a new object
    this.ingredientsChanged.emit(this.ingredients);
  }
}
