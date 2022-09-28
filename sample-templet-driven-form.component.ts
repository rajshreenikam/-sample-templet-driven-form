import { Component, OnInit } from '@angular/core';
import { FormControl, NgForm } from '@angular/forms';

@Component({
  selector: 'app-sample-templet-driven-form',
  templateUrl: './sample-templet-driven-form.component.html',
  styleUrls: ['./sample-templet-driven-form.component.css']
})
export class SampleTempletDrivenFormComponent implements OnInit {
  isEmailValid:boolean;
  countryid: Number;
  name:string="";
  
  countries: any[] = [
    { id: 1, name: 'Afghanistan' },
    { id: 2, name: 'Bahrain' },
    { id: 3, name: 'Canada' },
    { id: 4, name: 'India' },
    { id: 5, name: 'Bahrain' },
    { id: 6, name: 'Canada' }
  ]
   cards=[
    {id:1,cardname:`VISA`},
    {id:2,cardname:`Master Card`},
    {id:3,cardname:`Rupay`}
   ]
   defaultCard=`Master Card`;
   
   formData={
    username:``,
    email:``,
    tel:``,
    address:``,
    postalcode:``,
    country:``,
    card:``,
    cardno:``,
    securitycode:``,
    nameoncard:``
   }
 
  
  constructor() { }
  ngOnInit() {
    this.countryid = 4;
  }
 
  //   onSubmit(form: NgForm) {
  //   console.log(form);
  //   alert("Your Order Successfully Placed");
  // }


  // onSubmit(form: NgForm) {
  //   console.log(`Name=`,form.value.username);
  //   console.log(`Email ID=`,form.value.email);
  //   console.log(`telephone no=`,form.value.tel);
    
  //   alert("Your Order Successfully Placed");
  // }


  OnSubmit(form:NgForm) {

    
    this.formData.username =  form.value.username ;
    this.formData.email = form.value.email;
    this.formData.tel = form.value.tel;
    this.formData.address=form.value.address;
    this.formData.postalcode = form.value.postalcode;
    this.formData.country = form.value.country;
    this.formData.card = form.value.card;
    this.formData.cardno = form.value.cardno;
    this.formData.securitycode = form.value.securitycode;
    this.formData.nameoncard = form.value.nameoncard;


    // this method will reset form 
    form.reset();

   //set the default value again - for form control after resetting
   form.controls['country'].setValue('India');
   form.controls[`card`].setValue(`Master Card`);
 
  }
  data:boolean=false;
  show(){
    this.data=true;
  }

  checkEmail(email){
    console.log(`email`, email.value);// to get exact value
    
     const domain=email.value.substring(email.value.lastIndexOf(`@`)+1);
       if(domain.includes(`codemind.com`))
     {
       this.isEmailValid=false;
     }
      else{
       this.isEmailValid=true;
      }
  }
}
