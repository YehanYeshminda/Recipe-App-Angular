import { Component, Input, OnInit, EventEmitter, Output } from '@angular/core';
import { Recipe } from '../../recipe.model';
import { ManageRecipeService } from '../../services/manage-recipe.service';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css'],
})
export class RecipeItemComponent implements OnInit {
  constructor(private manageRecipeService: ManageRecipeService) {}
  ngOnInit(): void {}

  @Input()
  recipeEl?: Recipe;

  // then on selected we then also emit a selected value as  a void
  onSelect() {
    this.manageRecipeService.recipeSelected.emit(this.recipeEl);
  }
}
