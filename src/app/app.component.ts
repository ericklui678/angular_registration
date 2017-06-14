import { Component } from '@angular/core';

class User {
    constructor(
        public id: number = null,
        public firstName: string = "",
        public last_name: string = "",
        public email: string = "",
        public password: string = "",
        public confirm: string = "",
        public address: string = "",
        public unit_apt: string = "",
        public city: string = "",
        public state: string = "",
        public lucky: boolean = true,
        public created_at: Date = new Date(),
        public updated_at: Date = new Date()
  ) {}
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  user = new User();
  users = [];
  onSubmit(){
    this.users.push(this.user);
    this.user = new User();
  }
}
