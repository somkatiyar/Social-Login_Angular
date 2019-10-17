import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { BlockUI, NgBlockUI } from 'ng-block-ui';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  @BlockUI() blockUI: NgBlockUI;
  userList: any;
  constructor(private dataService: DataService) { }

  ngOnInit() {
  //   this.dataService.getCall().subscribe(result => {
  //     this.userList = result;
  //   })
  }

}
