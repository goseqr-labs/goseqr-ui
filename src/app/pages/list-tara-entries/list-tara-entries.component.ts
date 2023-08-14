import {Component, OnInit} from '@angular/core';

import {TaraStruct} from '../../structs/tara-struct';
import {TaraDataService} from "../../services/tara-data.service";

@Component({
  selector: 'app-list-tara-entries',
  templateUrl: './list-tara-entries.component.html',
  styleUrls: ['./list-tara-entries.component.scss']
})
export class ListTaraEntriesComponent implements OnInit {

  taraDataList: TaraStruct[]

  constructor(private taraDataService: TaraDataService) {
  }

  ngOnInit(): void {
    this.taraDataService.getTaraData().subscribe(
      (taraDataList) => {
        this.taraDataList = taraDataList;
        console.log(taraDataList)
      },
      (error) => {
        console.error('Error fetching data:', error);
      }
    );
  }
}
