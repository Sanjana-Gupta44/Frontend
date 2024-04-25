import { Component, OnInit } from '@angular/core';
import { Food } from '../../../shared/models/food';
import { FoodService } from '../../../services/food.service';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { SearchComponent } from '../search/search.component';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule,SearchComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  foods:Food[] = [];

  constructor(private api:FoodService,activateRoute:ActivatedRoute){
    activateRoute.params.subscribe((params)=>{
      if(params.searchTerm)
        this.foods = this.api.getAllFoodBySearchTerm(params.searchTerm)
      else
      this.foods = api.getAll()

    })
    
  }

  ngOnInit(): void {
    
  }

}
