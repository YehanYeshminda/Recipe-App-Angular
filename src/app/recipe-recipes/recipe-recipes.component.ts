import { Recipe } from './recipe.model';
import { Component, OnInit } from '@angular/core';
import { ManageRecipeService } from './services/manage-recipe.service';

@Component({
  selector: 'app-recipe-recipes',
  templateUrl: './recipe-recipes.component.html',
  styleUrls: ['./recipe-recipes.component.css'],
  providers: [ManageRecipeService],
})
export class RecipeRecipesComponent implements OnInit {
  constructor(private manageRecipeService: ManageRecipeService) {}

  // we create a variable to store the selected recipe
  selectedRecipeStored?: Recipe;

  // using this we are able to get the value which is emmited from the recipe selected
  ngOnInit(): void {
    this.manageRecipeService.recipeSelected.subscribe((recipe: Recipe) => {
      this.selectedRecipeStored = recipe;
    });
  }
}
