
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-estimate',
  templateUrl: './estimate.component.html',
  styleUrls: ['./estimate.component.scss']
})
export class EstimateComponent implements OnInit {

  contactForm: FormGroup;

  platforms = ['Web', 'Mobile', 'Both', 'Other'];
  assets = ['Idea', 'Code', 'Specs', 'UX/UI'];
  budgets = ['<10k $', '10-20k $', '20-50k $', '50k +'];

  constructor() { }

  ngOnInit() {
    this.contactForm = new FormGroup({
      name: new FormControl(null),
      email: new FormControl(null, [Validators.required, Validators.email]),
      phoneNumber: new FormControl(null),
      companyName: new FormControl(null),
      description: new FormControl(null),
      platforms: new FormControl(this.platforms[0]),
      assets: new FormControl(this.assets[0]),
      budgets: new FormControl(this.budgets[1])
    });
  }
}
class ReactiveMessage {
    constructor(public name?: string,
                public email?: string,
                public phoneNumber?: string,
                public companyName?: string,
                public platforms = 'Web',
                public assets = 'Idea',
                public budget = '10-20k $'
                ) {}
  }

