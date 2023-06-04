import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import factory, { mxGraph, mxGraphModel, mxHierarchicalLayout } from 'mxgraph';
import mx from '../../../mxgraph';

@Component({
  selector: 'app-drawio',
  templateUrl: './drawio.component.html',
  styleUrls: ['./drawio.component.scss']
})
export class DrawioComponent implements AfterViewInit {
  @ViewChild("graphContainer") containerElementRef: ElementRef ;

  get container() {
    return this.containerElementRef.nativeElement;
  }

  ngAfterViewInit(): void {
    if(mx.mxClient.isBrowserSupported()) {
      console.log('Yes! Yes!');
    }

    const graph = new mx.mxGraph(this.container);
    const model = graph.getModel();
    model.beginUpdate();
    try {
      graph.insertVertex(graph.getDefaultParent(), '', 'TEST', 0, 0, 100, 100);
    } finally {
      model.endUpdate();
    }
  }
}
