import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ApiCountriesService } from 'src/app/services/api-countries.service';

@Component({
  selector: 'app-tabla-paises',
  templateUrl: './tabla-paises.component.html',
  styleUrls: ['./tabla-paises.component.scss'],
})
export class TablaPaisesComponent implements OnInit {

  @Output() PasamosUnPais: EventEmitter<any> = new EventEmitter<any>();

  listadoPaises: any;

  constructor(private apiCountries: ApiCountriesService) {}

  ngOnInit(): void {
    this.traerPaises();
  }

  async traerPaises() {
    this.listadoPaises = await this.apiCountries.getCountries();
    this.listadoPaises.sort((a: any, b: any) => {
      return a.name.common.localeCompare(b.name.common);
    });
    // console.log(this.listadoPaises);
  }

  pasarPais(pais: any) {
    this.PasamosUnPais.emit(pais);
  }
  
}
