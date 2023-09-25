import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable, Observer} from "rxjs";
import { map } from 'rxjs/operators';

import {TaraStruct} from "../structs/tara-struct";

@Injectable({
  providedIn: 'root'
})
export class TaraDataService {

  constructor(private http: HttpClient) { }

  getTaraData(): Observable<TaraStruct[]> {
    const url = 'http://localhost:8081/list'; // Replace with your API endpoint

    return new Observable((observer) => {
      this.http.get(url).pipe(
        map(response => this.processResponse(response))
      ).subscribe({
        next: (data: TaraStruct[]) => {
          observer.next(data);
          observer.complete();
        },
        error: (error) => {
          observer.error(error);
        }
      });
    });
  }

  private processResponse(response: any): TaraStruct[] {
    if (response && response.documents && Array.isArray(response.documents)) {
      return response.documents.map((item: any) => new TaraStruct(
        item._id,
        item.organization_id,
        item.organization_name,
        item.userid,
        item.username,
        item.assetname,
        item.attackvector,
        item.confidentiality,
        item.safety,
        item.privacy,
        item.financial,
        item.integrity,
        item.availability,
        item.threatscenario,
        item.damagescenario,
        item.attackroute,
        item.impactlevel,
        item.expertise,
        item.knowledge_about_item,
        item.elapsed_time_in_days,
        item.window_of_opportunity,
        item.equipment,
        item.feasibility_level,
        item.risklevel,
        item.calvalue,
        item.securitygoal,
        item.record_created_date,
        item.record_deleted_date,
        )
      );
    } else {
      return [];
    }
  }

  // Function to call the delete endpoint
  deleteData(id: string): Observable<any> {
    const url: string = `http://localhost:8081/delete-tara-form-by-id`; // Replace with your delete endpoint URL
    const options = {
      headers: {
        'X-Delete-Id': id // Sending id as a header
      }
    };
    return this.http.delete(url, options);
  }
}
