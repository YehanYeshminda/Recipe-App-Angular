import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Recipe } from '../recipe.model';
import { ManageRecipeService } from '../services/manage-recipe.service';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
})
export class RecipeListComponent implements OnInit {
  constructor(private managerRecipeService: ManageRecipeService) {}

  recipes!: Recipe[];

  ngOnInit(): void {
    this.recipes = this.managerRecipeService.getRecipes();
  }
}
