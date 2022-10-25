import { EventEmitter } from '@angular/core';
import { Recipe } from '../recipe.model';

export class ManageRecipeService {
  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe(
      'A Test recipe',
      'This is the description of the recipe',
      'https://cpb-us-e1.wpmucdn.com/blogs.uoregon.edu/dist/c/829/files/2012/10/PSD_Food_illustrations_3190_pancakes_with_butter-1wi1tz5.jpg'
    ),

    new Recipe(
      'A Test recipe 2',
      'This is the description of the recipe 2',
      'https://post.healthline.com/wp-content/uploads/2020/09/healthy-eating-ingredients-732x549-thumbnail.jpg'
    ),

    new Recipe(
      'A Test recipe 3',
      'This is the description of the recipe 3',
      'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg'
    ),
  ];

  // used to return the recipes which are encapsulated
  public getRecipes() {
    // this returns a new array which is a exact copy
    return this.recipes.slice();
  }
}
