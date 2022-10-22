import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-recipe-header',
  templateUrl: './recipe-header.component.html',
  styleUrls: ['./recipe-header.component.css'],
})
export class RecipeHeaderComponent {
  // this is used to send the type selected to the outside
  @Output()
  typeSelected = new EventEmitter<string>();

  // this function is used to send the type outside of the component and to be used by the other components after that
  onSelect(type: string) {
    this.typeSelected.emit(type);
  }
}
