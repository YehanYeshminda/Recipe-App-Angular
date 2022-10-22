import { Recipe } from './recipe.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recipe-recipes',
  templateUrl: './recipe-recipes.component.html',
  styleUrls: ['./recipe-recipes.component.css'],
})
export class RecipeRecipesComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  // we create a variable to store the selected recipe
  selectedRecipeStored?: Recipe;

  // we then use a function in order to fetch the recipe which is given from the child which is
  // list and we take that item as a event and we then store it inside of the variable defined

  selectedRecipe(recipe: Recipe) {
    this.selectedRecipeStored = recipe;
  }
}
