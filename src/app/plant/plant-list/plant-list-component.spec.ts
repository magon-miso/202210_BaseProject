/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { faker } from '@faker-js/faker';

import { HttpClientModule } from '@angular/common/http';
import { PlantListComponent } from './plant-list.component';
import { PlantService } from '../plant.service';
import { Plant } from '../plant';


describe('PlantListComponent', () => {
 let component: PlantListComponent;
 let fixture: ComponentFixture<PlantListComponent>;
 let debug: DebugElement;

 beforeEach(async(() => {
   TestBed.configureTestingModule({
     imports: [HttpClientModule],
     declarations: [ PlantListComponent ],
     providers: [ PlantService ]
   })
   .compileComponents();
 }));

 beforeEach(() => {
   fixture = TestBed.createComponent(PlantListComponent);
   component = fixture.componentInstance;

   component.plants = [
     new Plant(faker.datatype.number(), faker.datatype.string(), faker.datatype.string(), faker.datatype.string(), faker.datatype.number(), faker.datatype.string(), faker.datatype.string()),
     new Plant(faker.datatype.number(), faker.datatype.string(), faker.datatype.string(), faker.datatype.string(), faker.datatype.number(), faker.datatype.string(), faker.datatype.string()),
     new Plant(faker.datatype.number(), faker.datatype.string(), faker.datatype.string(), faker.datatype.string(), faker.datatype.number(), faker.datatype.string(), faker.datatype.string())
   ]

   fixture.detectChanges();
   debug = fixture.debugElement;
 });

 it('should create', () => {
   expect(component).toBeTruthy();
 });

 it("Component has a table", () => {
   expect(debug.query(By.css("tbody")).childNodes.length).toBeGreaterThan(0);
 });

 it("Component has 3 plants", () => {
  expect(debug.query(By.css("tbody")).childNodes.length).toEqual(4);
  });

});
