import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListadoActorPeliculaComponent } from './listado-actor-pelicula.component';

describe('ListadoActorPeliculaComponent', () => {
  let component: ListadoActorPeliculaComponent;
  let fixture: ComponentFixture<ListadoActorPeliculaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListadoActorPeliculaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListadoActorPeliculaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
