import { Component } from '@angular/core';
import { MdbModalRef } from 'mdb-angular-ui-kit/modal';

@Component({
  selector: 'tara-modal',
  templateUrl: './taramodal.component.html',
})
export class TaramodalComponent {
  constructor(public modalRef: MdbModalRef<TaramodalComponent>) {}
}
