import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-generate-key',
  templateUrl: './generate-key.component.html',
  styleUrls: ['./generate-key.component.css'],
})
export class GenerateKeyComponent {
  public keyTwitch: string;
  public usernameTwitch: string;

  constructor(private router: Router) {
    this.keyTwitch = '';
    this.usernameTwitch = 'backsoul_';
  }
  saveKeyTwitch() {
    localStorage.setItem('keyTwitch', this.keyTwitch);
    localStorage.setItem('usernameTwitch', this.usernameTwitch);
    this.router.navigate(['/home']);
  }
}
