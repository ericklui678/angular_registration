import { Component } from '@angular/core';

class User {
    constructor(
        public id: number = null,
        public first_name: string = "",
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
  success = '';
  user = new User();
  users = [];
  onSubmit(){
    this.success = 'Thank you for registering with us ' + this.user.first_name +'. We just sent you a confirmation email at ' + this.user.email + ', and we will send all mail to ' + this.user.address + ', ' + this.user.city + ' ' + this.user.state + '.';
    this.users.push(this.user);
    this.user = new User();
  }
}
