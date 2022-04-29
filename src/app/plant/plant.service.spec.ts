import { HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { PlantService } from './plant.service';


describe('Service: Plant', () => {
  let service: PlantService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule]
    });
    service = TestBed.inject(PlantService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('get plants', () => {
    (done: DoneFn) => {
      service.getPlants().subscribe(value => {
        expect(value.length).toBeGreaterThan(0);
        done();
      });
    }
  });

});
