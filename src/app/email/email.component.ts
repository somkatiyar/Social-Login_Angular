import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-email',
  templateUrl: './email.component.html',
  styleUrls: ['./email.component.scss']
})
export class EmailComponent implements OnInit {

  from;
  to;
  subject;
  text;
  isSuccess:boolean = false;
  constructor(private dataService: DataService) { }

  ngOnInit() {
  }

  sendEmail() {
    let body = {
      from:this.from,
      to:this.to,
      subject:this.subject,
      text: this.text
    }

    this.dataService.email(body).subscribe(result =>{
      console.log(result['data']);
      if(result['data']) {
        this.isSuccess = true;
      } else {
        this.isSuccess = false;
      }
      
    })
  }

}
