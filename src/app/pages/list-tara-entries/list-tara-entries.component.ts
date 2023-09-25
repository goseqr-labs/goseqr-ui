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
  impactLevelText = ["Negligible", "Moderate", "Major", "Severe"]
  riskLevelText = ["Very Low", "Low", "Moderate", "High"]
  errorMessage: string

  constructor(private taraDataService: TaraDataService) {
  }

  ngOnInit(): void {
    this.fetchFormData()
  }

  fetchFormData () {
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

  // Delete endpoint is invoked on clicking trash icon
  onClickingTrash(id: string) {
    // Your logic here
    console.log(`Tara item to delete with ID: ${id}`);
    this.taraDataService.deleteData(id).subscribe({
      next: response => {
        console.log('Delete successful', response);
        // Perform any additional actions after successful delete
        this.fetchFormData()
      },
      error: error => {
        console.error('Delete failed', error);
        this.errorMessage = `An error occurred while deleting item with id: ${id}.`;
        console.error('Delete failed', error);
      }
    });
  }
}
