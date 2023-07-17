import {Component, OnInit} from '@angular/core';
import {FormGroup, FormControl, Validators, FormControlName} from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import {TaramodalComponent} from "../../shared/taramodal/taramodal.component";
import { MdbModalRef, MdbModalService } from 'mdb-angular-ui-kit/modal';

@Component({
  selector: 'app-tara',
  templateUrl: './tara.component.html',
  styleUrls: ['./tara.component.scss']
})
export class TaraComponent implements OnInit {

  taraform: FormGroup;
  modalRef: MdbModalRef<TaramodalComponent> | null = null;

  constructor(private http: HttpClient, private modalService: MdbModalService) {
    this.taraform = new FormGroup<any>({
      asset_name: new FormControl(''),
      attack_vector: new FormControl(''),
      confidentiality: new FormControl(false),
      integrity: new FormControl(false),
      availability: new FormControl(false),
      threat_scenario: new FormControl(''),
      damage_scenario: new FormControl(''),
      attack_route: new FormControl(''),
      impact_level: new FormControl(''),
      risk_level: new FormControl(''),
      security_level: new FormControl(''),
      cal_value: new FormControl(''),
      security_goal: new FormControl(''),
    })
  }

  ngOnInit(): void {
  }

  onSubmit(): void {
    // Process checkout data here
    if (this.taraform.valid) {
      const taraformData = {
        asset_name: this.taraform.get('asset_name')?.value,
        attack_vector: this.taraform.get('attack_vector')?.value,
        confidentiality: this.taraform.get('confidentiality')?.value,
        integrity: this.taraform.get('integrity')?.value,
        availability: this.taraform.get('availability')?.value,
        threat_scenario: this.taraform.get('threat_scenario')?.value,
        damage_scenario: this.taraform.get('damage_scenario')?.value,
        attack_route: this.taraform.get('attack_route')?.value,
        impact_level: this.taraform.get('impact_level')?.value,
        risk_level: this.taraform.get('risk_level')?.value,
        security_level: this.taraform.get('security_level')?.value,
        cal_value: this.taraform.get('cal_value')?.value,
        security_goal: this.taraform.get('security_goal')?.value,
      };
      console.log(JSON.stringify(taraformData))
      this.http.post('http://localhost:8081/submit', taraformData)
        .subscribe(
          (response: any) => {
            this.modalRef = this.modalService.open(TaramodalComponent)
            console.log('Form submission successful!', response);
            // Handle the response from the REST endpoint
          },
            (error: any) => {
            console.error('Error occurred during form submission:', error);
            // Handle the error from the REST endpoint
          }
        );
    }

  }
}
