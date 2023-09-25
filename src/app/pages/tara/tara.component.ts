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
  boldLabel: boolean = true;

  severKeywords = ['death', 'accident', 'loss of life'];
  majorKeywords = ['fracture'];
  moderateKeywords = ['hardware'];

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
      impact_level: new FormControl({value: '', disabled: true}),
      risk_level: new FormControl({value: '', disabled: true}),
      security_level: new FormControl(''),
      cal_value: new FormControl(''),
      security_goal: new FormControl(''),
      safety: new FormControl(''),
      privacy: new FormControl(''),
      financial: new FormControl(''),
      operational: new FormControl(''),
      expertise: new FormControl(''),
      knowledge_about_item: new FormControl(''),
      elapsed_time_in_days: new FormControl(''),
      window_of_opportunity: new FormControl(''),
      equipment: new FormControl(''),
      feasibility_level: new FormControl(''),
    })
  }

  ngOnInit(): void {
  }

  checkThreatScenario() {

    const threatValue = this.taraform.get('threat_scenario')?.value.toLowerCase()
    if (this.severKeywords.some(keyword => threatValue.includes(keyword))) {
      console.log("Bye")
      this.taraform.controls["impact_level"].setValue("4")
    } else if (this.majorKeywords.some(keyword => threatValue.includes(keyword))){
      this.taraform.controls["impact_level"].setValue("3")
    } else if (this.moderateKeywords.some(keyword => threatValue.includes(keyword))) {
      this.taraform.controls["impact_level"].setValue("2")
    } else {
      this.taraform.controls["impact_level"].setValue("1")
    }
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
