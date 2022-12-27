import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { SafeResourceUrl } from '@angular/platform-browser';
import { Interests, Skills } from './skills';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
})
export class AboutComponent implements OnInit {
  skills = Skills;
  interest = Interests;
  phone: number = 598272518;
  city: string = 'Tbilisi, Georgia';
  email: string = 'oqropiridzegvantsa@gmail.com';
  github: string = 'https://github.com/Gvantsa19';

  about: string;
  user: string;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {}
}
