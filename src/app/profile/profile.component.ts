import { Component } from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-profile',
  imports: [],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent {
  username: string = "";

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    let username = this.route.snapshot.paramMap.get('username');
    if (username) {
      this.username = username;
    }
  }
}
