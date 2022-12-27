import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
})
export class MenuComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  @Input()
  expanded: boolean;

  @Input()
  items: string[];

  @Output()
  onItemClick = new EventEmitter<void>(false);
}
