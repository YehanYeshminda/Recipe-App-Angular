import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RecipeHeaderComponent } from './recipe-header/recipe-header.component';
import { RecipeRecipesComponent } from './recipe-recipes/recipe-recipes.component';
import { RecipeListComponent } from './recipe-recipes/recipe-list/recipe-list.component';
import { RecipeDetailComponent } from './recipe-recipes/recipe-detail/recipe-detail.component';
import { RecipeItemComponent } from './recipe-recipes/recipe-list/recipe-item/recipe-item.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { ShoppingListEditComponent } from './shopping-list/shopping-list-edit/shopping-list-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    RecipeHeaderComponent,
    RecipeRecipesComponent,
    RecipeListComponent,
    RecipeDetailComponent,
    RecipeItemComponent,
    ShoppingListComponent,
    ShoppingListEditComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
