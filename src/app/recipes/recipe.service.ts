import { EventEmitter, Injectable } from '@angular/core';
import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService {
    recipeSelected = new EventEmitter<Recipe>();
    private recipes: Recipe[] = [

    new Recipe(
            'Italian Salad',
            'bring all the vegies on the garden, we will make a masterpiece',
            // tslint:disable-next-line:max-line-length
            'https://images.unsplash.com/photo-1505253716362-afaea1d3d1af?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9&s=bdc9a3b36bf4095dbcb732b9fab087a3',
        [
            new Ingredient('cheese', 5),
            new Ingredient('tomatoes', 4),
            new Ingredient('lettuce', 2),
            new Ingredient('potatoes', 2)
        ]),
     new Recipe(
        'Da Bologna Pizzeria',
        'the delicious pizza de bologna',
        'https://static-news.moneycontrol.com/static-mcnews/2017/07/Pizza_food_FMCG_price_hotel_piece1-770x433.jpg',
    [
        new Ingredient('tomatoes', 10),
        new Ingredient('cheese', 5),
        new Ingredient('Mushrooms', 2)
    ])
     ];

     constructor(private slService: ShoppingListService) {}
    getRecipe() {
        return this.recipes.slice();
    }

    addIngredientToShoppingList(ingredients: Ingredient[]) {
        this.slService.addIngredients(ingredients);
    }
}
