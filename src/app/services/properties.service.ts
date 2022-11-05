import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PropertiesService {

  path=environment.apiURL;
  propertiesList:any=[];
  serviceRequestList:any=[];
  usersList:any=[];
  activeUsersList:any=[];
  isFromServiceRequest:boolean=false;
  constructor(
    private http: HttpClient
  ) { 
    
  }


  createProperty(postData){  
    let headers = new HttpHeaders();
    headers = headers.set('Content-Type', 'application/json; charset=utf-8');  
    let url='properties/?format=api'
    this.http.post(this.path+url,postData
      ).subscribe((response) => {
      console.log(response);
    });
  }

  addProperty(property){
    this.propertiesList.push(property)
  }

  getPropertyList(){
    return this.propertiesList;
  }


  addServiceRequest(serviceRequest){
    this.serviceRequestList.push(serviceRequest)
  }

  getServiceRequestList(){
    return this.serviceRequestList;
  }

  createUserProfile(userProfile){
    this.usersList.push(userProfile)
  }

  getUsersList(){
    return this.usersList;
  }

  getActiveUsersList(){
    return this.activeUsersList;
  }
  addActiveUser(activeUser){
    this.activeUsersList.push(activeUser);
  }
}
