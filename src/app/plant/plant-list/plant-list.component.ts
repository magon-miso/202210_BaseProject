import { Component, OnInit } from '@angular/core';
import { Plant } from '../plant';
import { PlantService } from '../plant.service';

@Component({
  selector: 'app-plant-list',
  templateUrl: './plant-list.component.html',
  styleUrls: ['./plant-list.component.css']
})
export class PlantListComponent implements OnInit {

  interior: number = 0;
  exterior: number = 0;
  plants: Array<Plant> = [];

  constructor(private plantService: PlantService) { }

  getPlants(): void {
    this.plantService.getPlants().subscribe((plants) => {
      this.plants = plants;
      this.plants.forEach(plant =>
        (plant.tipo.match("Interior") ? this.interior++ : this.exterior++))
    });
  }

  ngOnInit() {
    this.getPlants();
  }

}
