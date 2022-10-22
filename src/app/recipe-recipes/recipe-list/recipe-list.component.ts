import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe(
      'A Test recipe',
      'This is the description of the recipe',
      'https://cpb-us-e1.wpmucdn.com/blogs.uoregon.edu/dist/c/829/files/2012/10/PSD_Food_illustrations_3190_pancakes_with_butter-1wi1tz5.jpg'
    ),

    new Recipe(
      'A Test recipe 2',
      'This is the description of the recipe 2',
      'https://cpb-us-e1.wpmucdn.com/blogs.uoregon.edu/dist/c/829/files/2012/10/PSD_Food_illustrations_3190_pancakes_with_butter-1wi1tz5.jpg'
    ),

    new Recipe(
      'A Test recipe 3',
      'This is the description of the recipe 3',
      'https://cpb-us-e1.wpmucdn.com/blogs.uoregon.edu/dist/c/829/files/2012/10/PSD_Food_illustrations_3190_pancakes_with_butter-1wi1tz5.jpg'
    ),
  ];

  // this is used to emit to the parent component
  @Output()
  recipeSelectedType = new EventEmitter<Recipe>();

  // used to get the recipe type from the child component and then set the emiting value from the current item selected
  onRecipeSelected(recipeItem: Recipe) {
    this.recipeSelectedType.emit(recipeItem);
  }

  constructor() {}

  ngOnInit(): void {}
}
