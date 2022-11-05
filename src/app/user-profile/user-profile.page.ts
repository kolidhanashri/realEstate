import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { PropertiesService } from '../services/properties.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.page.html',
  styleUrls: ['./user-profile.page.scss'],
})
export class UserProfilePage implements OnInit {
  private userProfileForm : FormGroup;
  private addUserForm : FormGroup;
  isAddUserProfile:boolean=true;
  usersList:any=[];
  activeUsersList:any=[];
  userId:any;
  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private propertiesService: PropertiesService,
    private route:ActivatedRoute
  ) { }

  ngOnInit() {

    this.userProfileForm=this.formBuilder.group({
      username:[null,Validators.required],
      password:[null,[Validators.required,Validators.minLength(8),Validators.maxLength(15),Validators.pattern(/^(?=.*\d)(?=.*[a-zA-Z]).{2,}$/)]],
      confirmpassword:[null,[Validators.required,Validators.minLength(8),Validators.maxLength(15),Validators.pattern(/^(?=.*\d)(?=.*[a-zA-Z]).{2,}$/)]],
    })

    this.addUserForm=this.formBuilder.group({
      user:[null,Validators.required],
      displayName:[null,Validators.required],
      profilePicture:[null,Validators.required],

    })

    let id = this.route.snapshot.paramMap.get('id');
    if(id){
      this.userId=id;
      this.activeUsersList=this.propertiesService.getActiveUsersList();
      let user = this.activeUsersList[id];
      this.addUserForm.patchValue({
        user:user.user,
        displayName:user.displayName,
      })
      this.addUserForm.controls.profilePicture.setValidators(null);
      this.addUserForm.controls.profilePicture.updateValueAndValidity();
      this.profilePicture=user.profilePicture;
    }

    this.usersList=this.propertiesService.getUsersList();
  }

  passwordConfirmed(){
    let user=this.userProfileForm.getRawValue();
    this.isPasswordMisMatch=false;
    return user.password == user.confirmpassword
  }
  isPasswordMisMatch:boolean=false;
  create(){    
    if(this.passwordConfirmed()){
      let user=this.userProfileForm.getRawValue();
      this.propertiesService.createUserProfile(user);
  
      this.usersList=this.propertiesService.getUsersList();
      this.isAddUserProfile=true;
      this.userProfileForm.reset();
    }else{
      this.isPasswordMisMatch=true;
    }
    
  }

  addUser(){

    let activeUser=this.addUserForm.getRawValue();
    activeUser.profilePicture=this.profilePicture;
    if(this.userId){
      this.activeUsersList[this.userId]=activeUser;
    }else{      
      this.propertiesService.addActiveUser(activeUser);
    }
    this.addUserForm.reset();
    this.router.navigateByUrl('/users-list')

  }
  profilePicture:any;
  uploadPhoto(event){
    this.profilePicture=event.target.files[0]
      var reader = new FileReader();
      var that=this;
      reader.onload = function (e) {
        let url=  e.target.result;
        that.profilePicture.url=url;
      };

      reader.readAsDataURL(this.profilePicture);
    
  }
  createUser(){
    this.isAddUserProfile=false;
  }
}
