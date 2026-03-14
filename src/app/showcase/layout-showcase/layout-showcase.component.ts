import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'cui-layout-showcase',
  templateUrl: './layout-showcase.component.html',
  styleUrls: ['./layout-showcase.component.scss']
})
export class LayoutShowcaseComponent implements OnInit {

  codes = {
    basic: [
      {
        file: 'layout-basic-demo.component.ts', language: 'typescript',
        code: require('!!raw-loader!./layout-basic-demo/layout-basic-demo.component.ts').default
      },
      {
        file: 'layout-basic-demo.component.html', language: 'html',
        code: require('!!raw-loader!./layout-basic-demo/layout-basic-demo.component.html').default
      },
      {
        file: 'layout-basic-demo.component.scss', language: 'css',
        code: require('!!raw-loader!./layout-basic-demo/layout-basic-demo.component.scss').default
      }
    ]
  };

  introDoc = require('!!raw-loader!./layout-intro.adoc').default;
  apiDoc = require('!!raw-loader!./layout-api.adoc').default;

  constructor() { }

  ngOnInit() {
  }

}
