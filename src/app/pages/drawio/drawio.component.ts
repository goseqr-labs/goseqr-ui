import {AfterViewInit, Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import factory, { mxGraph, mxGraphModel, mxHierarchicalLayout,  } from 'mxgraph';
import mx from '../../../mxgraph';


@Component({
  selector: 'app-drawio',
  templateUrl: './drawio.component.html',
  styleUrls: ['./drawio.component.scss']
})
export class DrawioComponent implements AfterViewInit {
  //@ViewChild("graphContainer") containerElementRef: ElementRef ;
  @ViewChild("vsdxContainer") containerElementRef: ElementRef ;

  get container() {
    return this.containerElementRef.nativeElement;
  }

  /*ngAfterViewInit(): void {
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
  }*/

ngAfterViewInit(): void {
/*    const graph = new mx.mxGraph(this.container);

    // Load VSDX file as XML using mxUtils.load function
    console.log("Reading vsdx file")
    const { mxCodec } = mx.mxCodec

    const codec = new mxCodec();

  //const xmlData = mx.mxUtils.load('../../assets/sample.vsdx').getXml();
    //console.log("Data:", xmlData)

    const xmlData = `
    <?xml version="1.0" encoding="UTF-8"?>
<mxfile host="Electron" modified="2023-06-04T11:44:19.341Z" agent="Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) draw.io/21.2.8 Chrome/112.0.5615.165 Electron/24.2.0 Safari/537.36" version="21.2.8" etag="cXh0cyVTTlhTQuySc0pL" type="device"><diagram name="Page-1" id="Page-1">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</diagram></mxfile>
    `
    // Load XML into the mxGraph instance
    const xmlDoc = mx.mxUtils.parseXml(xmlData);
    const codec = codec.decode(xmlDoc);
    codec.decode(xmlDoc.documentElement, graph.getModel());*/
  //const container = this.vsdxContainer.nativeElement;
  const graph = new mx.mxGraph(this.container);


  // Load VSDX file as XML using mxUtils.load function
  const xmlData2 = mx.mxUtils.load('assets/sample.vsdx').getXml();
  console.log(xmlData2)

  const xmlData = `<?xml version="1.0" encoding="UTF-8"?>
<mxGraphModel dx="568" dy="828" grid="1" gridSize="10" guides="1" tooltips="1" connect="1" arrows="1" fold="1" page="1" pageScale="1" pageWidth="850" pageHeight="1100" math="0" shadow="0">
  <root>
    <mxCell id="0"/>
    <mxCell id="1" parent="0"/>
    <UserObject label="&lt;div style=&quot;font-size: 1px&quot;&gt;&lt;font style=&quot;font-size:11.29px;font-family:Arial;color:#000000;direction:ltr;letter-spacing:0px;line-height:120%;opacity:1&quot;&gt;OHC&lt;br/&gt;&lt;/font&gt;&lt;/div&gt;" tags="流程图" id="2">
      <mxCell style="verticalAlign=middle;align=center;overflow=width;vsdxID=1;fillColor=#ffffff;gradientColor=none;shape=stencil(nZBLDoAgDERP0z3SIyjew0SURgSD+Lu9kMZoXLhwN9O+tukAlrNpJg1SzDH4QW/URgNYgZTkjA4UkwJUgGXng+6DX1zLfmoymdXo17xh5zmRJ6Q42BWCfc2oJfdAr+Yv+AP9Cb7OJ3H/2JG1HNGz/84klThPVCc=);strokeColor=#000000;strokeWidth=2;spacingTop=-1;spacingBottom=-1;spacingLeft=-1;spacingRight=-1;points=[[1,0.5,0],[0.5,0.5,0],[0.5,0,0]];labelBackgroundColor=none;rounded=0;html=1;whiteSpace=wrap;" parent="1" vertex="1">
        <mxGeometry x="1953" y="519" width="52" height="37" as="geometry"/>
      </mxCell>
    </UserObject>
    <UserObject label="&lt;div style=&quot;font-size: 1px&quot;&gt;&lt;font style=&quot;font-size:11.29px;font-family:Arial;color:#000000;direction:ltr;letter-spacing:0px;line-height:120%;opacity:1&quot;&gt;WMM2&lt;br/&gt;&lt;/font&gt;&lt;/div&gt;" tags="流程图" id="3">
      <mxCell style="verticalAlign=middle;align=center;overflow=width;vsdxID=2;fillColor=#ffffff;gradientColor=none;shape=stencil(nZBLDoAgDERP0z3SIyjew0SURgSD+Lu9kMZoXLhwN9O+tukAlrNpJg1SzDH4QW/URgNYgZTkjA4UkwJUgGXng+6DX1zLfmoymdXo17xh5zmRJ6Q42BWCfc2oJfdAr+Yv+AP9Cb7OJ3H/2JG1HNGz/84klThPVCc=);strokeColor=#000000;strokeWidth=2;spacingTop=-1;spacingBottom=-1;spacingLeft=-1;spacingRight=-1;points=[[1,0.5,0],[0.5,0.5,0],[0.5,0,0]];labelBackgroundColor=none;rounded=0;html=1;whiteSpace=wrap;" parent="1" vertex="1">
        <mxGeometry x="1867" y="519" width="52" height="37" as="geometry"/>
      </mxCell>
    </UserObject>
    <UserObject label="&lt;div style=&quot;font-size: 1px&quot;&gt;&lt;font style=&quot;font-size:11.29px;font-family:Arial;color:#000000;direction:ltr;letter-spacing:0px;line-height:120%;opacity:1&quot;&gt;RLSM&lt;br/&gt;&lt;/font&gt;&lt;/div&gt;" tags="流程图" id="4">
      <mxCell style="verticalAlign=middle;align=center;overflow=width;vsdxID=3;fillColor=#ffffff;gradientColor=none;shape=stencil(nZBLDoAgDERP0z3SIyjew0SURgSD+Lu9kMZoXLhwN9O+tukAlrNpJg1SzDH4QW/URgNYgZTkjA4UkwJUgGXng+6DX1zLfmoymdXo17xh5zmRJ6Q42BWCfc2oJfdAr+Yv+AP9Cb7OJ3H/2JG1HNGz/84klThPVCc=);strokeColor=#000000;strokeWidth=2;spacingTop=-1;spacingBottom=-1;spacingLeft=-1;spacingRight=-1;points=[[1,0.5,0],[0.5,0.5,0],[0.5,0,0]];labelBackgroundColor=none;rounded=0;html=1;whiteSpace=wrap;" parent="1" vertex="1">
        <mxGeometry x="1867" y="563" width="52" height="37" as="geometry"/>
      </mxCell>
    </UserObject>
    <UserObject label="&lt;div style=&quot;font-size: 1px&quot;&gt;&lt;font style=&quot;font-size:11.29px;font-family:Arial;color:#000000;direction:ltr;letter-spacing:0px;line-height:120%;opacity:1&quot;&gt;IRMM&lt;br/&gt;&lt;/font&gt;&lt;/div&gt;" tags="流程图" id="5">
      <mxCell style="verticalAlign=middle;align=center;overflow=width;vsdxID=4;fillColor=#ffffff;gradientColor=none;shape=stencil(nZBLDoAgDERP0z3SIyjew0SURgSD+Lu9kMZoXLhwN9O+tukAlrNpJg1SzDH4QW/URgNYgZTkjA4UkwJUgGXng+6DX1zLfmoymdXo17xh5zmRJ6Q42BWCfc2oJfdAr+Yv+AP9Cb7OJ3H/2JG1HNGz/84klThPVCc=);strokeColor=#000000;strokeWidth=2;spacingTop=-1;spacingBottom=-1;spacingLeft=-1;spacingRight=-1;points=[[1,0.5,0],[0.5,0.5,0],[0.5,0,0]];labelBackgroundColor=none;rounded=0;html=1;whiteSpace=wrap;" parent="1" vertex="1">
        <mxGeometry x="1867" y="607" width="52" height="37" as="geometry"/>
      </mxCell>
    </UserObject>
    <UserObject label="&lt;div style=&quot;font-size: 1px&quot;&gt;&lt;font style=&quot;font-size:11.29px;font-family:Arial;color:#000000;direction:ltr;letter-spacing:0px;line-height:120%;opacity:1&quot;&gt;SWSM&lt;br/&gt;&lt;/font&gt;&lt;/div&gt;" tags="流程图" id="6">
      <mxCell style="verticalAlign=middle;align=center;overflow=width;vsdxID=5;fillColor=#ffffff;gradientColor=none;shape=stencil(nZBLDoAgDERP0z3SIyjew0SURgSD+Lu9kMZoXLhwN9O+tukAlrNpJg1SzDH4QW/URgNYgZTkjA4UkwJUgGXng+6DX1zLfmoymdXo17xh5zmRJ6Q42BWCfc2oJfdAr+Yv+AP9Cb7OJ3H/2JG1HNGz/84klThPVCc=);strokeColor=#000000;strokeWidth=2;spacingTop=-1;spacingBottom=-1;spacingLeft=-1;spacingRight=-1;points=[[1,0.5,0],[0.5,0.5,0],[0.5,0,0]];labelBackgroundColor=none;rounded=0;html=1;whiteSpace=wrap;" parent="1" vertex="1">
        <mxGeometry x="1252" y="443" width="52" height="37" as="geometry"/>
      </mxCell>
    </UserObject>
    <UserObject label="&lt;div style=&quot;font-size: 1px&quot;&gt;&lt;font style=&quot;font-size:11.29px;font-family:Arial;color:#000000;direction:ltr;letter-spacing:0px;line-height:120%;opacity:1&quot;&gt;DIS&lt;br/&gt;&lt;/font&gt;&lt;/div&gt;" tags="流程图" id="7">
      <mxCell style="verticalAlign=middle;align=center;overflow=width;vsdxID=6;fillColor=#ffffff;gradientColor=none;shape=stencil(nZBLDoAgDERP0z3SIyjew0SURgSD+Lu9kMZoXLhwN9O+tukAlrNpJg1SzDH4QW/URgNYgZTkjA4UkwJUgGXng+6DX1zLfmoymdXo17xh5zmRJ6Q42BWCfc2oJfdAr+Yv+AP9Cb7OJ3H/2JG1HNGz/84klThPVCc=);strokeColor=#000000;strokeWidth=2;spacingTop=-1;spacingBottom=-1;spacingLeft=-1;spacingRight=-1;points=[[1,0.5,0],[0.5,0.5,0],[0.5,0,0]];labelBackgroundColor=none;rounded=0;html=1;whiteSpace=wrap;" parent="1" vertex="1">
        <mxGeometry x="1314" y="443" width="52" height="37" as="geometry"/>
      </mxCell>
    </UserObject>
    <UserObject label="&lt;div style=&quot;font-size: 1px&quot;&gt;&lt;font style=&quot;font-size:11.29px;font-family:Arial;color:#000000;direction:ltr;letter-spacing:0px;line-height:120%;opacity:1&quot;&gt;VGM&lt;br/&gt;&lt;/font&gt;&lt;/div&gt;" tags="流程图" id="8">
      <mxCell style="verticalAlign=middle;align=center;overflow=width;vsdxID=7;fillColor=#ffffff;gradientColor=none;shape=stencil(nZBLDoAgDERP0z3SIyjew0SURgSD+Lu9kMZoXLhwN9O+tukAlrNpJg1SzDH4QW/URgNYgZTkjA4UkwJUgGXng+6DX1zLfmoymdXo17xh5zmRJ6Q42BWCfc2oJfdAr+Yv+AP9Cb7OJ3H/2JG1HNGz/84klThPVCc=);strokeColor=#000000;strokeWidth=3;spacingTop=-1;spacingBottom=-1;spacingLeft=-1;spacingRight=-1;points=[[0,0.62,0],[1,0.33,0],[0.12,0,0],[0.83,0,0],[0.38,0,0],[0,0.2,0],[0,0.93,0],[0.42,1,0],[1,0.67,0],[0.23,0,0],[0.55,1,0]];labelBackgroundColor=none;rounded=0;html=1;whiteSpace=wrap;" parent="1" vertex="1">
        <mxGeometry x="1508" y="787" width="152" height="60" as="geometry"/>
      </mxCell>
    </UserObject>
    <UserObject label="" tags="Background" id="9">
      <mxCell style="vsdxID=13;fillColor=none;gradientColor=none;points=[];labelBackgroundColor=none;rounded=0;strokeColor=none;html=1;whiteSpace=wrap;" parent="1" vertex="1">
        <mxGeometry x="1515" y="829" width="14" height="10" as="geometry"/>
      </mxCell>
    </UserObject>
    <mxCell id="10" style="vsdxID=14;fillColor=none;gradientColor=none;strokeColor=none;points=[];labelBackgroundColor=none;rounded=0;html=1;whiteSpace=wrap;" parent="9" vertex="1">
      <mxGeometry x="3" width="10" height="10" as="geometry"/>
    </mxCell>
    <UserObject label="" tags="Background" id="149">
      <mxCell style="vsdxID=15;edgeStyle=none;startArrow=none;endArrow=none;startSize=5;endSize=5;strokeColor=#4bacc6;spacingTop=0;spacingBottom=0;spacingLeft=0;spacingRight=0;verticalAlign=middle;html=1;labelBackgroundColor=#ffffff;rounded=0;" parent="10" edge="1">
        <mxGeometry relative="1" as="geometry">
          <Array as="points"/>
          <mxPoint y="-1" as="sourcePoint"/>
          <mxPoint x="5" y="10" as="targetPoint"/>
        </mxGeometry>
      </mxCell>
    </UserObject>
    <UserObject label="" tags="Background" id="150">
      <mxCell style="vsdxID=16;edgeStyle=none;startArrow=none;endArrow=none;startSize=5;endSize=5;strokeColor=#4bacc6;spacingTop=0;spacingBottom=0;spacingLeft=0;spacingRight=0;verticalAlign=middle;html=1;labelBackgroundColor=#ffffff;rounded=0;" parent="10" edge="1">
        <mxGeometry relative="1" as="geometry">
          <mxPoint as="offset"/>
          <Array as="points"/>
          <mxPoint x="5" y="10" as="sourcePoint"/>
          <mxPoint x="10" y="10" as="targetPoint"/>
        </mxGeometry>
      </mxCell>
    </UserObject>
    <mxCell id="11" style="vsdxID=17;fillColor=none;gradientColor=none;strokeColor=none;flipH=1;points=[];labelBackgroundColor=none;rounded=0;html=1;whiteSpace=wrap;" parent="9" vertex="1">
      <mxGeometry width="10" height="10" as="geometry"/>
    </mxCell>
    <UserObject label="" tags="Background" id="151">
      <mxCell style="vsdxID=18;edgeStyle=none;startArrow=none;endArrow=none;startSize=5;endSize=5;strokeColor=#4bacc6;spacingTop=0;spacingBottom=0;spacingLeft=0;spacingRight=0;verticalAlign=middle;html=1;labelBackgroundColor=#ffffff;rounded=0;" parent="11" edge="1">
        <mxGeometry relative="1" as="geometry">
          <Array as="points"/>
          <mxPoint y="-1" as="sourcePoint"/>
          <mxPoint x="5" y="10" as="targetPoint"/>
        </mxGeometry>
      </mxCell>
    </UserObject>
    <UserObject label="" tags="Background" id="152">
      <mxCell style="vsdxID=19;edgeStyle=none;startArrow=none;endArrow=none;startSize=5;endSize=5;strokeColor=#4bacc6;spacingTop=0;spacingBottom=0;spacingLeft=0;spacingRight=0;verticalAlign=middle;html=1;labelBackgroundColor=#ffffff;rounded=0;" parent="11" edge="1">
        <mxGeometry relative="1" as="geometry">
          <mxPoint as="offset"/>
          <Array as="points"/>
          <mxPoint x="5" y="10" as="sourcePoint"/>
          <mxPoint x="10" y="10" as="targetPoint"/>
        </mxGeometry>
      </mxCell>
    </UserObject>
    <UserObject label="&lt;div style=&quot;font-size: 1px&quot;&gt;&lt;font style=&quot;font-size:11.29px;font-family:Arial;color:#000000;direction:ltr;letter-spacing:0px;line-height:120%;opacity:1&quot;&gt;FLC1&lt;br/&gt;&lt;/font&gt;&lt;/div&gt;" tags="流程图" id="12">
      <mxCell style="verticalAlign=middle;align=center;overflow=width;vsdxID=20;fillColor=#ffffff;gradientColor=none;shape=stencil(nZBLDoAgDERP0z3SIyjew0SURgSD+Lu9kMZoXLhwN9O+tukAlrNpJg1SzDH4QW/URgNYgZTkjA4UkwJUgGXng+6DX1zLfmoymdXo17xh5zmRJ6Q42BWCfc2oJfdAr+Yv+AP9Cb7OJ3H/2JG1HNGz/84klThPVCc=);strokeColor=#000000;strokeWidth=2;spacingTop=-1;spacingBottom=-1;spacingLeft=-1;spacingRight=-1;points=[[1,0.5,0],[0.5,0.5,0],[0.5,0,0]];labelBackgroundColor=none;rounded=0;html=1;whiteSpace=wrap;" parent="1" vertex="1">
        <mxGeometry x="1282" y="382" width="52" height="22" as="geometry"/>
      </mxCell>
    </UserObject>
    <UserObject label="&lt;div style=&quot;font-size: 1px&quot;&gt;&lt;font style=&quot;font-size:11.29px;font-family:Arial;color:#000000;direction:ltr;letter-spacing:0px;line-height:120%;opacity:1&quot;&gt;PAC&lt;br/&gt;&lt;/font&gt;&lt;/div&gt;" tags="流程图" id="13">
      <mxCell style="verticalAlign=middle;align=center;overflow=width;vsdxID=25;fillColor=#ffffff;gradientColor=none;shape=stencil(nZBLDoAgDERP0z3SIyjew0SURgSD+Lu9kMZoXLhwN9O+tukAlrNpJg1SzDH4QW/URgNYgZTkjA4UkwJUgGXng+6DX1zLfmoymdXo17xh5zmRJ6Q42BWCfc2oJfdAr+Yv+AP9Cb7OJ3H/2JG1HNGz/84klThPVCc=);strokeColor=#000000;strokeWidth=2;spacingTop=-1;spacingBottom=-1;spacingLeft=-1;spacingRight=-1;points=[[1,0.5,0],[0.5,0.5,0],[0.5,0,0]];labelBackgroundColor=none;rounded=0;html=1;whiteSpace=wrap;" parent="1" vertex="1">
        <mxGeometry x="1114" y="510" width="52" height="37" as="geometry"/>
      </mxCell>
    </UserObject>
    <UserObject label="" tags="Background" id="14">
      <mxCell style="vsdxID=27;rotation=270;fillColor=none;gradientColor=none;points=[];labelBackgroundColor=none;rounded=0;strokeColor=none;html=1;whiteSpace=wrap;" parent="1" vertex="1">
        <mxGeometry x="1113" y="711" width="16" height="15" as="geometry"/>
      </mxCell>
    </UserObject>
    <mxCell id="15" style="vsdxID=28;rotation=270;fillColor=#000000;gradientColor=none;shape=stencil(xVPbDoIwDP2aPUJ2EcRnxf9YZMAiMlKmwN+7pSQyowkxUd96es7a02YlYt/XslOE096COatBF7Ym4kA4122tQFsXEZETsS8NqArMtS0Qd9IrfXQxN19hxHfUv+B0QpQgPKJSwslRMCt5glKYQjzTjL4sRcdIjrqPwFhptWmDro2ESkWuTVQ2sprrINUPSnWL9OfGfmcr3CxjcZqu3i7bxWwbzrFIzaIsi8XmT1teZfDtzF8x6ILHty510+BVLPnnM3ApPCGR3wE=);points=[[1,0.5,0],[0.5,0.5,0],[0.5,0,0],[0.15,0.85,0],[0.85,0.85,0],[0.85,0.15,0],[0.15,0.15,0]];labelBackgroundColor=none;rounded=0;html=1;whiteSpace=wrap;" parent="14" vertex="1">
      <mxGeometry x="2" y="2" width="12" height="14" as="geometry"/>
    </mxCell>
    <mxCell id="16" style="vsdxID=29;fillColor=#ffffff;gradientColor=none;shape=stencil(nZBLDoAgDERP0z3SIyjew0SURgSD+Lu9kMZoXLhwN9O+tukAlrNpJg1SzDH4QW/URgNYgZTkjA4UkwJUgGXng+6DX1zLfmoymdXo17xh5zmRJ6Q42BWCfc2oJfdAr+Yv+AP9Cb7OJ3H/2JG1HNGz/84klThPVCc=);strokeColor=none;points=[[1,0.5,0],[0.5,0,0],[0.5,0.5,0],[0.5,0.5,0]];labelBackgroundColor=none;rounded=0;html=1;whiteSpace=wrap;" parent="14" vertex="1">
      <mxGeometry x="-1" y="9" width="16" height="7" as="geometry"/>
    </mxCell>
    <mxCell id="17" style="vsdxID=30;rotation=270;fillColor=none;gradientColor=none;points=[];labelBackgroundColor=none;rounded=0;strokeColor=none;html=1;whiteSpace=wrap;" parent="14" vertex="1">
      <mxGeometry x="3" y="9" width="9" height="5" as="geometry"/>
    </mxCell>
    <mxCell id="18" style="vsdxID=31;rotation=270;fillColor=#000000;gradientColor=none;shape=stencil(rVFBDsIwDHtNj5VCK14wxj8ilm0VZZ3SAuX3tAoIBhwQ4mbHjhMlyjZxxJmUgZg47OnsujQqu1HGuGkkdqkgZVtlmz4wDRyOUyd8xuqs6BBONSFLH9QOAxdha6FbcSLvisR5oQEvvfegFXyMgqwxu6g5JEwuTIupHnkgXcbo3uNwyxEpnonmt/Ivi/1nLfhirQIeZ+6d9/KlZ/31LaUkL7XtFQ==);points=[[0.5,0,0],[0.5,0.5,0],[0.5,0.5,0],[0.5,0.5,0],[1,0.5,0],[0.15,0.85,0],[0.85,0.85,0],[0.85,0.15,0],[0.15,0.15,0]];labelBackgroundColor=none;rounded=0;html=1;whiteSpace=wrap;" parent="17" vertex="1">
      <mxGeometry x="3" y="3" width="4" height="5" as="geometry"/>
    </mxCell>
    <mxCell id="19" style="vsdxID=32;rotation=270;fillColor=#000000;gradientColor=none;shape=stencil(nZBLDoAgDERP0z3SIyjew0SURgSD+Lu9kMZoXLhwN9O+tukAlrNpJg1SzDH4QW/URgNYgZTkjA4UkwJUgGXng+6DX1zLfmoymdXo17xh5zmRJ6Q42BWCfc2oJfdAr+Yv+AP9Cb7OJ3H/2JG1HNGz/84klThPVCc=);points=[[1,0.5,0],[0.5,0,0],[0.5,0.5,0],[0.5,0.5,0]];labelBackgroundColor=none;rounded=0;html=1;whiteSpace=wrap;" parent="17" vertex="1">
      <mxGeometry x="2" y="1" width="5" height="5" as="geometry"/>
    </mxCell>
    <mxCell id="20" style="vsdxID=33;rotation=270;fillColor=#000000;gradientColor=none;shape=stencil(rVFBDsIwDHtNj5VCK14wxj8ilm0VZZ3SAuX3tAoIBhwQ4mbHjhMlyjZxxJmUgZg47OnsujQqu1HGuGkkdqkgZVtlmz4wDRyOUyd8xuqs6BBONSFLH9QOAxdha6FbcSLvisR5oQEvvfegFXyMgqwxu6g5JEwuTIupHnkgXcbo3uNwyxEpnonmt/Ivi/1nLfhirQIeZ+6d9/KlZ/31LaUkL7XtFQ==);points=[[0.5,0,0],[0.5,0.5,0],[0.5,0.5,0],[0.5,0.5,0],[1,0.5,0],[0.15,0.85,0],[0.85,0.85,0],[0.85,0.15,0],[0.15,0.15,0]];labelBackgroundColor=none;rounded=0;html=1;whiteSpace=wrap;" parent="17" vertex="1">
      <mxGeometry x="2" y="-2" width="4" height="5" as="geometry"/>
    </mxCell>
    <mxCell id="21" style="vsdxID=34;rotation=270;fillColor=#000000;gradientColor=none;shape=stencil(nZBLDoAgDERP0z3SIyjew0SURgSD+Lu9kMZoXLhwN9O+tukAlrNpJg1SzDH4QW/URgNYgZTkjA4UkwJUgGXng+6DX1zLfmoymdXo17xh5zmRJ6Q42BWCfc2oJfdAr+Yv+AP9Cb7OJ3H/2JG1HNGz/84klThPVCc=);points=[[1,0.5,0],[0.5,0,0],[0.5,0.5,0],[0.5,0.5,0]];labelBackgroundColor=none;rounded=0;html=1;whiteSpace=wrap;" parent="14" vertex="1">
      <mxGeometry x="6" y="1" width="2" height="2" as="geometry"/>
    </mxCell>
    <UserObject label="" tags="Background" id="22">
      <mxCell style="vsdxID=35;rotation=270;fillColor=none;gradientColor=none;points=[];labelBackgroundColor=none;rounded=0;strokeColor=none;html=1;whiteSpace=wrap;" parent="1" vertex="1">
        <mxGeometry x="1093" y="711" width="16" height="15" as="geometry"/>
      </mxCell>
    </UserObject>
    <mxCell id="23" style="vsdxID=36;rotation=270;fillColor=#000000;gradientColor=none;shape=stencil(xVPbDoIwDP2aPUJ2EcRnxf9YZMAiMlKmwN+7pSQyowkxUd96es7a02YlYt/XslOE096COatBF7Ym4kA4122tQFsXEZETsS8NqArMtS0Qd9IrfXQxN19hxHfUv+B0QpQgPKJSwslRMCt5glKYQjzTjL4sRcdIjrqPwFhptWmDro2ESkWuTVQ2sprrINUPSnWL9OfGfmcr3CxjcZqu3i7bxWwbzrFIzaIsi8XmT1teZfDtzF8x6ILHty510+BVLPnnM3ApPCGR3wE=);points=[[1,0.5,0],[0.5,0.5,0],[0.5,0,0],[0.15,0.85,0],[0.85,0.85,0],[0.85,0.15,0],[0.15,0.15,0]];labelBackgroundColor=none;rounded=0;html=1;whiteSpace=wrap;" parent="22" vertex="1">
      <mxGeometry x="2" y="2" width="12" height="14" as="geometry"/>
    </mxCell>
    <mxCell id="24" style="vsdxID=37;fillColor=#ffffff;gradientColor=none;shape=stencil(nZBLDoAgDERP0z3SIyjew0SURgSD+Lu9kMZoXLhwN9O+tukAlrNpJg1SzDH4QW/URgNYgZTkjA4UkwJUgGXng+6DX1zLfmoymdXo17xh5zmRJ6Q42BWCfc2oJfdAr+Yv+AP9Cb7OJ3H/2JG1HNGz/84klThPVCc=);strokeColor=none;points=[[1,0.5,0],[0.5,0,0],[0.5,0.5,0],[0.5,0.5,0]];labelBackgroundColor=none;rounded=0;html=1;whiteSpace=wrap;" parent="22" vertex="1">
      <mxGeometry x="-1" y="9" width="16" height="7" as="geometry"/>
    </mxCell>
    <mxCell id="25" style="vsdxID=38;rotation=270;fillColor=none;gradientColor=none;points=[];labelBackgroundColor=none;rounded=0;strokeColor=none;html=1;whiteSpace=wrap;" parent="22" vertex="1">
      <mxGeometry x="3" y="9" width="9" height="5" as="geometry"/>
    </mxCell>
    <mxCell id="26" style="vsdxID=39;rotation=270;fillColor=#000000;gradientColor=none;shape=stencil(rVFBDsIwDHtNj5VCK14wxj8ilm0VZZ3SAuX3tAoIBhwQ4mbHjhMlyjZxxJmUgZg47OnsujQqu1HGuGkkdqkgZVtlmz4wDRyOUyd8xuqs6BBONSFLH9QOAxdha6FbcSLvisR5oQEvvfegFXyMgqwxu6g5JEwuTIupHnkgXcbo3uNwyxEpnonmt/Ivi/1nLfhirQIeZ+6d9/KlZ/31LaUkL7XtFQ==);points=[[0.5,0,0],[0.5,0.5,0],[0.5,0.5,0],[0.5,0.5,0],[1,0.5,0],[0.15,0.85,0],[0.85,0.85,0],[0.85,0.15,0],[0.15,0.15,0]];labelBackgroundColor=none;rounded=0;html=1;whiteSpace=wrap;" parent="25" vertex="1">
      <mxGeometry x="3" y="3" width="4" height="5" as="geometry"/>
    </mxCell>
    <mxCell id="27" style="vsdxID=40;rotation=270;fillColor=#000000;gradientColor=none;shape=stencil(nZBLDoAgDERP0z3SIyjew0SURgSD+Lu9kMZoXLhwN9O+tukAlrNpJg1SzDH4QW/URgNYgZTkjA4UkwJUgGXng+6DX1zLfmoymdXo17xh5zmRJ6Q42BWCfc2oJfdAr+Yv+AP9Cb7OJ3H/2JG1HNGz/84klThPVCc=);points=[[1,0.5,0],[0.5,0,0],[0.5,0.5,0],[0.5,0.5,0]];labelBackgroundColor=none;rounded=0;html=1;whiteSpace=wrap;" parent="25" vertex="1">
      <mxGeometry x="2" y="1" width="5" height="5" as="geometry"/>
    </mxCell>
    <mxCell id="28" style="vsdxID=41;rotation=270;fillColor=#000000;gradientColor=none;shape=stencil(rVFBDsIwDHtNj5VCK14wxj8ilm0VZZ3SAuX3tAoIBhwQ4mbHjhMlyjZxxJmUgZg47OnsujQqu1HGuGkkdqkgZVtlmz4wDRyOUyd8xuqs6BBONSFLH9QOAxdha6FbcSLvisR5oQEvvfegFXyMgqwxu6g5JEwuTIupHnkgXcbo3uNwyxEpnonmt/Ivi/1nLfhirQIeZ+6d9/KlZ/31LaUkL7XtFQ==);points=[[0.5,0,0],[0.5,0.5,0],[0.5,0.5,0],[0.5,0.5,0],[1,0.5,0],[0.15,0.85,0],[0.85,0.85,0],[0.85,0.15,0],[0.15,0.15,0]];labelBackgroundColor=none;rounded=0;html=1;whiteSpace=wrap;" parent="25" vertex="1">
      <mxGeometry x="2" y="-2" width="4" height="5" as="geometry"/>
    </mxCell>
    <mxCell id="29" style="vsdxID=42;rotation=270;fillColor=#000000;gradientColor=none;shape=stencil(nZBLDoAgDERP0z3SIyjew0SURgSD+Lu9kMZoXLhwN9O+tukAlrNpJg1SzDH4QW/URgNYgZTkjA4UkwJUgGXng+6DX1zLfmoymdXo17xh5zmRJ6Q42BWCfc2oJfdAr+Yv+AP9Cb7OJ3H/2JG1HNGz/84klThPVCc=);points=[[1,0.5,0],[0.5,0,0],[0.5,0.5,0],[0.5,0.5,0]];labelBackgroundColor=none;rounded=0;html=1;whiteSpace=wrap;" parent="22" vertex="1">
      <mxGeometry x="6" y="1" width="2" height="2" as="geometry"/>
    </mxCell>
    <UserObject label="" tags="Background" id="30">
      <mxCell style="vsdxID=43;rotation=270;fillColor=none;gradientColor=none;points=[];labelBackgroundColor=none;rounded=0;strokeColor=none;html=1;whiteSpace=wrap;" parent="1" vertex="1">
        <mxGeometry x="1073" y="711" width="16" height="15" as="geometry"/>
      </mxCell>
    </UserObject>
    <mxCell id="31" style="vsdxID=44;rotation=270;fillColor=#000000;gradientColor=none;shape=stencil(xVPbDoIwDP2aPUJ2EcRnxf9YZMAiMlKmwN+7pSQyowkxUd96es7a02YlYt/XslOE096COatBF7Ym4kA4122tQFsXEZETsS8NqArMtS0Qd9IrfXQxN19hxHfUv+B0QpQgPKJSwslRMCt5glKYQjzTjL4sRcdIjrqPwFhptWmDro2ESkWuTVQ2sprrINUPSnWL9OfGfmcr3CxjcZqu3i7bxWwbzrFIzaIsi8XmT1teZfDtzF8x6ILHty510+BVLPnnM3ApPCGR3wE=);points=[[1,0.5,0],[0.5,0.5,0],[0.5,0,0],[0.15,0.85,0],[0.85,0.85,0],[0.85,0.15,0],[0.15,0.15,0]];labelBackgroundColor=none;rounded=0;html=1;whiteSpace=wrap;" parent="30" vertex="1">
      <mxGeometry x="2" y="2" width="12" height="14" as="geometry"/>
    </mxCell>
    <mxCell id="32" style="vsdxID=45;fillColor=#ffffff;gradientColor=none;shape=stencil(nZBLDoAgDERP0z3SIyjew0SURgSD+Lu9kMZoXLhwN9O+tukAlrNpJg1SzDH4QW/URgNYgZTkjA4UkwJUgGXng+6DX1zLfmoymdXo17xh5zmRJ6Q42BWCfc2oJfdAr+Yv+AP9Cb7OJ3H/2JG1HNGz/84klThPVCc=);strokeColor=none;points=[[1,0.5,0],[0.5,0,0],[0.5,0.5,0],[0.5,0.5,0]];labelBackgroundColor=none;rounded=0;html=1;whiteSpace=wrap;" parent="30" vertex="1">
      <mxGeometry x="-1" y="9" width="16" height="7" as="geometry"/>
    </mxCell>
    <mxCell id="33" style="vsdxID=46;rotation=270;fillColor=none;gradientColor=none;points=[];labelBackgroundColor=none;rounded=0;strokeColor=none;html=1;whiteSpace=wrap;" parent="30" vertex="1">
      <mxGeometry x="3" y="9" width="9" height="5" as="geometry"/>
    </mxCell>
    <mxCell id="34" style="vsdxID=47;rotation=270;fillColor=#000000;gradientColor=none;shape=stencil(rVFBDsIwDHtNj5VCK14wxj8ilm0VZZ3SAuX3tAoIBhwQ4mbHjhMlyjZxxJmUgZg47OnsujQqu1HGuGkkdqkgZVtlmz4wDRyOUyd8xuqs6BBONSFLH9QOAxdha6FbcSLvisR5oQEvvfegFXyMgqwxu6g5JEwuTIupHnkgXcbo3uNwyxEpnonmt/Ivi/1nLfhirQIeZ+6d9/KlZ/31LaUkL7XtFQ==);points=[[0.5,0,0],[0.5,0.5,0],[0.5,0.5,0],[0.5,0.5,0],[1,0.5,0],[0.15,0.85,0],[0.85,0.85,0],[0.85,0.15,0],[0.15,0.15,0]];labelBackgroundColor=none;rounded=0;html=1;whiteSpace=wrap;" parent="33" vertex="1">
      <mxGeometry x="3" y="3" width="4" height="5" as="geometry"/>
    </mxCell>
    <mxCell id="35" style="vsdxID=48;rotation=270;fillColor=#000000;gradientColor=none;shape=stencil(nZBLDoAgDERP0z3SIyjew0SURgSD+Lu9kMZoXLhwN9O+tukAlrNpJg1SzDH4QW/URgNYgZTkjA4UkwJUgGXng+6DX1zLfmoymdXo17xh5zmRJ6Q42BWCfc2oJfdAr+Yv+AP9Cb7OJ3H/2JG1HNGz/84klThPVCc=);points=[[1,0.5,0],[0.5,0,0],[0.5,0.5,0],[0.5,0.5,0]];labelBackgroundColor=none;rounded=0;html=1;whiteSpace=wrap;" parent="33" vertex="1">
      <mxGeometry x="2" y="1" width="5" height="5" as="geometry"/>
    </mxCell>
    <mxCell id="36" style="vsdxID=49;rotation=270;fillColor=#000000;gradientColor=none;shape=stencil(rVFBDsIwDHtNj5VCK14wxj8ilm0VZZ3SAuX3tAoIBhwQ4mbHjhMlyjZxxJmUgZg47OnsujQqu1HGuGkkdqkgZVtlmz4wDRyOUyd8xuqs6BBONSFLH9QOAxdha6FbcSLvisR5oQEvvfegFXyMgqwxu6g5JEwuTIupHnkgXcbo3uNwyxEpnonmt/Ivi/1nLfhirQIeZ+6d9/KlZ/31LaUkL7XtFQ==);points=[[0.5,0,0],[0.5,0.5,0],[0.5,0.5,0],[0.5,0.5,0],[1,0.5,0],[0.15,0.85,0],[0.85,0.85,0],[0.85,0.15,0],[0.15,0.15,0]];labelBackgroundColor=none;rounded=0;html=1;whiteSpace=wrap;" parent="33" vertex="1">
      <mxGeometry x="2" y="-2" width="4" height="5" as="geometry"/>
    </mxCell>
    <mxCell id="37" style="vsdxID=50;rotation=270;fillColor=#000000;gradientColor=none;shape=stencil(nZBLDoAgDERP0z3SIyjew0SURgSD+Lu9kMZoXLhwN9O+tukAlrNpJg1SzDH4QW/URgNYgZTkjA4UkwJUgGXng+6DX1zLfmoymdXo17xh5zmRJ6Q42BWCfc2oJfdAr+Yv+AP9Cb7OJ3H/2JG1HNGz/84klThPVCc=);points=[[1,0.5,0],[0.5,0,0],[0.5,0.5,0],[0.5,0.5,0]];labelBackgroundColor=none;rounded=0;html=1;whiteSpace=wrap;" parent="30" vertex="1">
      <mxGeometry x="6" y="1" width="2" height="2" as="geometry"/>
    </mxCell>
    <UserObject label="" tags="Background" id="38">
      <mxCell style="vsdxID=51;rotation=270;fillColor=none;gradientColor=none;points=[];labelBackgroundColor=none;rounded=0;strokeColor=none;html=1;whiteSpace=wrap;" parent="1" vertex="1">
        <mxGeometry x="1053" y="711" width="16" height="15" as="geometry"/>
      </mxCell>
    </UserObject>
    <mxCell id="39" style="vsdxID=52;rotation=270;fillColor=#000000;gradientColor=none;shape=stencil(xVPbDoIwDP2aPUJ2EcRnxf9YZMAiMlKmwN+7pSQyowkxUd96es7a02YlYt/XslOE096COatBF7Ym4kA4122tQFsXEZETsS8NqArMtS0Qd9IrfXQxN19hxHfUv+B0QpQgPKJSwslRMCt5glKYQjzTjL4sRcdIjrqPwFhptWmDro2ESkWuTVQ2sprrINUPSnWL9OfGfmcr3CxjcZqu3i7bxWwbzrFIzaIsi8XmT1teZfDtzF8x6ILHty510+BVLPnnM3ApPCGR3wE=);points=[[1,0.5,0],[0.5,0.5,0],[0.5,0,0],[0.15,0.85,0],[0.85,0.85,0],[0.85,0.15,0],[0.15,0.15,0]];labelBackgroundColor=none;rounded=0;html=1;whiteSpace=wrap;" parent="38" vertex="1">
      <mxGeometry x="2" y="2" width="12" height="14" as="geometry"/>
    </mxCell>
    <mxCell id="40" style="vsdxID=53;fillColor=#ffffff;gradientColor=none;shape=stencil(nZBLDoAgDERP0z3SIyjew0SURgSD+Lu9kMZoXLhwN9O+tukAlrNpJg1SzDH4QW/URgNYgZTkjA4UkwJUgGXng+6DX1zLfmoymdXo17xh5zmRJ6Q42BWCfc2oJfdAr+Yv+AP9Cb7OJ3H/2JG1HNGz/84klThPVCc=);strokeColor=none;points=[[1,0.5,0],[0.5,0,0],[0.5,0.5,0],[0.5,0.5,0]];labelBackgroundColor=none;rounded=0;html=1;whiteSpace=wrap;" parent="38" vertex="1">
      <mxGeometry x="-1" y="9" width="16" height="7" as="geometry"/>
    </mxCell>
    <mxCell id="41" style="vsdxID=54;rotation=270;fillColor=none;gradientColor=none;points=[];labelBackgroundColor=none;rounded=0;strokeColor=none;html=1;whiteSpace=wrap;" parent="38" vertex="1">
      <mxGeometry x="3" y="9" width="9" height="5" as="geometry"/>
    </mxCell>
    <mxCell id="42" style="vsdxID=55;rotation=270;fillColor=#000000;gradientColor=none;shape=stencil(rVFBDsIwDHtNj5VCK14wxj8ilm0VZZ3SAuX3tAoIBhwQ4mbHjhMlyjZxxJmUgZg47OnsujQqu1HGuGkkdqkgZVtlmz4wDRyOUyd8xuqs6BBONSFLH9QOAxdha6FbcSLvisR5oQEvvfegFXyMgqwxu6g5JEwuTIupHnkgXcbo3uNwyxEpnonmt/Ivi/1nLfhirQIeZ+6d9/KlZ/31LaUkL7XtFQ==);points=[[0.5,0,0],[0.5,0.5,0],[0.5,0.5,0],[0.5,0.5,0],[1,0.5,0],[0.15,0.85,0],[0.85,0.85,0],[0.85,0.15,0],[0.15,0.15,0]];labelBackgroundColor=none;rounded=0;html=1;whiteSpace=wrap;" parent="41" vertex="1">
      <mxGeometry x="3" y="3" width="4" height="5" as="geometry"/>
    </mxCell>
    <mxCell id="43" style="vsdxID=56;rotation=270;fillColor=#000000;gradientColor=none;shape=stencil(nZBLDoAgDERP0z3SIyjew0SURgSD+Lu9kMZoXLhwN9O+tukAlrNpJg1SzDH4QW/URgNYgZTkjA4UkwJUgGXng+6DX1zLfmoymdXo17xh5zmRJ6Q42BWCfc2oJfdAr+Yv+AP9Cb7OJ3H/2JG1HNGz/84klThPVCc=);points=[[1,0.5,0],[0.5,0,0],[0.5,0.5,0],[0.5,0.5,0]];labelBackgroundColor=none;rounded=0;html=1;whiteSpace=wrap;" parent="41" vertex="1">
      <mxGeometry x="2" y="1" width="5" height="5" as="geometry"/>
    </mxCell>
    <mxCell id="44" style="vsdxID=57;rotation=270;fillColor=#000000;gradientColor=none;shape=stencil(rVFBDsIwDHtNj5VCK14wxj8ilm0VZZ3SAuX3tAoIBhwQ4mbHjhMlyjZxxJmUgZg47OnsujQqu1HGuGkkdqkgZVtlmz4wDRyOUyd8xuqs6BBONSFLH9QOAxdha6FbcSLvisR5oQEvvfegFXyMgqwxu6g5JEwuTIupHnkgXcbo3uNwyxEpnonmt/Ivi/1nLfhirQIeZ+6d9/KlZ/31LaUkL7XtFQ==);points=[[0.5,0,0],[0.5,0.5,0],[0.5,0.5,0],[0.5,0.5,0],[1,0.5,0],[0.15,0.85,0],[0.85,0.85,0],[0.85,0.15,0],[0.15,0.15,0]];labelBackgroundColor=none;rounded=0;html=1;whiteSpace=wrap;" parent="41" vertex="1">
      <mxGeometry x="2" y="-2" width="4" height="5" as="geometry"/>
    </mxCell>
    <mxCell id="45" style="vsdxID=58;rotation=270;fillColor=#000000;gradientColor=none;shape=stencil(nZBLDoAgDERP0z3SIyjew0SURgSD+Lu9kMZoXLhwN9O+tukAlrNpJg1SzDH4QW/URgNYgZTkjA4UkwJUgGXng+6DX1zLfmoymdXo17xh5zmRJ6Q42BWCfc2oJfdAr+Yv+AP9Cb7OJ3H/2JG1HNGz/84klThPVCc=);points=[[1,0.5,0],[0.5,0,0],[0.5,0.5,0],[0.5,0.5,0]];labelBackgroundColor=none;rounded=0;html=1;whiteSpace=wrap;" parent="38" vertex="1">
      <mxGeometry x="6" y="1" width="2" height="2" as="geometry"/>
    </mxCell>
    <UserObject label="" tags="Background" id="46">
      <mxCell style="vsdxID=59;fillColor=none;gradientColor=none;strokeColor=none;strokeWidth=2;spacingTop=-1;spacingBottom=-1;spacingLeft=-1;spacingRight=-1;points=[];labelBackgroundColor=none;rounded=0;html=1;whiteSpace=wrap;" parent="1" vertex="1">
        <mxGeometry x="1812" y="398" width="57" height="37" as="geometry"/>
      </mxCell>
    </UserObject>
    <mxCell id="47" value="&lt;div style=&quot;font-size: 1px&quot;&gt;&lt;font style=&quot;font-size:11.29px;font-family:Arial;color:#000000;direction:ltr;letter-spacing:0px;line-height:120%;opacity:1&quot;&gt;HCMR&lt;br/&gt;&lt;/font&gt;&lt;/div&gt;" style="verticalAlign=middle;align=center;overflow=width;vsdxID=60;fillColor=#ffffff;gradientColor=none;shape=stencil(nZBLDoAgDERP0z3SIyjew0SURgSD+Lu9kMZoXLhwN9O+tukAlrNpJg1SzDH4QW/URgNYgZTkjA4UkwJUgGXng+6DX1zLfmoymdXo17xh5zmRJ6Q42BWCfc2oJfdAr+Yv+AP9Cb7OJ3H/2JG1HNGz/84klThPVCc=);strokeColor=#000000;strokeWidth=2;spacingTop=-1;spacingBottom=-1;spacingLeft=-1;spacingRight=-1;points=[[1,0.5,0],[0.5,0.5,0],[0.5,0,0]];labelBackgroundColor=none;rounded=0;html=1;whiteSpace=wrap;" parent="46" vertex="1">
      <mxGeometry y="3" width="52" height="37" as="geometry"/>
    </mxCell>
    <UserObject label="" tags="Background" id="48">
      <mxCell style="vsdxID=66;fillColor=none;gradientColor=none;points=[];labelBackgroundColor=none;rounded=0;strokeColor=none;html=1;whiteSpace=wrap;" parent="1" vertex="1">
        <mxGeometry x="1811" y="444" width="520" height="63" as="geometry"/>
      </mxCell>
    </UserObject>
    <mxCell id="49" value="&lt;div style=&quot;font-size: 1px&quot;&gt;&lt;font style=&quot;font-size:11.29px;font-family:Arial;color:#000000;direction:ltr;letter-spacing:0px;line-height:120%;opacity:1&quot;&gt;CEM&lt;br/&gt;&lt;/font&gt;&lt;/div&gt;" style="verticalAlign=middle;align=center;overflow=width;vsdxID=67;fillColor=#d8d8d8;gradientColor=none;shape=stencil(nZBLDoAgDERP0z3SIyjew0SURgSD+Lu9kMZoXLhwN9O+tukAlrNpJg1SzDH4QW/URgNYgZTkjA4UkwJUgGXng+6DX1zLfmoymdXo17xh5zmRJ6Q42BWCfc2oJfdAr+Yv+AP9Cb7OJ3H/2JG1HNGz/84klThPVCc=);strokeColor=#00b050;strokeWidth=3;spacingTop=-1;spacingBottom=-1;spacingLeft=-1;spacingRight=-1;points=[[0.25,1,0],[0.14,0,0],[0.63,0,0],[0.47,0,0],[0.93,0,0],[0.58,1,0],[0.98,1,0],[0.08,1,0],[0.32,0,0],[0.4,1,0],[0.02,1,0],[0.47,0,0],[0.7,0,0]];labelBackgroundColor=none;rounded=0;html=1;whiteSpace=wrap;" parent="48" vertex="1">
      <mxGeometry y="3" width="520" height="60" as="geometry"/>
    </mxCell>
    <mxCell id="50" style="vsdxID=68;fillColor=none;gradientColor=none;strokeColor=none;strokeWidth=2;spacingTop=-2;spacingBottom=-2;spacingLeft=-2;spacingRight=-2;points=[[1,0.5,0]];labelBackgroundColor=none;rounded=0;html=1;whiteSpace=wrap;" parent="48" vertex="1">
      <mxGeometry x="474" width="21" height="21" as="geometry"/>
    </mxCell>
    <mxCell id="51" style="vsdxID=70;fillColor=#000000;gradientColor=none;shape=stencil(nZLLDsIgEEW/hj1lEN3X+h9NSoWI0FB8/b0giQoJRNnN48xkbuYi6FcxLhwRvDprTvwmJycQ7BEhUgtupfMRggFBPxvLj9Zc9BTzZQxkiM7mGjbc4xyhYYTgR0w37JUeIqqkLqOUltEta0VrB3TNKFTQHW1FWUVWdsAfaCrLB5/XzVKpd6f00Q7jdB+uCKqhmVF+31ojEz3Rxd+93La+FC0PwxM=);strokeColor=#000000;strokeWidth=2;spacingTop=-3;spacingBottom=-3;spacingLeft=-3;spacingRight=-3;points=[[0,0.5,0],[1,0.5,0]];labelBackgroundColor=none;rounded=0;html=1;whiteSpace=wrap;" parent="50" vertex="1">
      <mxGeometry width="21" height="21" as="geometry"/>
    </mxCell>
    <mxCell id="52" value="&lt;div style=&quot;font-size: 1px&quot;&gt;&lt;/div&gt;" style="text;vsdxID=68;fillColor=none;gradientColor=none;strokeColor=none;strokeWidth=2;spacingTop=-2;spacingBottom=-2;spacingLeft=-2;spacingRight=-2;points=[[1,0.5,0]];labelBackgroundColor=none;rounded=0;html=1;whiteSpace=wrap;verticalAlign=middle;align=center;overflow=width;;html=1;" parent="50" vertex="1">
      <mxGeometry x="9.19" y="15.7" width="2.82" height="19.76" as="geometry"/>
    </mxCell>
    <UserObject label="&lt;div style=&quot;font-size: 1px&quot;&gt;&lt;font style=&quot;font-size:11.29px;font-family:Arial;color:#000000;direction:ltr;letter-spacing:0px;line-height:120%;opacity:1&quot;&gt;CCSM3&lt;br/&gt;&lt;/font&gt;&lt;/div&gt;" tags="流程图" id="53">
      <mxCell style="verticalAlign=middle;align=center;overflow=width;vsdxID=71;fillColor=#ffffff;gradientColor=none;shape=stencil(nZBLDoAgDERP0z3SIyjew0SURgSD+Lu9kMZoXLhwN9O+tukAlrNpJg1SzDH4QW/URgNYgZTkjA4UkwJUgGXng+6DX1zLfmoymdXo17xh5zmRJ6Q42BWCfc2oJfdAr+Yv+AP9Cb7OJ3H/2JG1HNGz/84klThPVCc=);strokeColor=#000000;strokeWidth=2;spacingTop=-1;spacingBottom=-1;spacingLeft=-1;spacingRight=-1;points=[[1,0.5,0],[0.5,0.5,0],[0.5,0,0]];labelBackgroundColor=none;rounded=0;html=1;whiteSpace=wrap;" parent="1" vertex="1">
        <mxGeometry x="1314" y="771" width="52" height="37" as="geometry"/>
      </mxCell>
    </UserObject>
    <UserObject label="" tags="Background" id="54">
      <mxCell style="vsdxID=73;fillColor=none;gradientColor=none;points=[[0.39,1,0],[1,0.09,0],[5.06,-0.62,0]];labelBackgroundColor=none;rounded=0;strokeColor=none;html=1;whiteSpace=wrap;" parent="1" vertex="1">
        <mxGeometry x="1396" y="433" width="99" height="312" as="geometry"/>
      </mxCell>
    </UserObject>
    <mxCell id="55" value="&lt;div style=&quot;font-size: 1px&quot;&gt;&lt;font style=&quot;font-size:11.29px;font-family:Arial;color:#000000;direction:ltr;letter-spacing:0px;line-height:120%;opacity:1&quot;&gt;Infotainment ECU&lt;br/&gt;&lt;/font&gt;&lt;/div&gt;" style="verticalAlign=middle;align=center;overflow=width;vsdxID=74;fillColor=#d8d8d8;gradientColor=none;shape=stencil(nZBLDoAgDERP0z3SIyjew0SURgSD+Lu9kMZoXLhwN9O+tukAlrNpJg1SzDH4QW/URgNYgZTkjA4UkwJUgGXng+6DX1zLfmoymdXo17xh5zmRJ6Q42BWCfc2oJfdAr+Yv+AP9Cb7OJ3H/2JG1HNGz/84klThPVCc=);strokeColor=#00b050;strokeWidth=3;spacingTop=-1;spacingBottom=-1;spacingLeft=-1;spacingRight=-1;points=[[0,0.37,0],[1,0.5,0],[0.5,0.5,0],[0.5,0,0],[0,0.25,0],[0,0.78,0],[0,0.89,0],[0,0.41,0],[0,0.97,0],[0,0.31,0],[0,0.22,0],[0,0.09,0],[0,0.69,0],[0,0.5,0],[0,0.73,0],[0.25,1,0],[0.25,1,0],[0,0.19,0],[0,0.6,0]];labelBackgroundColor=none;rounded=0;html=1;whiteSpace=wrap;" parent="54" vertex="1">
      <mxGeometry x="3" width="96" height="312" as="geometry"/>
    </mxCell>
    <mxCell id="56" style="vsdxID=75;fillColor=none;gradientColor=none;points=[];labelBackgroundColor=none;rounded=0;strokeColor=none;html=1;whiteSpace=wrap;" parent="54" vertex="1">
      <mxGeometry x="76" y="293" width="14" height="10" as="geometry"/>
    </mxCell>
    <mxCell id="57" style="vsdxID=76;fillColor=none;gradientColor=none;strokeColor=none;points=[];labelBackgroundColor=none;rounded=0;html=1;whiteSpace=wrap;" parent="56" vertex="1">
      <mxGeometry x="3" width="10" height="10" as="geometry"/>
    </mxCell>
    <UserObject label="" tags="Background" id="153">
      <mxCell style="vsdxID=77;edgeStyle=none;startArrow=none;endArrow=none;startSize=5;endSize=5;strokeColor=#4bacc6;spacingTop=0;spacingBottom=0;spacingLeft=0;spacingRight=0;verticalAlign=middle;html=1;labelBackgroundColor=#ffffff;rounded=0;" parent="57" edge="1">
        <mxGeometry relative="1" as="geometry">
          <Array as="points"/>
          <mxPoint y="-1" as="sourcePoint"/>
          <mxPoint x="5" y="10" as="targetPoint"/>
        </mxGeometry>
      </mxCell>
    </UserObject>
    <UserObject label="" tags="Background" id="154">
      <mxCell style="vsdxID=78;edgeStyle=none;startArrow=none;endArrow=none;startSize=5;endSize=5;strokeColor=#4bacc6;spacingTop=0;spacingBottom=0;spacingLeft=0;spacingRight=0;verticalAlign=middle;html=1;labelBackgroundColor=#ffffff;rounded=0;" parent="57" edge="1">
        <mxGeometry relative="1" as="geometry">
          <mxPoint as="offset"/>
          <Array as="points"/>
          <mxPoint x="5" y="10" as="sourcePoint"/>
          <mxPoint x="10" y="10" as="targetPoint"/>
        </mxGeometry>
      </mxCell>
    </UserObject>
    <mxCell id="58" style="vsdxID=79;fillColor=none;gradientColor=none;strokeColor=none;flipH=1;points=[];labelBackgroundColor=none;rounded=0;html=1;whiteSpace=wrap;" parent="56" vertex="1">
      <mxGeometry width="10" height="10" as="geometry"/>
    </mxCell>
    <UserObject label="" tags="Background" id="155">
      <mxCell style="vsdxID=80;edgeStyle=none;startArrow=none;endArrow=none;startSize=5;endSize=5;strokeColor=#4bacc6;spacingTop=0;spacingBottom=0;spacingLeft=0;spacingRight=0;verticalAlign=middle;html=1;labelBackgroundColor=#ffffff;rounded=0;" parent="58" edge="1">
        <mxGeometry relative="1" as="geometry">
          <Array as="points"/>
          <mxPoint y="-1" as="sourcePoint"/>
          <mxPoint x="5" y="10" as="targetPoint"/>
        </mxGeometry>
      </mxCell>
    </UserObject>
    <UserObject label="" tags="Background" id="156">
      <mxCell style="vsdxID=81;edgeStyle=none;startArrow=none;endArrow=none;startSize=5;endSize=5;strokeColor=#4bacc6;spacingTop=0;spacingBottom=0;spacingLeft=0;spacingRight=0;verticalAlign=middle;html=1;labelBackgroundColor=#ffffff;rounded=0;" parent="58" edge="1">
        <mxGeometry relative="1" as="geometry">
          <mxPoint as="offset"/>
          <Array as="points"/>
          <mxPoint x="5" y="10" as="sourcePoint"/>
          <mxPoint x="10" y="10" as="targetPoint"/>
        </mxGeometry>
      </mxCell>
    </UserObject>
    <UserObject label="" tags="电气" id="59">
      <mxCell style="vsdxID=83;fillColor=none;gradientColor=none;strokeColor=none;strokeWidth=2;spacingTop=-2;spacingBottom=-2;spacingLeft=-2;spacingRight=-2;points=[[1,0.5,0]];labelBackgroundColor=none;rounded=0;html=1;whiteSpace=wrap;" parent="1" vertex="1">
        <mxGeometry x="1562" y="830" width="21" height="21" as="geometry"/>
      </mxCell>
    </UserObject>
    <mxCell id="60" style="vsdxID=85;fillColor=#000000;gradientColor=none;shape=stencil(nZLLDsIgEEW/hj1lEN3X+h9NSoWI0FB8/b0giQoJRNnN48xkbuYi6FcxLhwRvDprTvwmJycQ7BEhUgtupfMRggFBPxvLj9Zc9BTzZQxkiM7mGjbc4xyhYYTgR0w37JUeIqqkLqOUltEta0VrB3TNKFTQHW1FWUVWdsAfaCrLB5/XzVKpd6f00Q7jdB+uCKqhmVF+31ojEz3Rxd+93La+FC0PwxM=);strokeColor=#000000;strokeWidth=2;spacingTop=-3;spacingBottom=-3;spacingLeft=-3;spacingRight=-3;points=[[0,0.5,0],[1,0.5,0]];labelBackgroundColor=none;rounded=0;html=1;whiteSpace=wrap;" parent="59" vertex="1">
      <mxGeometry width="21" height="21" as="geometry"/>
    </mxCell>
    <mxCell id="61" value="&lt;div style=&quot;font-size: 1px&quot;&gt;&lt;/div&gt;" style="text;vsdxID=83;fillColor=none;gradientColor=none;strokeColor=none;strokeWidth=2;spacingTop=-2;spacingBottom=-2;spacingLeft=-2;spacingRight=-2;points=[[1,0.5,0]];labelBackgroundColor=none;rounded=0;html=1;whiteSpace=wrap;verticalAlign=middle;align=center;overflow=width;;html=1;" parent="59" vertex="1">
      <mxGeometry x="9.19" y="15.7" width="2.82" height="19.76" as="geometry"/>
    </mxCell>
    <UserObject label="" tags="电气" id="62">
      <mxCell style="vsdxID=86;fillColor=none;gradientColor=none;strokeColor=none;strokeWidth=2;spacingTop=-2;spacingBottom=-2;spacingLeft=-2;spacingRight=-2;points=[[1,0.5,0]];labelBackgroundColor=none;rounded=0;html=1;whiteSpace=wrap;" parent="1" vertex="1">
        <mxGeometry x="1556" y="782" width="21" height="21" as="geometry"/>
      </mxCell>
    </UserObject>
    <mxCell id="63" style="vsdxID=88;fillColor=#000000;gradientColor=none;shape=stencil(nZLLDsIgEEW/hj1lEN3X+h9NSoWI0FB8/b0giQoJRNnN48xkbuYi6FcxLhwRvDprTvwmJycQ7BEhUgtupfMRggFBPxvLj9Zc9BTzZQxkiM7mGjbc4xyhYYTgR0w37JUeIqqkLqOUltEta0VrB3TNKFTQHW1FWUVWdsAfaCrLB5/XzVKpd6f00Q7jdB+uCKqhmVF+31ojEz3Rxd+93La+FC0PwxM=);strokeColor=#000000;strokeWidth=2;spacingTop=-3;spacingBottom=-3;spacingLeft=-3;spacingRight=-3;points=[[0,0.5,0],[1,0.5,0]];labelBackgroundColor=none;rounded=0;html=1;whiteSpace=wrap;" parent="62" vertex="1">
      <mxGeometry width="21" height="21" as="geometry"/>
    </mxCell>
    <mxCell id="64" value="&lt;div style=&quot;font-size: 1px&quot;&gt;&lt;/div&gt;" style="text;vsdxID=86;fillColor=none;gradientColor=none;strokeColor=none;strokeWidth=2;spacingTop=-2;spacingBottom=-2;spacingLeft=-2;spacingRight=-2;points=[[1,0.5,0]];labelBackgroundColor=none;rounded=0;html=1;whiteSpace=wrap;verticalAlign=middle;align=center;overflow=width;;html=1;" parent="62" vertex="1">
      <mxGeometry x="9.19" y="15.7" width="2.82" height="19.76" as="geometry"/>
    </mxCell>
    <UserObject label="" tags="电气" id="65">
      <mxCell style="vsdxID=89;fillColor=none;gradientColor=none;strokeColor=none;strokeWidth=2;spacingTop=-2;spacingBottom=-2;spacingLeft=-2;spacingRight=-2;points=[[1,0.5,0]];labelBackgroundColor=none;rounded=0;html=1;whiteSpace=wrap;" parent="1" vertex="1">
        <mxGeometry x="1625" y="783" width="21" height="21" as="geometry"/>
      </mxCell>
    </UserObject>
    <mxCell id="66" style="vsdxID=91;fillColor=#000000;gradientColor=none;shape=stencil(nZLLDsIgEEW/hj1lEN3X+h9NSoWI0FB8/b0giQoJRNnN48xkbuYi6FcxLhwRvDprTvwmJycQ7BEhUgtupfMRggFBPxvLj9Zc9BTzZQxkiM7mGjbc4xyhYYTgR0w37JUeIqqkLqOUltEta0VrB3TNKFTQHW1FWUVWdsAfaCrLB5/XzVKpd6f00Q7jdB+uCKqhmVF+31ojEz3Rxd+93La+FC0PwxM=);strokeColor=#000000;strokeWidth=2;spacingTop=-3;spacingBottom=-3;spacingLeft=-3;spacingRight=-3;points=[[0,0.5,0],[1,0.5,0]];labelBackgroundColor=none;rounded=0;html=1;whiteSpace=wrap;" parent="65" vertex="1">
      <mxGeometry width="21" height="21" as="geometry"/>
    </mxCell>
    <mxCell id="67" value="&lt;div style=&quot;font-size: 1px&quot;&gt;&lt;/div&gt;" style="text;vsdxID=89;fillColor=none;gradientColor=none;strokeColor=none;strokeWidth=2;spacingTop=-2;spacingBottom=-2;spacingLeft=-2;spacingRight=-2;points=[[1,0.5,0]];labelBackgroundColor=none;rounded=0;html=1;whiteSpace=wrap;verticalAlign=middle;align=center;overflow=width;;html=1;" parent="65" vertex="1">
      <mxGeometry x="9.19" y="15.7" width="2.82" height="19.76" as="geometry"/>
    </mxCell>
    <UserObject label="" tags="电气" id="68">
      <mxCell style="vsdxID=92;rotation=90;fillColor=none;gradientColor=none;strokeColor=none;strokeWidth=2;spacingTop=-2;spacingBottom=-2;spacingLeft=-2;spacingRight=-2;points=[[1,0.5,0]];labelBackgroundColor=none;rounded=0;html=1;whiteSpace=wrap;" parent="1" vertex="1">
        <mxGeometry x="1644" y="816" width="21" height="21" as="geometry"/>
      </mxCell>
    </UserObject>
    <mxCell id="69" style="vsdxID=94;rotation=90;fillColor=#000000;gradientColor=none;shape=stencil(nZLLDsIgEEW/hj1lEN3X+h9NSoWI0FB8/b0giQoJRNnN48xkbuYi6FcxLhwRvDprTvwmJycQ7BEhUgtupfMRggFBPxvLj9Zc9BTzZQxkiM7mGjbc4xyhYYTgR0w37JUeIqqkLqOUltEta0VrB3TNKFTQHW1FWUVWdsAfaCrLB5/XzVKpd6f00Q7jdB+uCKqhmVF+31ojEz3Rxd+93La+FC0PwxM=);strokeColor=#000000;strokeWidth=2;spacingTop=-3;spacingBottom=-3;spacingLeft=-3;spacingRight=-3;points=[[0,0.5,0],[1,0.5,0]];labelBackgroundColor=none;rounded=0;html=1;whiteSpace=wrap;" parent="68" vertex="1">
      <mxGeometry width="21" height="21" as="geometry"/>
    </mxCell>
    <mxCell id="70" value="&lt;div style=&quot;font-size: 1px&quot;&gt;&lt;/div&gt;" style="text;vsdxID=92;rotation=0.05;fillColor=none;gradientColor=none;strokeColor=none;strokeWidth=2;spacingTop=-2;spacingBottom=-2;spacingLeft=-2;spacingRight=-2;points=[[1,0.5,0]];labelBackgroundColor=none;rounded=0;html=1;whiteSpace=wrap;verticalAlign=middle;align=center;overflow=width;;html=1;" parent="68" vertex="1">
      <mxGeometry x="9" y="-6" width="2.82" height="19.76" as="geometry"/>
    </mxCell>
    <UserObject label="&lt;div style=&quot;font-size: 1px&quot;&gt;&lt;font style=&quot;font-size:11.29px;font-family:Arial;color:#000000;direction:ltr;letter-spacing:0px;line-height:120%;opacity:1&quot;&gt;CSD&lt;br/&gt;&lt;/font&gt;&lt;/div&gt;" tags="流程图" id="71">
      <mxCell style="verticalAlign=middle;align=center;overflow=width;vsdxID=97;fillColor=#ffffff;gradientColor=none;shape=stencil(nZBLDoAgDERP0z3SIyjew0SURgSD+Lu9kMZoXLhwN9O+tukAlrNpJg1SzDH4QW/URgNYgZTkjA4UkwJUgGXng+6DX1zLfmoymdXo17xh5zmRJ6Q42BWCfc2oJfdAr+Yv+AP9Cb7OJ3H/2JG1HNGz/84klThPVCc=);strokeColor=#000000;strokeWidth=2;spacingTop=-1;spacingBottom=-1;spacingLeft=-1;spacingRight=-1;points=[[1,0.5,0],[0.5,0.5,0],[0.5,0,0]];labelBackgroundColor=none;rounded=0;html=1;whiteSpace=wrap;" parent="1" vertex="1">
        <mxGeometry x="1045" y="569" width="52" height="37" as="geometry"/>
      </mxCell>
    </UserObject>
    <UserObject label="&lt;div style=&quot;font-size: 1px&quot;&gt;&lt;font style=&quot;font-size:11.29px;font-family:Arial;color:#000000;direction:ltr;letter-spacing:0px;line-height:120%;opacity:1&quot;&gt;RFR&lt;br/&gt;&lt;/font&gt;&lt;/div&gt;" tags="流程图" id="72">
      <mxCell style="verticalAlign=middle;align=center;overflow=width;vsdxID=104;fillColor=#ffffff;gradientColor=none;shape=stencil(nZBLDoAgDERP0z3SIyjew0SURgSD+Lu9kMZoXLhwN9O+tukAlrNpJg1SzDH4QW/URgNYgZTkjA4UkwJUgGXng+6DX1zLfmoymdXo17xh5zmRJ6Q42BWCfc2oJfdAr+Yv+AP9Cb7OJ3H/2JG1HNGz/84klThPVCc=);strokeColor=#000000;strokeWidth=2;spacingTop=-1;spacingBottom=-1;spacingLeft=-1;spacingRight=-1;points=[[1,0.5,0],[0.5,0.5,0],[0.5,0,0]];labelBackgroundColor=none;rounded=0;html=1;whiteSpace=wrap;" parent="1" vertex="1">
        <mxGeometry x="1867" y="714" width="52" height="37" as="geometry"/>
      </mxCell>
    </UserObject>
    <UserObject label="&lt;div style=&quot;font-size: 1px&quot;&gt;&lt;font style=&quot;font-size:11.29px;font-family:Arial;color:#000000;direction:ltr;letter-spacing:0px;line-height:120%;opacity:1&quot;&gt;ALM*16&lt;br/&gt;&lt;/font&gt;&lt;/div&gt;" tags="流程图" id="73">
      <mxCell style="verticalAlign=middle;align=center;overflow=width;vsdxID=107;fillColor=#ffffff;gradientColor=none;shape=stencil(nZBLDoAgDERP0z3SIyjew0SURgSD+Lu9kMZoXLhwN9O+tukAlrNpJg1SzDH4QW/URgNYgZTkjA4UkwJUgGXng+6DX1zLfmoymdXo17xh5zmRJ6Q42BWCfc2oJfdAr+Yv+AP9Cb7OJ3H/2JG1HNGz/84klThPVCc=);strokeColor=#000000;strokeWidth=2;spacingTop=-1;spacingBottom=-1;spacingLeft=-1;spacingRight=-1;points=[[1,0.5,0],[0.5,0.5,0],[0.5,0,0]];labelBackgroundColor=none;rounded=0;html=1;whiteSpace=wrap;" parent="1" vertex="1">
        <mxGeometry x="2039" y="563" width="52" height="37" as="geometry"/>
      </mxCell>
    </UserObject>
    <UserObject label="&lt;div style=&quot;font-size: 1px&quot;&gt;&lt;font style=&quot;font-size:11.29px;font-family:Arial;color:#000000;direction:ltr;letter-spacing:0px;line-height:120%;opacity:1&quot;&gt;NKR3&lt;br/&gt;&lt;/font&gt;&lt;/div&gt;" tags="流程图" id="74">
      <mxCell style="verticalAlign=middle;align=center;overflow=width;vsdxID=109;fillColor=#ffffff;gradientColor=none;shape=stencil(nZBLDoAgDERP0z3SIyjew0SURgSD+Lu9kMZoXLhwN9O+tukAlrNpJg1SzDH4QW/URgNYgZTkjA4UkwJUgGXng+6DX1zLfmoymdXo17xh5zmRJ6Q42BWCfc2oJfdAr+Yv+AP9Cb7OJ3H/2JG1HNGz/84klThPVCc=);strokeColor=#000000;strokeWidth=2;spacingTop=-1;spacingBottom=-1;spacingLeft=-1;spacingRight=-1;points=[[1,0.5,0],[0.5,0.5,0],[0.5,0,0]];labelBackgroundColor=none;rounded=0;html=1;whiteSpace=wrap;" parent="1" vertex="1">
        <mxGeometry x="1953" y="607" width="52" height="37" as="geometry"/>
      </mxCell>
    </UserObject>
    <UserObject label="" tags="Background" id="75">
      <mxCell style="vsdxID=112;fillColor=none;gradientColor=none;points=[];labelBackgroundColor=none;rounded=0;strokeColor=none;html=1;whiteSpace=wrap;" parent="1" vertex="1">
        <mxGeometry x="2286" y="444" width="21" height="21" as="geometry"/>
      </mxCell>
    </UserObject>
    <mxCell id="76" style="vsdxID=113;fillColor=none;gradientColor=none;strokeColor=none;strokeWidth=2;spacingTop=-2;spacingBottom=-2;spacingLeft=-2;spacingRight=-2;points=[[1,0.5,0]];labelBackgroundColor=none;rounded=0;html=1;whiteSpace=wrap;" parent="75" vertex="1">
      <mxGeometry width="21" height="21" as="geometry"/>
    </mxCell>
    <mxCell id="77" style="vsdxID=115;fillColor=#000000;gradientColor=none;shape=stencil(nZLLDsIgEEW/hj1lEN3X+h9NSoWI0FB8/b0giQoJRNnN48xkbuYi6FcxLhwRvDprTvwmJycQ7BEhUgtupfMRggFBPxvLj9Zc9BTzZQxkiM7mGjbc4xyhYYTgR0w37JUeIqqkLqOUltEta0VrB3TNKFTQHW1FWUVWdsAfaCrLB5/XzVKpd6f00Q7jdB+uCKqhmVF+31ojEz3Rxd+93La+FC0PwxM=);strokeColor=#000000;strokeWidth=2;spacingTop=-3;spacingBottom=-3;spacingLeft=-3;spacingRight=-3;points=[[0,0.5,0],[1,0.5,0]];labelBackgroundColor=none;rounded=0;html=1;whiteSpace=wrap;" parent="76" vertex="1">
      <mxGeometry width="21" height="21" as="geometry"/>
    </mxCell>
    <mxCell id="78" value="&lt;div style=&quot;font-size: 1px&quot;&gt;&lt;/div&gt;" style="text;vsdxID=113;fillColor=none;gradientColor=none;strokeColor=none;strokeWidth=2;spacingTop=-2;spacingBottom=-2;spacingLeft=-2;spacingRight=-2;points=[[1,0.5,0]];labelBackgroundColor=none;rounded=0;html=1;whiteSpace=wrap;verticalAlign=middle;align=center;overflow=width;;html=1;" parent="76" vertex="1">
      <mxGeometry x="9.19" y="15.7" width="2.82" height="19.76" as="geometry"/>
    </mxCell>
    <mxCell id="79" style="vsdxID=116;fillColor=none;gradientColor=none;points=[];labelBackgroundColor=none;rounded=0;strokeColor=none;html=1;whiteSpace=wrap;" parent="75" vertex="1">
      <mxGeometry x="4" y="8" width="11" height="3" as="geometry"/>
    </mxCell>
    <mxCell id="80" style="vsdxID=117;fillColor=#000000;gradientColor=none;shape=stencil(nZBLDoAgDERP0z3SIyjew0SURgSD+Lu9kMZoXLhwN9O+tukAlrNpJg1SzDH4QW/URgNYgZTkjA4UkwJUgGXng+6DX1zLfmoymdXo17xh5zmRJ6Q42BWCfc2oJfdAr+Yv+AP9Cb7OJ3H/2JG1HNGz/84klThPVCc=);points=[];labelBackgroundColor=none;rounded=0;html=1;whiteSpace=wrap;" parent="79" vertex="1">
      <mxGeometry width="11" height="3" as="geometry"/>
    </mxCell>
    <UserObject label="" tags="Background" id="81">
      <mxCell style="vsdxID=118;rotation=90;fillColor=none;gradientColor=none;points=[];labelBackgroundColor=none;rounded=0;strokeColor=none;html=1;whiteSpace=wrap;" parent="1" vertex="1">
        <mxGeometry x="1848" y="409" width="21" height="21" as="geometry"/>
      </mxCell>
    </UserObject>
    <mxCell id="82" style="vsdxID=119;rotation=90;fillColor=none;gradientColor=none;strokeColor=none;strokeWidth=2;spacingTop=-2;spacingBottom=-2;spacingLeft=-2;spacingRight=-2;points=[[1,0.5,0]];labelBackgroundColor=none;rounded=0;html=1;whiteSpace=wrap;" parent="81" vertex="1">
      <mxGeometry width="21" height="21" as="geometry"/>
    </mxCell>
    <mxCell id="83" style="vsdxID=121;rotation=90;fillColor=#000000;gradientColor=none;shape=stencil(nZLLDsIgEEW/hj1lEN3X+h9NSoWI0FB8/b0giQoJRNnN48xkbuYi6FcxLhwRvDprTvwmJycQ7BEhUgtupfMRggFBPxvLj9Zc9BTzZQxkiM7mGjbc4xyhYYTgR0w37JUeIqqkLqOUltEta0VrB3TNKFTQHW1FWUVWdsAfaCrLB5/XzVKpd6f00Q7jdB+uCKqhmVF+31ojEz3Rxd+93La+FC0PwxM=);strokeColor=#000000;strokeWidth=2;spacingTop=-3;spacingBottom=-3;spacingLeft=-3;spacingRight=-3;points=[[0,0.5,0],[1,0.5,0]];labelBackgroundColor=none;rounded=0;html=1;whiteSpace=wrap;" parent="82" vertex="1">
      <mxGeometry width="21" height="21" as="geometry"/>
    </mxCell>
    <mxCell id="84" value="&lt;div style=&quot;font-size: 1px&quot;&gt;&lt;/div&gt;" style="text;vsdxID=119;rotation=90;fillColor=none;gradientColor=none;strokeColor=none;strokeWidth=2;spacingTop=-2;spacingBottom=-2;spacingLeft=-2;spacingRight=-2;points=[[1,0.5,0]];labelBackgroundColor=none;rounded=0;html=1;whiteSpace=wrap;verticalAlign=middle;align=center;overflow=width;;html=1;" parent="82" vertex="1">
      <mxGeometry x="9" y="-14" width="2.82" height="19.76" as="geometry"/>
    </mxCell>
    <mxCell id="85" style="vsdxID=122;rotation=90;fillColor=none;gradientColor=none;points=[];labelBackgroundColor=none;rounded=0;strokeColor=none;html=1;whiteSpace=wrap;" parent="81" vertex="1">
      <mxGeometry x="6" y="8" width="11" height="3" as="geometry"/>
    </mxCell>
    <mxCell id="86" style="vsdxID=123;rotation=90;fillColor=#000000;gradientColor=none;shape=stencil(nZBLDoAgDERP0z3SIyjew0SURgSD+Lu9kMZoXLhwN9O+tukAlrNpJg1SzDH4QW/URgNYgZTkjA4UkwJUgGXng+6DX1zLfmoymdXo17xh5zmRJ6Q42BWCfc2oJfdAr+Yv+AP9Cb7OJ3H/2JG1HNGz/84klThPVCc=);points=[];labelBackgroundColor=none;rounded=0;html=1;whiteSpace=wrap;" parent="85" vertex="1">
      <mxGeometry width="11" height="3" as="geometry"/>
    </mxCell>
    <UserObject label="" tags="Background" id="87">
      <mxCell style="vsdxID=124;rotation=90;fillColor=none;gradientColor=none;points=[];labelBackgroundColor=none;rounded=0;strokeColor=none;html=1;whiteSpace=wrap;" parent="1" vertex="1">
        <mxGeometry x="1315" y="383" width="21" height="21" as="geometry"/>
      </mxCell>
    </UserObject>
    <mxCell id="88" style="vsdxID=125;rotation=90;fillColor=none;gradientColor=none;strokeColor=none;strokeWidth=2;spacingTop=-2;spacingBottom=-2;spacingLeft=-2;spacingRight=-2;points=[[1,0.5,0]];labelBackgroundColor=none;rounded=0;html=1;whiteSpace=wrap;" parent="87" vertex="1">
      <mxGeometry width="21" height="21" as="geometry"/>
    </mxCell>
    <mxCell id="89" style="vsdxID=127;rotation=90;fillColor=#000000;gradientColor=none;shape=stencil(nZLLDsIgEEW/hj1lEN3X+h9NSoWI0FB8/b0giQoJRNnN48xkbuYi6FcxLhwRvDprTvwmJycQ7BEhUgtupfMRggFBPxvLj9Zc9BTzZQxkiM7mGjbc4xyhYYTgR0w37JUeIqqkLqOUltEta0VrB3TNKFTQHW1FWUVWdsAfaCrLB5/XzVKpd6f00Q7jdB+uCKqhmVF+31ojEz3Rxd+93La+FC0PwxM=);strokeColor=#000000;strokeWidth=2;spacingTop=-3;spacingBottom=-3;spacingLeft=-3;spacingRight=-3;points=[[0,0.5,0],[1,0.5,0]];labelBackgroundColor=none;rounded=0;html=1;whiteSpace=wrap;" parent="88" vertex="1">
      <mxGeometry width="21" height="21" as="geometry"/>
    </mxCell>
    <mxCell id="90" value="&lt;div style=&quot;font-size: 1px&quot;&gt;&lt;/div&gt;" style="text;vsdxID=125;rotation=90;fillColor=none;gradientColor=none;strokeColor=none;strokeWidth=2;spacingTop=-2;spacingBottom=-2;spacingLeft=-2;spacingRight=-2;points=[[1,0.5,0]];labelBackgroundColor=none;rounded=0;html=1;whiteSpace=wrap;verticalAlign=middle;align=center;overflow=width;;html=1;" parent="88" vertex="1">
      <mxGeometry x="9" y="-14" width="2.82" height="19.76" as="geometry"/>
    </mxCell>
    <mxCell id="91" style="vsdxID=128;rotation=90;fillColor=none;gradientColor=none;points=[];labelBackgroundColor=none;rounded=0;strokeColor=none;html=1;whiteSpace=wrap;" parent="87" vertex="1">
      <mxGeometry x="6" y="8" width="11" height="3" as="geometry"/>
    </mxCell>
    <mxCell id="92" style="vsdxID=129;rotation=90;fillColor=#000000;gradientColor=none;shape=stencil(nZBLDoAgDERP0z3SIyjew0SURgSD+Lu9kMZoXLhwN9O+tukAlrNpJg1SzDH4QW/URgNYgZTkjA4UkwJUgGXng+6DX1zLfmoymdXo17xh5zmRJ6Q42BWCfc2oJfdAr+Yv+AP9Cb7OJ3H/2JG1HNGz/84klThPVCc=);points=[];labelBackgroundColor=none;rounded=0;html=1;whiteSpace=wrap;" parent="91" vertex="1">
      <mxGeometry width="11" height="3" as="geometry"/>
    </mxCell>
    <UserObject label="" tags="Background" id="93">
      <mxCell style="vsdxID=130;rotation=90;fillColor=none;gradientColor=none;points=[];labelBackgroundColor=none;rounded=0;strokeColor=none;html=1;whiteSpace=wrap;" parent="1" vertex="1">
        <mxGeometry x="1644" y="816" width="21" height="21" as="geometry"/>
      </mxCell>
    </UserObject>
    <mxCell id="94" style="vsdxID=131;rotation=90;fillColor=none;gradientColor=none;strokeColor=none;strokeWidth=2;spacingTop=-2;spacingBottom=-2;spacingLeft=-2;spacingRight=-2;points=[[1,0.5,0]];labelBackgroundColor=none;rounded=0;html=1;whiteSpace=wrap;" parent="93" vertex="1">
      <mxGeometry width="21" height="21" as="geometry"/>
    </mxCell>
    <mxCell id="95" style="vsdxID=133;rotation=90;fillColor=#000000;gradientColor=none;shape=stencil(nZLLDsIgEEW/hj1lEN3X+h9NSoWI0FB8/b0giQoJRNnN48xkbuYi6FcxLhwRvDprTvwmJycQ7BEhUgtupfMRggFBPxvLj9Zc9BTzZQxkiM7mGjbc4xyhYYTgR0w37JUeIqqkLqOUltEta0VrB3TNKFTQHW1FWUVWdsAfaCrLB5/XzVKpd6f00Q7jdB+uCKqhmVF+31ojEz3Rxd+93La+FC0PwxM=);strokeColor=#000000;strokeWidth=2;spacingTop=-3;spacingBottom=-3;spacingLeft=-3;spacingRight=-3;points=[[0,0.5,0],[1,0.5,0]];labelBackgroundColor=none;rounded=0;html=1;whiteSpace=wrap;" parent="94" vertex="1">
      <mxGeometry width="21" height="21" as="geometry"/>
    </mxCell>
    <mxCell id="96" value="&lt;div style=&quot;font-size: 1px&quot;&gt;&lt;/div&gt;" style="text;vsdxID=131;rotation=90;fillColor=none;gradientColor=none;strokeColor=none;strokeWidth=2;spacingTop=-2;spacingBottom=-2;spacingLeft=-2;spacingRight=-2;points=[[1,0.5,0]];labelBackgroundColor=none;rounded=0;html=1;whiteSpace=wrap;verticalAlign=middle;align=center;overflow=width;;html=1;" parent="94" vertex="1">
      <mxGeometry x="9" y="-14" width="2.82" height="19.76" as="geometry"/>
    </mxCell>
    <mxCell id="97" style="vsdxID=134;rotation=90;fillColor=none;gradientColor=none;points=[];labelBackgroundColor=none;rounded=0;strokeColor=none;html=1;whiteSpace=wrap;" parent="93" vertex="1">
      <mxGeometry x="6" y="8" width="11" height="3" as="geometry"/>
    </mxCell>
    <mxCell id="98" style="vsdxID=135;rotation=90;fillColor=#000000;gradientColor=none;shape=stencil(nZBLDoAgDERP0z3SIyjew0SURgSD+Lu9kMZoXLhwN9O+tukAlrNpJg1SzDH4QW/URgNYgZTkjA4UkwJUgGXng+6DX1zLfmoymdXo17xh5zmRJ6Q42BWCfc2oJfdAr+Yv+AP9Cb7OJ3H/2JG1HNGz/84klThPVCc=);points=[];labelBackgroundColor=none;rounded=0;html=1;whiteSpace=wrap;" parent="97" vertex="1">
      <mxGeometry width="11" height="3" as="geometry"/>
    </mxCell>
    <UserObject label="" tags="Background" id="99">
      <mxCell style="vsdxID=136;fillColor=none;gradientColor=none;points=[];labelBackgroundColor=none;rounded=0;strokeColor=none;html=1;whiteSpace=wrap;" parent="1" vertex="1">
        <mxGeometry x="1625" y="783" width="21" height="21" as="geometry"/>
      </mxCell>
    </UserObject>
    <mxCell id="100" style="vsdxID=137;fillColor=none;gradientColor=none;strokeColor=none;strokeWidth=2;spacingTop=-2;spacingBottom=-2;spacingLeft=-2;spacingRight=-2;points=[[1,0.5,0]];labelBackgroundColor=none;rounded=0;html=1;whiteSpace=wrap;" parent="99" vertex="1">
      <mxGeometry width="21" height="21" as="geometry"/>
    </mxCell>
    <mxCell id="101" style="vsdxID=139;fillColor=#000000;gradientColor=none;shape=stencil(nZLLDsIgEEW/hj1lEN3X+h9NSoWI0FB8/b0giQoJRNnN48xkbuYi6FcxLhwRvDprTvwmJycQ7BEhUgtupfMRggFBPxvLj9Zc9BTzZQxkiM7mGjbc4xyhYYTgR0w37JUeIqqkLqOUltEta0VrB3TNKFTQHW1FWUVWdsAfaCrLB5/XzVKpd6f00Q7jdB+uCKqhmVF+31ojEz3Rxd+93La+FC0PwxM=);strokeColor=#000000;strokeWidth=2;spacingTop=-3;spacingBottom=-3;spacingLeft=-3;spacingRight=-3;points=[[0,0.5,0],[1,0.5,0]];labelBackgroundColor=none;rounded=0;html=1;whiteSpace=wrap;" parent="100" vertex="1">
      <mxGeometry width="21" height="21" as="geometry"/>
    </mxCell>
    <mxCell id="102" value="&lt;div style=&quot;font-size: 1px&quot;&gt;&lt;/div&gt;" style="text;vsdxID=137;fillColor=none;gradientColor=none;strokeColor=none;strokeWidth=2;spacingTop=-2;spacingBottom=-2;spacingLeft=-2;spacingRight=-2;points=[[1,0.5,0]];labelBackgroundColor=none;rounded=0;html=1;whiteSpace=wrap;verticalAlign=middle;align=center;overflow=width;;html=1;" parent="100" vertex="1">
      <mxGeometry x="9.19" y="15.7" width="2.82" height="19.76" as="geometry"/>
    </mxCell>
    <mxCell id="103" style="vsdxID=140;fillColor=none;gradientColor=none;points=[];labelBackgroundColor=none;rounded=0;strokeColor=none;html=1;whiteSpace=wrap;" parent="99" vertex="1">
      <mxGeometry x="4" y="8" width="11" height="3" as="geometry"/>
    </mxCell>
    <mxCell id="104" style="vsdxID=141;fillColor=#000000;gradientColor=none;shape=stencil(nZBLDoAgDERP0z3SIyjew0SURgSD+Lu9kMZoXLhwN9O+tukAlrNpJg1SzDH4QW/URgNYgZTkjA4UkwJUgGXng+6DX1zLfmoymdXo17xh5zmRJ6Q42BWCfc2oJfdAr+Yv+AP9Cb7OJ3H/2JG1HNGz/84klThPVCc=);points=[];labelBackgroundColor=none;rounded=0;html=1;whiteSpace=wrap;" parent="103" vertex="1">
      <mxGeometry width="11" height="3" as="geometry"/>
    </mxCell>
    <UserObject label="" tags="Background" id="105">
      <mxCell style="vsdxID=142;fillColor=none;gradientColor=none;points=[];labelBackgroundColor=none;rounded=0;strokeColor=none;html=1;whiteSpace=wrap;" parent="1" vertex="1">
        <mxGeometry x="1556" y="782" width="21" height="21" as="geometry"/>
      </mxCell>
    </UserObject>
    <mxCell id="106" style="vsdxID=143;fillColor=none;gradientColor=none;strokeColor=none;strokeWidth=2;spacingTop=-2;spacingBottom=-2;spacingLeft=-2;spacingRight=-2;points=[[1,0.5,0]];labelBackgroundColor=none;rounded=0;html=1;whiteSpace=wrap;" parent="105" vertex="1">
      <mxGeometry width="21" height="21" as="geometry"/>
    </mxCell>
    <mxCell id="107" style="vsdxID=145;fillColor=#000000;gradientColor=none;shape=stencil(nZLLDsIgEEW/hj1lEN3X+h9NSoWI0FB8/b0giQoJRNnN48xkbuYi6FcxLhwRvDprTvwmJycQ7BEhUgtupfMRggFBPxvLj9Zc9BTzZQxkiM7mGjbc4xyhYYTgR0w37JUeIqqkLqOUltEta0VrB3TNKFTQHW1FWUVWdsAfaCrLB5/XzVKpd6f00Q7jdB+uCKqhmVF+31ojEz3Rxd+93La+FC0PwxM=);strokeColor=#000000;strokeWidth=2;spacingTop=-3;spacingBottom=-3;spacingLeft=-3;spacingRight=-3;points=[[0,0.5,0],[1,0.5,0]];labelBackgroundColor=none;rounded=0;html=1;whiteSpace=wrap;" parent="106" vertex="1">
      <mxGeometry width="21" height="21" as="geometry"/>
    </mxCell>
    <mxCell id="108" value="&lt;div style=&quot;font-size: 1px&quot;&gt;&lt;/div&gt;" style="text;vsdxID=143;fillColor=none;gradientColor=none;strokeColor=none;strokeWidth=2;spacingTop=-2;spacingBottom=-2;spacingLeft=-2;spacingRight=-2;points=[[1,0.5,0]];labelBackgroundColor=none;rounded=0;html=1;whiteSpace=wrap;verticalAlign=middle;align=center;overflow=width;;html=1;" parent="106" vertex="1">
      <mxGeometry x="9.19" y="15.7" width="2.82" height="19.76" as="geometry"/>
    </mxCell>
    <mxCell id="109" style="vsdxID=146;fillColor=none;gradientColor=none;points=[];labelBackgroundColor=none;rounded=0;strokeColor=none;html=1;whiteSpace=wrap;" parent="105" vertex="1">
      <mxGeometry x="4" y="8" width="11" height="3" as="geometry"/>
    </mxCell>
    <mxCell id="110" style="vsdxID=147;fillColor=#000000;gradientColor=none;shape=stencil(nZBLDoAgDERP0z3SIyjew0SURgSD+Lu9kMZoXLhwN9O+tukAlrNpJg1SzDH4QW/URgNYgZTkjA4UkwJUgGXng+6DX1zLfmoymdXo17xh5zmRJ6Q42BWCfc2oJfdAr+Yv+AP9Cb7OJ3H/2JG1HNGz/84klThPVCc=);points=[];labelBackgroundColor=none;rounded=0;html=1;whiteSpace=wrap;" parent="109" vertex="1">
      <mxGeometry width="11" height="3" as="geometry"/>
    </mxCell>
    <UserObject label="" tags="Background" id="111">
      <mxCell style="vsdxID=148;fillColor=none;gradientColor=none;points=[];labelBackgroundColor=none;rounded=0;strokeColor=none;html=1;whiteSpace=wrap;" parent="1" vertex="1">
        <mxGeometry x="1561" y="830" width="21" height="21" as="geometry"/>
      </mxCell>
    </UserObject>
    <mxCell id="112" style="vsdxID=149;fillColor=none;gradientColor=none;strokeColor=none;strokeWidth=2;spacingTop=-2;spacingBottom=-2;spacingLeft=-2;spacingRight=-2;points=[[1,0.5,0]];labelBackgroundColor=none;rounded=0;html=1;whiteSpace=wrap;" parent="111" vertex="1">
      <mxGeometry width="21" height="21" as="geometry"/>
    </mxCell>
    <mxCell id="113" style="vsdxID=151;fillColor=#000000;gradientColor=none;shape=stencil(nZLLDsIgEEW/hj1lEN3X+h9NSoWI0FB8/b0giQoJRNnN48xkbuYi6FcxLhwRvDprTvwmJycQ7BEhUgtupfMRggFBPxvLj9Zc9BTzZQxkiM7mGjbc4xyhYYTgR0w37JUeIqqkLqOUltEta0VrB3TNKFTQHW1FWUVWdsAfaCrLB5/XzVKpd6f00Q7jdB+uCKqhmVF+31ojEz3Rxd+93La+FC0PwxM=);strokeColor=#000000;strokeWidth=2;spacingTop=-3;spacingBottom=-3;spacingLeft=-3;spacingRight=-3;points=[[0,0.5,0],[1,0.5,0]];labelBackgroundColor=none;rounded=0;html=1;whiteSpace=wrap;" parent="112" vertex="1">
      <mxGeometry width="21" height="21" as="geometry"/>
    </mxCell>
    <mxCell id="114" value="&lt;div style=&quot;font-size: 1px&quot;&gt;&lt;/div&gt;" style="text;vsdxID=149;fillColor=none;gradientColor=none;strokeColor=none;strokeWidth=2;spacingTop=-2;spacingBottom=-2;spacingLeft=-2;spacingRight=-2;points=[[1,0.5,0]];labelBackgroundColor=none;rounded=0;html=1;whiteSpace=wrap;verticalAlign=middle;align=center;overflow=width;;html=1;" parent="112" vertex="1">
      <mxGeometry x="9.19" y="15.7" width="2.82" height="19.76" as="geometry"/>
    </mxCell>
    <mxCell id="115" style="vsdxID=152;fillColor=none;gradientColor=none;points=[];labelBackgroundColor=none;rounded=0;strokeColor=none;html=1;whiteSpace=wrap;" parent="111" vertex="1">
      <mxGeometry x="4" y="8" width="11" height="3" as="geometry"/>
    </mxCell>
    <mxCell id="116" style="vsdxID=153;fillColor=#000000;gradientColor=none;shape=stencil(nZBLDoAgDERP0z3SIyjew0SURgSD+Lu9kMZoXLhwN9O+tukAlrNpJg1SzDH4QW/URgNYgZTkjA4UkwJUgGXng+6DX1zLfmoymdXo17xh5zmRJ6Q42BWCfc2oJfdAr+Yv+AP9Cb7OJ3H/2JG1HNGz/84klThPVCc=);points=[];labelBackgroundColor=none;rounded=0;html=1;whiteSpace=wrap;" parent="115" vertex="1">
      <mxGeometry width="11" height="3" as="geometry"/>
    </mxCell>
    <UserObject label="&lt;div style=&quot;font-size: 1px&quot;&gt;&lt;font style=&quot;font-size:8.47px;font-family:Arial;color:#000000;direction:ltr;letter-spacing:0px;line-height:120%;opacity:1&quot;&gt;&lt;i&gt;GMSL&lt;br/&gt;&lt;/i&gt;&lt;/font&gt;&lt;/div&gt;" tags="" id="117">
      <mxCell style="vsdxID=155;edgeStyle=none;dashed=1;startArrow=none;endArrow=none;startSize=9;endSize=9;strokeWidth=3;spacingTop=0;spacingBottom=0;spacingLeft=0;spacingRight=0;verticalAlign=middle;html=1;labelBackgroundColor=#FFFFFF;rounded=0;align=center;overflow=width;exitX=0;exitY=0.5135135135135135;exitDx=0;exitDy=0;exitPerimeter=0;entryX=0;entryY=0.5135135135135135;entryDx=0;entryDy=0;entryPerimeter=0;" parent="1" source="13" target="53" edge="1">
        <mxGeometry relative="1" as="geometry">
          <mxPoint x="8" y="11" as="offset"/>
          <Array as="points">
            <mxPoint x="1099" y="529"/>
            <mxPoint x="1099" y="562.6"/>
            <mxPoint x="1181" y="562.6"/>
            <mxPoint x="1181" y="790.23"/>
          </Array>
        </mxGeometry>
      </mxCell>
    </UserObject>
    <UserObject label="&lt;div style=&quot;font-size: 1px&quot;&gt;&lt;font style=&quot;font-size:8.47px;font-family:Arial;color:#000000;direction:ltr;letter-spacing:0px;line-height:120%;opacity:1&quot;&gt;&lt;i&gt;GMSL2&lt;br/&gt;&lt;/i&gt;&lt;/font&gt;&lt;/div&gt;" tags="" id="118">
      <mxCell style="vsdxID=99;edgeStyle=none;dashed=1;startArrow=none;endArrow=none;startSize=9;endSize=9;strokeWidth=3;spacingTop=0;spacingBottom=0;spacingLeft=0;spacingRight=0;verticalAlign=middle;html=1;labelBackgroundColor=#FFFFFF;rounded=0;align=center;overflow=width;exitX=0;exitY=0.5135135135135135;exitDx=0;exitDy=0;exitPerimeter=0;entryX=0;entryY=0.5135135135135135;entryDx=0;entryDy=0;entryPerimeter=0;" parent="1" source="71" target="53" edge="1">
        <mxGeometry relative="1" as="geometry">
          <mxPoint x="-2" y="9" as="offset"/>
          <Array as="points">
            <mxPoint x="1030" y="588"/>
            <mxPoint x="1030" y="790"/>
          </Array>
        </mxGeometry>
      </mxCell>
    </UserObject>
    <UserObject label="" tags="" id="119">
      <mxCell style="vsdxID=95;edgeStyle=none;startArrow=none;endArrow=none;startSize=9;endSize=9;strokeWidth=3;spacingTop=0;spacingBottom=0;spacingLeft=0;spacingRight=0;verticalAlign=middle;html=1;labelBackgroundColor=#FFFFFF;rounded=0;exitX=0.010416666666666666;exitY=0.4967948717948718;exitDx=0;exitDy=0;exitPerimeter=0;entryX=0.5;entryY=0;entryDx=0;entryDy=0;entryPerimeter=0;jumpStyle=arc;" parent="1" source="55" target="53" edge="1">
        <mxGeometry relative="1" as="geometry">
          <mxPoint as="offset"/>
          <Array as="points">
            <mxPoint x="1342.55" y="588"/>
            <mxPoint x="1183.55" y="588"/>
            <mxPoint x="1105.22" y="588"/>
            <mxPoint x="1105.22" y="560"/>
            <mxPoint x="1339.22" y="560"/>
          </Array>
        </mxGeometry>
      </mxCell>
    </UserObject>
    <UserObject label="&lt;div style=&quot;font-size: 1px&quot;&gt;&lt;font style=&quot;font-size:8.47px;font-family:Arial;color:#000000;direction:ltr;letter-spacing:0px;line-height:120%;opacity:1&quot;&gt;&lt;i&gt;CEM_LIN0&lt;br/&gt;(K-line)&lt;br/&gt;&lt;/i&gt;&lt;/font&gt;&lt;/div&gt;" tags="" id="120">
      <mxCell style="vsdxID=8;edgeStyle=none;startArrow=none;endArrow=none;startSize=9;endSize=9;strokeWidth=3;strokeColor=#3333ff;spacingTop=0;spacingBottom=0;spacingLeft=0;spacingRight=0;verticalAlign=middle;html=1;labelBackgroundColor=#FFFFFF;rounded=0;align=center;overflow=width;exitX=0.023076923076923078;exitY=1.0166666666666666;exitDx=0;exitDy=0;exitPerimeter=0;entryX=0;entryY=0.4864864864864865;entryDx=0;entryDy=0;entryPerimeter=0;" parent="1" source="49" target="72" edge="1">
        <mxGeometry relative="1" as="geometry">
          <mxPoint x="-28" y="36" as="offset"/>
          <Array as="points">
            <mxPoint x="1823" y="732.21"/>
          </Array>
        </mxGeometry>
      </mxCell>
    </UserObject>
    <mxCell id="121" parent="1" vertex="1">
      <mxGeometry x="1677" y="896" as="geometry"/>
    </mxCell>
    <UserObject label="&lt;div style=&quot;font-size: 1px&quot;&gt;&lt;font style=&quot;font-size:11.29px;font-family:Arial;color:#000000;direction:ltr;letter-spacing:0px;line-height:120%;opacity:1&quot;&gt;&lt;i&gt;Connectivity Can&lt;br/&gt;&lt;/i&gt;&lt;/font&gt;&lt;/div&gt;" tags="" id="122">
      <mxCell style="vsdxID=9;edgeStyle=none;startArrow=none;endArrow=none;startSize=9;endSize=9;strokeWidth=3;strokeColor=#ff0000;spacingTop=0;spacingBottom=0;spacingLeft=0;spacingRight=0;verticalAlign=middle;html=1;labelBackgroundColor=#FFFFFF;rounded=0;align=center;overflow=width;entryX=1.006578947368421;entryY=0.6666666666666666;entryDx=0;entryDy=0;entryPerimeter=0;" parent="1" source="121" target="8" edge="1">
        <mxGeometry relative="1" as="geometry">
          <mxPoint x="34" y="20" as="offset"/>
          <Array as="points">
            <mxPoint x="1677" y="826.89"/>
          </Array>
        </mxGeometry>
      </mxCell>
    </UserObject>
    <UserObject label="" tags="" id="123">
      <mxCell style="vsdxID=10;edgeStyle=none;startArrow=none;endArrow=none;startSize=9;endSize=9;strokeWidth=6;strokeColor=#f59d56;spacingTop=0;spacingBottom=0;spacingLeft=0;spacingRight=0;verticalAlign=middle;html=1;labelBackgroundColor=#FFFFFF;rounded=0;exitX=0;exitY=0.2;exitDx=0;exitDy=0;exitPerimeter=0;entryX=0.5104166666666666;entryY=1;entryDx=0;entryDy=0;entryPerimeter=0;" parent="1" source="8" target="55" edge="1">
        <mxGeometry relative="1" as="geometry">
          <mxPoint x="-1" as="offset"/>
          <Array as="points">
            <mxPoint x="1448.54" y="799"/>
          </Array>
        </mxGeometry>
      </mxCell>
    </UserObject>
    <UserObject label="&lt;div style=&quot;font-size: 1px&quot;&gt;&lt;font style=&quot;font-size:8.47px;font-family:Arial;color:#000000;direction:ltr;letter-spacing:0px;line-height:120%;opacity:1&quot;&gt;&lt;i&gt;GMSL&lt;br/&gt;&lt;/i&gt;&lt;/font&gt;&lt;/div&gt;" tags="" id="124">
      <mxCell style="vsdxID=11;edgeStyle=none;startArrow=none;endArrow=none;startSize=9;endSize=9;strokeWidth=3;spacingTop=0;spacingBottom=0;spacingLeft=0;spacingRight=0;verticalAlign=middle;html=1;labelBackgroundColor=#FFFFFF;rounded=0;align=center;overflow=width;exitX=1;exitY=0.4864864864864865;exitDx=0;exitDy=0;exitPerimeter=0;entryX=0.010416666666666666;entryY=0.08974358974358974;entryDx=0;entryDy=0;entryPerimeter=0;" parent="1" source="7" target="55" edge="1">
        <mxGeometry relative="1" as="geometry">
          <mxPoint y="-10" as="offset"/>
          <Array as="points"/>
        </mxGeometry>
      </mxCell>
    </UserObject>
    <UserObject label="&lt;div style=&quot;font-size: 1px&quot;&gt;&lt;font style=&quot;font-size:8.47px;font-family:Arial;color:#000000;direction:ltr;letter-spacing:0px;line-height:120%;opacity:1&quot;&gt;&lt;i&gt;A2B&lt;br/&gt;&lt;/i&gt;&lt;/font&gt;&lt;/div&gt;" tags="" id="125">
      <mxCell style="vsdxID=12;edgeStyle=none;startArrow=none;endArrow=none;startSize=9;endSize=9;strokeWidth=3;spacingTop=0;spacingBottom=0;spacingLeft=0;spacingRight=0;verticalAlign=middle;html=1;labelBackgroundColor=#FFFFFF;rounded=0;align=center;overflow=width;exitX=0.010416666666666666;exitY=0.8878205128205128;exitDx=0;exitDy=0;exitPerimeter=0;entryX=0.5;entryY=0;entryDx=0;entryDy=0;entryPerimeter=0;" parent="1" source="55" target="53" edge="1">
        <mxGeometry relative="1" as="geometry">
          <mxPoint x="26" y="-8" as="offset"/>
          <Array as="points">
            <mxPoint x="1339.22" y="710"/>
          </Array>
        </mxGeometry>
      </mxCell>
    </UserObject>
    <UserObject label="&lt;div style=&quot;font-size: 1px&quot;&gt;&lt;font style=&quot;font-size:8.47px;font-family:Arial;color:#000000;direction:ltr;letter-spacing:0px;line-height:120%;opacity:1&quot;&gt;&lt;i&gt;CEM_LIN3&lt;br/&gt;&lt;/i&gt;&lt;/font&gt;&lt;/div&gt;" tags="" id="126">
      <mxCell style="vsdxID=111;edgeStyle=none;startArrow=none;endArrow=none;startSize=9;endSize=9;strokeWidth=3;strokeColor=#3333ff;spacingTop=0;spacingBottom=0;spacingLeft=0;spacingRight=0;verticalAlign=middle;html=1;labelBackgroundColor=#FFFFFF;rounded=0;align=center;overflow=width;exitX=0.24615384615384617;exitY=1.0166666666666666;exitDx=0;exitDy=0;exitPerimeter=0;entryX=0;entryY=0.4864864864864865;entryDx=0;entryDy=0;entryPerimeter=0;" parent="1" source="49" target="2" edge="1">
        <mxGeometry relative="1" as="geometry">
          <mxPoint x="29" y="60" as="offset"/>
          <Array as="points">
            <mxPoint x="1939" y="537.41"/>
          </Array>
        </mxGeometry>
      </mxCell>
    </UserObject>
    <UserObject label="" tags="" id="127">
      <mxCell style="vsdxID=110;edgeStyle=none;startArrow=none;endArrow=none;startSize=9;endSize=9;strokeWidth=3;strokeColor=#3333ff;spacingTop=0;spacingBottom=0;spacingLeft=0;spacingRight=0;verticalAlign=middle;html=1;labelBackgroundColor=#FFFFFF;rounded=0;exitX=0;exitY=0.4864864864864865;exitDx=0;exitDy=0;exitPerimeter=0;entryX=0.24615384615384617;entryY=1.0166666666666666;entryDx=0;entryDy=0;entryPerimeter=0;" parent="1" source="74" target="49" edge="1">
        <mxGeometry relative="1" as="geometry">
          <mxPoint x="-3" as="offset"/>
          <Array as="points">
            <mxPoint x="1939" y="625"/>
          </Array>
        </mxGeometry>
      </mxCell>
    </UserObject>
    <UserObject label="&lt;div style=&quot;font-size: 1px&quot;&gt;&lt;font style=&quot;font-size:8.47px;font-family:Arial;color:#000000;direction:ltr;letter-spacing:0px;line-height:120%;opacity:1&quot;&gt;&lt;i&gt;CEM_LIN5&lt;br/&gt;&lt;/i&gt;&lt;/font&gt;&lt;/div&gt;" tags="" id="128">
      <mxCell style="vsdxID=108;edgeStyle=none;startArrow=none;endArrow=none;startSize=9;endSize=9;strokeWidth=3;strokeColor=#3333ff;spacingTop=0;spacingBottom=0;spacingLeft=0;spacingRight=0;verticalAlign=middle;html=1;labelBackgroundColor=#FFFFFF;rounded=0;align=center;overflow=width;exitX=0.40384615384615385;exitY=1.0166666666666666;exitDx=0;exitDy=0;exitPerimeter=0;entryX=0;entryY=0.4864864864864865;entryDx=0;entryDy=0;entryPerimeter=0;" parent="1" source="49" target="73" edge="1">
        <mxGeometry relative="1" as="geometry">
          <mxPoint x="25" y="-10" as="offset"/>
          <Array as="points">
            <mxPoint x="2021" y="581.41"/>
          </Array>
        </mxGeometry>
      </mxCell>
    </UserObject>
    <UserObject label="&lt;div style=&quot;font-size: 1px&quot;&gt;&lt;font style=&quot;font-size:12.7px;font-family:Arial;color:#000000;direction:ltr;letter-spacing:0px;line-height:120%;opacity:1&quot;&gt;&lt;i&gt;FlexRay Backbone&lt;br/&gt;&lt;/i&gt;&lt;/font&gt;&lt;/div&gt;" tags="" id="129">
      <mxCell style="vsdxID=106;edgeStyle=none;startArrow=none;endArrow=none;startSize=9;endSize=9;strokeWidth=6;strokeColor=#008000;spacingTop=0;spacingBottom=0;spacingLeft=0;spacingRight=0;verticalAlign=middle;html=1;labelBackgroundColor=#FFFFFF;rounded=0;align=center;overflow=width;exitX=0;exitY=0.5166666666666667;exitDx=0;exitDy=0;exitPerimeter=0;entryX=0.8355263157894737;entryY=0;entryDx=0;entryDy=0;entryPerimeter=0;" parent="1" source="49" target="8" edge="1">
        <mxGeometry relative="1" as="geometry">
          <mxPoint x="14" y="116" as="offset"/>
          <Array as="points">
            <mxPoint x="1634.89" y="478"/>
          </Array>
        </mxGeometry>
      </mxCell>
    </UserObject>
    <UserObject label="" tags="" id="130">
      <mxCell style="vsdxID=105;edgeStyle=none;startArrow=none;endArrow=none;startSize=9;endSize=9;strokeWidth=6;strokeColor=#008000;spacingTop=0;spacingBottom=0;spacingLeft=0;spacingRight=0;verticalAlign=middle;html=1;labelBackgroundColor=#FFFFFF;rounded=0;exitX=1.0104166666666667;exitY=0.5;exitDx=0;exitDy=0;exitPerimeter=0;entryX=0.8355263157894737;entryY=0;entryDx=0;entryDy=0;entryPerimeter=0;" parent="1" source="55" target="8" edge="1">
        <mxGeometry relative="1" as="geometry">
          <mxPoint as="offset"/>
          <Array as="points">
            <mxPoint x="1634.88" y="589"/>
          </Array>
        </mxGeometry>
      </mxCell>
    </UserObject>
    <UserObject label="&lt;div style=&quot;font-size: 1px&quot;&gt;&lt;font style=&quot;font-size:8.47px;font-family:Arial;color:#000000;direction:ltr;letter-spacing:0px;line-height:120%;opacity:1&quot;&gt;&lt;i&gt;GMSL2&lt;br/&gt;&lt;/i&gt;&lt;/font&gt;&lt;/div&gt;" tags="" id="131">
      <mxCell style="vsdxID=96;edgeStyle=none;startArrow=none;endArrow=none;startSize=9;endSize=9;strokeWidth=3;spacingTop=0;spacingBottom=0;spacingLeft=0;spacingRight=0;verticalAlign=middle;html=1;labelBackgroundColor=#FFFFFF;rounded=0;align=center;overflow=width;exitX=0.010416666666666666;exitY=0.4967948717948718;exitDx=0;exitDy=0;exitPerimeter=0;entryX=1;entryY=0.5135135135135135;entryDx=0;entryDy=0;entryPerimeter=0;jumpStyle=arc;" parent="1" source="55" target="71" edge="1">
        <mxGeometry relative="1" as="geometry">
          <mxPoint x="5" y="-10" as="offset"/>
          <Array as="points">
            <mxPoint x="1342.55" y="588"/>
            <mxPoint x="1183.55" y="588"/>
          </Array>
        </mxGeometry>
      </mxCell>
    </UserObject>
    <mxCell id="132" parent="1" vertex="1">
      <mxGeometry x="2203" y="377" as="geometry"/>
    </mxCell>
    <UserObject label="&lt;div style=&quot;font-size: 1px&quot;&gt;&lt;font style=&quot;font-size:8.47px;font-family:Arial;color:#000000;direction:ltr;letter-spacing:0px;line-height:120%;opacity:1&quot;&gt;&lt;i&gt;CEM_LIN6&lt;br/&gt;&lt;/i&gt;&lt;/font&gt;&lt;/div&gt;" tags="" id="133">
      <mxCell style="vsdxID=82;edgeStyle=none;startArrow=none;endArrow=none;startSize=9;endSize=9;strokeWidth=3;strokeColor=#3333ff;spacingTop=0;spacingBottom=0;spacingLeft=0;spacingRight=0;verticalAlign=middle;html=1;labelBackgroundColor=#FFFFFF;rounded=0;align=center;overflow=width;entryX=0.7038461538461539;entryY=0.016666666666666666;entryDx=0;entryDy=0;entryPerimeter=0;" parent="1" source="132" target="49" edge="1">
        <mxGeometry relative="1" as="geometry">
          <mxPoint y="-36" as="offset"/>
          <Array as="points">
            <mxPoint x="2177" y="377"/>
          </Array>
        </mxGeometry>
      </mxCell>
    </UserObject>
    <UserObject label="&lt;div style=&quot;font-size: 1px&quot;&gt;&lt;font style=&quot;font-size:8.47px;font-family:Arial;color:#000000;direction:ltr;letter-spacing:0px;line-height:120%;opacity:1&quot;&gt;&lt;i&gt;DHU_LIN2&lt;br/&gt;&lt;/i&gt;&lt;/font&gt;&lt;/div&gt;" tags="" id="134">
      <mxCell style="vsdxID=72;edgeStyle=none;startArrow=none;endArrow=none;startSize=9;endSize=9;strokeWidth=3;strokeColor=#3333ff;spacingTop=0;spacingBottom=0;spacingLeft=0;spacingRight=0;verticalAlign=middle;html=1;labelBackgroundColor=#FFFFFF;rounded=0;align=center;overflow=width;exitX=0.5;exitY=0;exitDx=0;exitDy=0;exitPerimeter=0;entryX=0.2604166666666667;entryY=1;entryDx=0;entryDy=0;entryPerimeter=0;" parent="1" source="53" target="55" edge="1">
        <mxGeometry relative="1" as="geometry">
          <mxPoint x="-40" y="-52" as="offset"/>
          <Array as="points">
            <mxPoint x="1340" y="756"/>
            <mxPoint x="1424.37" y="756"/>
          </Array>
        </mxGeometry>
      </mxCell>
    </UserObject>
    <UserObject label="&lt;div style=&quot;font-size: 1px&quot;&gt;&lt;font style=&quot;font-size:8.47px;font-family:Arial;color:#000000;direction:ltr;letter-spacing:0px;line-height:120%;opacity:1&quot;&gt;&lt;i&gt;CEM_LIN1&lt;br/&gt;&lt;/i&gt;&lt;/font&gt;&lt;/div&gt;" tags="" id="135">
      <mxCell style="vsdxID=65;edgeStyle=none;startArrow=none;endArrow=none;startSize=9;endSize=9;strokeWidth=3;strokeColor=#3333ff;spacingTop=0;spacingBottom=0;spacingLeft=0;spacingRight=0;verticalAlign=middle;html=1;labelBackgroundColor=#FFFFFF;rounded=0;align=center;overflow=width;exitX=0;exitY=0.4864864864864865;exitDx=0;exitDy=0;exitPerimeter=0;entryX=0.08461538461538462;entryY=1.0166666666666666;entryDx=0;entryDy=0;entryPerimeter=0;" parent="1" source="3" target="49" edge="1">
        <mxGeometry relative="1" as="geometry">
          <mxPoint x="6" y="126" as="offset"/>
          <Array as="points">
            <mxPoint x="1855" y="537"/>
          </Array>
        </mxGeometry>
      </mxCell>
    </UserObject>
    <UserObject label="" tags="" id="136">
      <mxCell style="vsdxID=64;edgeStyle=none;startArrow=none;endArrow=none;startSize=9;endSize=9;strokeWidth=3;strokeColor=#3333ff;spacingTop=0;spacingBottom=0;spacingLeft=0;spacingRight=0;verticalAlign=middle;html=1;labelBackgroundColor=#FFFFFF;rounded=0;exitX=0;exitY=0.4864864864864865;exitDx=0;exitDy=0;exitPerimeter=0;entryX=0.08461538461538462;entryY=1.0166666666666666;entryDx=0;entryDy=0;entryPerimeter=0;" parent="1" source="5" target="49" edge="1">
        <mxGeometry relative="1" as="geometry">
          <mxPoint x="-4" as="offset"/>
          <Array as="points">
            <mxPoint x="1855" y="625"/>
          </Array>
        </mxGeometry>
      </mxCell>
    </UserObject>
    <UserObject label="" tags="" id="137">
      <mxCell style="vsdxID=63;edgeStyle=none;startArrow=none;endArrow=none;startSize=9;endSize=9;strokeWidth=3;strokeColor=#3333ff;spacingTop=0;spacingBottom=0;spacingLeft=0;spacingRight=0;verticalAlign=middle;html=1;labelBackgroundColor=#FFFFFF;rounded=0;exitX=0;exitY=0.4864864864864865;exitDx=0;exitDy=0;exitPerimeter=0;entryX=0.08461538461538462;entryY=1.0166666666666666;entryDx=0;entryDy=0;entryPerimeter=0;" parent="1" source="4" target="49" edge="1">
        <mxGeometry relative="1" as="geometry">
          <mxPoint x="-4" as="offset"/>
          <Array as="points">
            <mxPoint x="1855" y="581"/>
          </Array>
        </mxGeometry>
      </mxCell>
    </UserObject>
    <mxCell id="138" parent="1" vertex="1">
      <mxGeometry x="1863" y="377" as="geometry"/>
    </mxCell>
    <UserObject label="&lt;div style=&quot;font-size: 1px&quot;&gt;&lt;font style=&quot;font-size:11.29px;font-family:Arial;color:#000000;direction:ltr;letter-spacing:0px;line-height:120%;opacity:1&quot;&gt;&lt;i&gt;Body_Exposed_CAN&lt;br/&gt;&lt;/i&gt;&lt;/font&gt;&lt;/div&gt;" tags="" id="139">
      <mxCell style="vsdxID=62;edgeStyle=none;startArrow=none;endArrow=none;startSize=9;endSize=9;strokeWidth=3;strokeColor=#ff0000;spacingTop=0;spacingBottom=0;spacingLeft=0;spacingRight=0;verticalAlign=middle;html=1;labelBackgroundColor=#FFFFFF;rounded=0;align=center;overflow=width;entryX=0.13846153846153847;entryY=0.016666666666666666;entryDx=0;entryDy=0;entryPerimeter=0;" parent="1" source="138" target="49" edge="1">
        <mxGeometry relative="1" as="geometry">
          <mxPoint y="-53" as="offset"/>
          <Array as="points">
            <mxPoint x="1882.83" y="377"/>
          </Array>
        </mxGeometry>
      </mxCell>
    </UserObject>
    <UserObject label="" tags="" id="140">
      <mxCell style="vsdxID=61;edgeStyle=none;startArrow=none;endArrow=none;startSize=9;endSize=9;strokeWidth=3;strokeColor=#ff0000;spacingTop=0;spacingBottom=0;spacingLeft=0;spacingRight=0;verticalAlign=middle;html=1;labelBackgroundColor=#FFFFFF;rounded=0;exitX=0.13846153846153847;exitY=0.016666666666666666;exitDx=0;exitDy=0;exitPerimeter=0;entryX=1;entryY=0.4864864864864865;entryDx=0;entryDy=0;entryPerimeter=0;" parent="1" source="49" target="47" edge="1">
        <mxGeometry relative="1" as="geometry">
          <mxPoint x="-1" as="offset"/>
          <Array as="points">
            <mxPoint x="1883" y="419.41"/>
          </Array>
        </mxGeometry>
      </mxCell>
    </UserObject>
    <UserObject label="&lt;div style=&quot;font-size: 1px&quot;&gt;&lt;font style=&quot;font-size:8.47px;font-family:Arial;color:#000000;direction:ltr;letter-spacing:0px;line-height:120%;opacity:1&quot;&gt;&lt;i&gt;GMSL&lt;br/&gt;&lt;/i&gt;&lt;/font&gt;&lt;/div&gt;" tags="" id="141">
      <mxCell style="vsdxID=26;edgeStyle=none;startArrow=none;endArrow=none;startSize=9;endSize=9;strokeWidth=3;spacingTop=0;spacingBottom=0;spacingLeft=0;spacingRight=0;verticalAlign=middle;html=1;labelBackgroundColor=#FFFFFF;rounded=0;align=center;overflow=width;exitX=1;exitY=0.5135135135135135;exitDx=0;exitDy=0;exitPerimeter=0;entryX=0.010416666666666666;entryY=0.3108974358974359;entryDx=0;entryDy=0;entryPerimeter=0;" parent="1" source="13" target="55" edge="1">
        <mxGeometry relative="1" as="geometry">
          <mxPoint x="5" y="-9" as="offset"/>
          <Array as="points">
            <mxPoint x="1181" y="529"/>
            <mxPoint x="1181" y="529.93"/>
          </Array>
        </mxGeometry>
      </mxCell>
    </UserObject>
    <mxCell id="142" parent="1" vertex="1">
      <mxGeometry x="1593" y="896" as="geometry"/>
    </mxCell>
    <UserObject label="" tags="" id="143">
      <mxCell style="vsdxID=24;edgeStyle=none;startArrow=none;endArrow=none;startSize=9;endSize=9;strokeWidth=6;strokeColor=#f59d56;spacingTop=0;spacingBottom=0;spacingLeft=0;spacingRight=0;verticalAlign=middle;html=1;labelBackgroundColor=#FFFFFF;rounded=0;exitX=0.5592105263157895;exitY=1;exitDx=0;exitDy=0;exitPerimeter=0;" parent="1" source="8" target="142" edge="1">
        <mxGeometry relative="1" as="geometry">
          <mxPoint x="-10" y="-1" as="offset"/>
          <Array as="points"/>
        </mxGeometry>
      </mxCell>
    </UserObject>
    <mxCell id="144" parent="1" vertex="1">
      <mxGeometry x="1573" y="896" as="geometry"/>
    </mxCell>
    <UserObject label="&lt;div style=&quot;font-size: 1px&quot;&gt;&lt;font style=&quot;font-size:11.29px;font-family:Arial;color:#000000;direction:ltr;letter-spacing:0px;line-height:120%;opacity:1&quot;&gt;&lt;i&gt;Diagnostic CAN&lt;br/&gt;OBD II Connector&lt;br/&gt;&lt;/i&gt;&lt;/font&gt;&lt;/div&gt;" tags="" id="145">
      <mxCell style="vsdxID=23;edgeStyle=none;startArrow=none;endArrow=none;startSize=9;endSize=9;strokeWidth=3;strokeColor=#ff0000;spacingTop=0;spacingBottom=0;spacingLeft=0;spacingRight=0;verticalAlign=middle;html=1;labelBackgroundColor=#FFFFFF;rounded=0;align=center;overflow=width;exitX=0.4276315789473684;exitY=1;exitDx=0;exitDy=0;exitPerimeter=0;" parent="1" source="8" target="144" edge="1">
        <mxGeometry relative="1" as="geometry">
          <mxPoint x="2" y="68" as="offset"/>
          <Array as="points"/>
        </mxGeometry>
      </mxCell>
    </UserObject>
    <UserObject label="&lt;div style=&quot;font-size: 1px&quot;&gt;&lt;font style=&quot;font-size:8.47px;font-family:Arial;color:#000000;direction:ltr;letter-spacing:0px;line-height:120%;opacity:1&quot;&gt;&lt;i&gt;DIM_LIN1&lt;br/&gt;&lt;/i&gt;&lt;/font&gt;&lt;/div&gt;" tags="" id="146">
      <mxCell style="vsdxID=22;edgeStyle=none;startArrow=none;endArrow=none;startSize=9;endSize=9;strokeWidth=3;strokeColor=#3333ff;spacingTop=0;spacingBottom=0;spacingLeft=0;spacingRight=0;verticalAlign=middle;html=1;labelBackgroundColor=#FFFFFF;rounded=0;align=center;overflow=width;exitX=0.5;exitY=1;exitDx=0;exitDy=0;exitPerimeter=0;entryX=0.010416666666666666;entryY=0.1955128205128205;entryDx=0;entryDy=0;entryPerimeter=0;" parent="1" source="6" target="55" edge="1">
        <mxGeometry relative="1" as="geometry">
          <mxPoint x="6" y="8" as="offset"/>
          <Array as="points">
            <mxPoint x="1278" y="494"/>
          </Array>
        </mxGeometry>
      </mxCell>
    </UserObject>
    <mxCell id="147" parent="1" vertex="1">
      <mxGeometry x="1400" y="393" as="geometry"/>
    </mxCell>
    <UserObject label="" tags="" id="148">
      <mxCell style="vsdxID=21;edgeStyle=none;startArrow=none;endArrow=none;startSize=9;endSize=9;strokeWidth=6;strokeColor=#008000;spacingTop=0;spacingBottom=0;spacingLeft=0;spacingRight=0;verticalAlign=middle;html=1;labelBackgroundColor=#FFFFFF;rounded=0;entryX=1;entryY=0.5;entryDx=0;entryDy=0;entryPerimeter=0;" parent="1" source="147" target="12" edge="1">
        <mxGeometry relative="1" as="geometry">
          <mxPoint x="-1" as="offset"/>
          <Array as="points"/>
        </mxGeometry>
      </mxCell>
    </UserObject>
  </root>
</mxGraphModel>
`
  // console.log("Data:", xmlData)
  // Load XML into the mxGraph instance
  const xmlDoc = mx.mxUtils.parseXml(xmlData);
  console.log("Doc:", xmlDoc)
  const codec = new mx.mxCodec(xmlDoc);
  console.log("Codec:", codec)
  const result = codec.decode(xmlDoc.documentElement, graph.getModel());
  console.log("Result:", result)
  }

}

//<mxfile host="Electron" modified="2023-06-04T11:44:19.341Z" agent="Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) draw.io/21.2.8 Chrome/112.0.5615.165 Electron/24.2.0 Safari/537.36" version="21.2.8" etag="cXh0cyVTTlhTQuySc0pL" type="device"><diagram name="Page-1" id="Page-1">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</diagram></mxfile>
