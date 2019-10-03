import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  employers = new Array<Employer>();

  constructor() {
    this.employers.push(
      new Employer('Piotr', 'Taki tam sobie Pietrek', '../../assets/selfie-port.jpeg'), // udało się dodać fote :D
      new Employer('Pepeush', 'Emotka z kanału', '../../assets/zarowka.svg'),
      new Employer('Artur', 'Taki tam sobie Artur', '../../assets/lightbulb.jpg'),
      new Employer('Dasha', 'Taki tam Dasha', '../../assets/selfie-port.jpeg'),
      new Employer('Evan', 'Taki tam sobie jełop Evan', '../../assets/selfie-port.jpeg'),
      new Employer('Pepeush', 'Emotka z kanału', '../../assets/selfie-port.jpeg')
    );
  }

  ngOnInit() {}
}

class Employer {
  constructor(
    public name: string,
    public about: string,
    public img?: any
  ) {}
}
