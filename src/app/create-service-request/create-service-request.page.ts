import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ValueAccessor } from '@ionic/angular/directives/control-value-accessors/value-accessor';
import { PropertiesService } from '../services/properties.service';

@Component({
  selector: 'app-create-service-request',
  templateUrl: './create-service-request.page.html',
  styleUrls: ['./create-service-request.page.scss'],
})
export class CreateServiceRequestPage implements OnInit {
  private createServiceForm : FormGroup;
  serviceRequestId:any;
  propertiesList:any=[];
  constructor(
    private route : ActivatedRoute,
    private router: Router,
    private formBuilder: FormBuilder,
    private propertiesService: PropertiesService
  ) { }

  ngOnInit() {
    this.propertiesList=this.propertiesService.getPropertyList();

    this.createServiceForm=this.formBuilder.group({
      property:[null,Validators.required],
      title:[null,Validators.required],
      description:[null,Validators.required],
      reporter:[null,Validators.required],
      servicer:[null,Validators.required],
    })

    let id = this.route.snapshot.paramMap.get('id');
    if(id){
      this.serviceRequestId=id;
      let serviceRequestList=this.propertiesService.getServiceRequestList();
      let service = serviceRequestList[id];

      this.createServiceForm.patchValue({
        property:service.property,
        title:service.title,
        description:service.description,
        reporter:service.reporter,
        servicer:service.servicer,

      })
    }
  }

  create(){
    let serviceRequestData=this.createServiceForm.getRawValue();

    if(this.serviceRequestId){
      this.propertiesService.serviceRequestList[this.serviceRequestId]=serviceRequestData;
    }else{
      this.propertiesService.addServiceRequest(serviceRequestData);
    }
    this.createServiceForm.reset();
    this.router.navigateByUrl('/service-list')
  }
  newProperty(){
    this.propertiesService.isFromServiceRequest=true;
    this.router.navigateByUrl('/properties');
  }

}
