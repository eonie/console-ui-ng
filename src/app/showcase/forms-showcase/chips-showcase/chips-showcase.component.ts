import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'cui-chips-showcase',
  templateUrl: './chips-showcase.component.html',
  styleUrls: ['./chips-showcase.component.scss']
})
export class ChipsShowcaseComponent implements OnInit {

  codes = {};

  introDoc = require('!!raw-loader!./chips-intro.adoc').default;
  apiDoc = require('!!raw-loader!./chips-api.adoc').default;

  constructor() {
    this.initCodes();
  }

  ngOnInit() {
  }

  initCodes() {
    let demos = ['simple', 'custom'];
    demos.forEach(demo => {
      let key = demo;
      demo = `chips-${demo}-demo`;
      this.codes[key] = [
        {
          file: `${demo}.component.ts`, language: 'typescript',
          code: require(`!!raw-loader!./${demo}/${demo}.component.ts`).default
        },
        {
          file: `${demo}.component.html`, language: 'html',
          code: require(`!!raw-loader!./${demo}/${demo}.component.html`).default
        },
        {
          file: `${demo}.component.scss`, language: 'css',
          code: require(`!!raw-loader!./${demo}/${demo}.component.scss`).default
        }
      ];
    });
  }
}
