import { Ingredient } from './../Ingredient.model';
import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  EventEmitter,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import { ManageShoppingListService } from '../services/manage-shoppinglist.service';

@Component({
  selector: 'app-shopping-list-edit',
  templateUrl: './shopping-list-edit.component.html',
  styleUrls: ['./shopping-list-edit.component.css'],
})
export class ShoppingListEditComponent implements OnInit {
  constructor(private manageShoppingList: ManageShoppingListService) {}

  // used to select the local reference in order to get the value
  @ViewChild('productName') newShoppingListItemName!: ElementRef;
  @ViewChild('productPrice') newShoppingListItemPrice!: ElementRef;

  // used to send the new recipe information to the outside
  onAddRecipe() {
    const ingName = this.newShoppingListItemName.nativeElement.value;
    const ingPrice = this.newShoppingListItemPrice.nativeElement.value;

    // this is used for better practice
    const fullRecipe = new Ingredient(ingName, ingPrice);
    this.manageShoppingList.addIngredients(fullRecipe);
  }

  ngOnInit(): void {}
}
