import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-aaa',
  templateUrl: './aaa.component.html',
  styleUrls: ['./aaa.component.scss'],
})
export class AaaComponent {
  data$ = this.activatedRoute.data;

  constructor(private activatedRoute: ActivatedRoute) {}
}
