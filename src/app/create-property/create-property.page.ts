import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { PropertiesService } from '../services/properties.service';

@Component({
  selector: 'app-create-property',
  templateUrl: './create-property.page.html',
  styleUrls: ['./create-property.page.scss'],
})
export class CreatePropertyPage implements OnInit {
  private createPropertyForm : FormGroup;

  photos:File[]=[];
  propertyId:any;
  constructor(
    private route : ActivatedRoute,
    private router: Router,
    private formBuilder: FormBuilder,
    private propertiesService: PropertiesService
  ) {
    
   }

  ngOnInit() {

    this.createPropertyForm = this.formBuilder.group({
      name: ['', Validators.required],
      latitude: [null,Validators.required],
      longitude: [null, Validators.required],
      address: ['', Validators.required],
      city: ['',Validators.required],
      state: ['', Validators.required],
      country: ['',Validators.required],
      tenant_limit: [null, Validators.required],
      code: ['',Validators.required],
      description: ['',Validators.required],
      owner: [[],Validators.required],
      tenants: [[],Validators.required],
      photos: [this.photos,Validators.required],
      
    });

    
    let id = this.route.snapshot.paramMap.get('id');
    if(id){
      this.propertyId=id;
      let propertiesList=this.propertiesService.getPropertyList();
      let property = propertiesList[id];
      this.photos=property.photos

      this.createPropertyForm.patchValue({
        name:property.name,
        latitude:property.latitude,
        longitude:property.longitude,
        address:property.address,
        city:property.city,
        state:property.state,
        country:property.country,
        tenant_limit:property.tenant_limit,
        code:property.code,
        description:property.description,
        owner:property.owner,
        tenants:property.tenants,
      })
      this.createPropertyForm.controls.photos.setValidators(null);
      this.createPropertyForm.controls.photos.updateValueAndValidity();

    }
  }

  create(){

    console.log(this.createPropertyForm.getRawValue());
    let postData=this.createPropertyForm.getRawValue();
    delete postData.photos;

    postData.tenants=[postData.tenants]
    postData.photos = this.photos;
    console.log(postData);

    let formData = new FormData();
    formData.append('name',postData.name);
    formData.append('latitude',postData.latitude);
    formData.append('longitude',postData.longitude);
    formData.append('address',postData.address);
    formData.append('city',postData.city);
    formData.append('state',postData.state);
    formData.append('country',postData.country);
    formData.append('tenant_limit',postData.tenant_limit);
    formData.append('code',postData.code);
    formData.append('description',postData.description);
    formData.append('owner',postData.owner);
    formData.append('tenants',postData.tenants);
    this.photos.forEach(photo=>{
      formData.append('photos',photo);
    })

    // this.propertiesService.createProperty(formData);

    if(this.propertyId){
      this.propertiesService.propertiesList[this.propertyId]=postData;
    }else{
      this.propertiesService.addProperty(postData)
    }

    if(this.propertiesService.isFromServiceRequest){
      this.propertiesService.isFromServiceRequest=false;
      this.router.navigate(['/create-service-request'])
    }else{
      this.router.navigateByUrl('/properties');
    }

    this.createPropertyForm.reset();
    this.photos=[];

  }

  uploadPhoto(event){
    let file=event.target.files[0]
    // let files=[];
    // files.push(...event.target.files);
    // files.forEach(file=>{
      var reader = new FileReader();
      var that=this;
      reader.onload = function (e) {
        let url=  e.target.result;
        file.url=url;
        that.photos.push(file)
      };

      reader.readAsDataURL(file);
    // })
    
      // setTimeout(()=>{
      //   this.photos.push(file)
      // },1500)
  }
  
}
