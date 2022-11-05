import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PropertiesService } from '../services/properties.service';

@Component({
  selector: 'app-service-list',
  templateUrl: './service-list.page.html',
  styleUrls: ['./service-list.page.scss'],
})
export class ServiceListPage implements OnInit {
  serviceRequests:any=[]
  constructor(
    private propertiesService:PropertiesService,
    private router : Router
  ) { }

  ngOnInit() {
    this.serviceRequests=this.propertiesService.getServiceRequestList();

  }

  newProperty(){
    this.router.navigate(['/create-service-request'])
  }

  edit(index){
    this.router.navigateByUrl('/create-service-request/'+index); 
  }

}
