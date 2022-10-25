import { Component, OnInit } from '@angular/core';
import { Ingredient } from './Ingredient.model';
import { ManageShoppingListService } from './services/manage-shoppinglist.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css'],
})
export class ShoppingListComponent implements OnInit {
  constructor(private ManageShoppingList: ManageShoppingListService) {}
  ingredients!: Ingredient[];

  ngOnInit(): void {
    // getting the list from the service
    this.ingredients = this.ManageShoppingList.getIngredients();

    this.ManageShoppingList.ingredientsChanged.subscribe(
      (newIngredients: Ingredient[]) => {
        this.ingredients = newIngredients;
      }
    );
  }
}
