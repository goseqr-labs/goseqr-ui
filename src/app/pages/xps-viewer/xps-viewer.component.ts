import { Component } from '@angular/core';

@Component({
  selector: 'app-xps-viewer',
  templateUrl: './xps-viewer.component.html',
  styleUrls: ['./xps-viewer.component.scss'],
})
export class XpsViewerComponent {
  xpsSrc: string = 'assets/sample.xps'; // Path to your XPS file
}
