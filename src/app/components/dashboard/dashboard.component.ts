import { Component, OnInit } from '@angular/core';
import { ApicallService } from 'src/app/shared/apicall.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(public apicallService:ApicallService) { }

  ngOnInit(): void {
    if(localStorage.getItem('token')){
      this.apicallService.gotoDashboard(localStorage.getItem('token')).subscribe(res =>{
        if(res && res['status']==='ok'){
          console.log('we are in dashboard')
        }else {
          console.log('something went wrong on dashboard...')
        }
      }, (err)=>{
        if(err){
          console.log('we got error on dashboard')
        }
      })
    }
  }

}
