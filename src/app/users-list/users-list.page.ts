import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PropertiesService } from '../services/properties.service';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.page.html',
  styleUrls: ['./users-list.page.scss'],
})
export class UsersListPage implements OnInit {
  defaultUrl='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9N433wxdz25Qk61v4gCnGJ18KqgNz1YrqTg&usqp=CAU';
  activeUsers:any=[];
  constructor(
    private propertiesService:PropertiesService,
    private router : Router
  ) { }

  ngOnInit() {

    this.activeUsers=this.propertiesService.getActiveUsersList();
  }

  newUser(){
    this.router.navigate(['/user-profile'])
  }
  edit(index){
    this.router.navigateByUrl('/user-profile/'+index); 
  }

}
