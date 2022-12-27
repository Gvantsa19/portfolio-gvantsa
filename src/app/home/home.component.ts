import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { faStar } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  name: string;
  faStar = faStar;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
  }

}
