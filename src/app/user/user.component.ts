import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  users:string[] = [];
  constructor() { }

  ngOnInit(): void {
      for(let i=1;i<=10;i++){
        this.users.push("User -"+i);
      }
  }

}
