import { EventEmitter } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';


export class ShoppingListService {
    ingredientChanged = new EventEmitter<Ingredient[]>();
    private ingredients: Ingredient[] = [
        new Ingredient('Apple', 5),
        new Ingredient('Banana', 10),
    ];

    getIngredient() {
        return this.ingredients.slice();
    }
    addIngredient(newIngredient: Ingredient) {
        this.ingredients.push(newIngredient);
        this.ingredientChanged.emit(this.ingredients.slice());
    }

    addIngredients(ingredient: Ingredient[]) {
        this.ingredients.forEach((entry) => {
            for (let i = 0; i < ingredient.length; i++) {
                if (entry.name === ingredient[i].name) {
                    entry.amount += ingredient[i].amount;
                    ingredient.splice(i, 1);
                    return;
                }
            }
        });
        this.ingredients.push(...ingredient);
        this.ingredientChanged.emit(this.ingredients.slice());
    }
}
