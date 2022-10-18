import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shopping-list-edit',
  templateUrl: './shopping-list-edit.component.html',
  styleUrls: ['./shopping-list-edit.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ShoppingListEditComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
