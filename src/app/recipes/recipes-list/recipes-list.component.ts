import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css']
})
export class RecipesListComponent implements OnInit {

recipes : Recipe[] = [

	new Recipe('this is the name', 'this is the description', 'https:/\/cdn.pixabay.com/photo/2016/06/15/19/09/food-1459693_1280.jpg'),
	new Recipe('this is the name', 'this is the description', 'https:/\/cdn.pixabay.com/photo/2016/06/15/19/09/food-1459693_1280.jpg')
	
 ];

  constructor() { }

  ngOnInit() {
  }

}
