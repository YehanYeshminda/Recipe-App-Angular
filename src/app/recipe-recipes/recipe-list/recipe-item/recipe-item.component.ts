import { Component, Input, OnInit, EventEmitter, Output } from '@angular/core';
import { Recipe } from '../../recipe.model';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css'],
})
export class RecipeItemComponent implements OnInit {
  constructor() {}
  ngOnInit(): void {}

  @Input()
  recipeEl?: Recipe;

  // we emit a void for the selected value
  @Output()
  selectedValue = new EventEmitter<void>(); // void is passed when we are passing no information

  // then on selected we then also emit a selected value as  a void
  onSelect() {
    this.selectedValue.emit();
  }
}
