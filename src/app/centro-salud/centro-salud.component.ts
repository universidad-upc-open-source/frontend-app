import { Component, OnInit } from '@angular/core';
import { CentroSalud } from '../../model/centro-salud';
import { CentroSaludService } from '../service/centro-salud.service';

@Component({
  selector: 'app-centro-salud',
  templateUrl: './centro-salud.component.html',
  styleUrls: ['./centro-salud.component.scss'],
})
export class CentroSaludComponent implements OnInit {
  centroSaludList: CentroSalud[] = [];

  constructor(private centroSaludService: CentroSaludService) {}

  // cuando se carga el componente por primera vez
  ngOnInit(): void {
    this.getAll();
  }

  getAll(): void {
    this.centroSaludService.getAll().subscribe(
      (result: any) => {
        for (let index = 0; index < result.length; index++) {
          // Casteamos al modelo CentroSalud
          let centroSalud = result[index] as CentroSalud;
          this.centroSaludList.push(centroSalud);
        }
        console.log(result);
      },
      (error) => {
        console.log('error', error);
      }
    );
  }
}
