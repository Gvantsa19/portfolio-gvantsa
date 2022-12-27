import { Component, OnInit } from '@angular/core';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import { Roles1, Roles2, Roles3, Roles4 } from './resume-roles';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.css'],
})
export class ResumeComponent implements OnInit {
  FileSaver = require('file-saver');
  roles1 = Roles1;

  roles2 = Roles2;

  roles3 = Roles3;

  roles4 = Roles4;
  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {}

  downloadPdf(pdfUrl: string, pdfName: string) {
    this.FileSaver.saveAs(pdfUrl, pdfName);
  }

  public openPDF(): void {
    let DATA: any = document.getElementById('htmlData');
    html2canvas(DATA).then((canvas) => {
      let fileWidth = 208;
      let fileHeight = (canvas.height * fileWidth) / canvas.width;
      const FILEURI = canvas.toDataURL('image/png');
      let PDF = new jsPDF('p', 'mm', 'a4');
      let position = 0;
      PDF.addImage(FILEURI, 'PNG', 0, position, fileWidth, fileHeight);
      PDF.save('angular-demo.pdf');
    });
  }
}
