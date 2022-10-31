import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PropertiesService } from '../services/properties.service';

@Component({
  selector: 'app-properties-list',
  templateUrl: './properties-list.page.html',
  styleUrls: ['./properties-list.page.scss'],
})
export class PropertiesListPage implements OnInit {
  propertiesList:any=[];
  defaultUrl='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9N433wxdz25Qk61v4gCnGJ18KqgNz1YrqTg&usqp=CAU';



  constructor(
    private propertiesService:PropertiesService,
    private router : Router
  ) { }
  ngOnInit() {
    this.propertiesList=this.propertiesService.getPropertyList();
  }
  newProperty(){
    this.router.navigate(['/create-property'])
  }

  edit(index){
    this.router.navigateByUrl('/create-property/'+index); 
  }

}
