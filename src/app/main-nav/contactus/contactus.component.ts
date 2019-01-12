import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders, HttpClientModule} from '@angular/common/http';
import { FormGroup, FormsModule, ReactiveFormsModule, FormControl, FormBuilder } from '@angular/forms'
import {MatRadioModule} from '@angular/material/radio';

@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.css']
})

export class ContactusComponent implements OnInit {

  public contactusForm:FormGroup;
  public formSubmitted:boolean;
  public defaultPhone: string = 'Mobile';
 
  public phoneTypes = [
    'Mobile',
    'Home'
  ];

//public http:HttpClient,
  constructor( fb:FormBuilder) { 
    this.contactusForm = fb.group({
      'email':[],
      'firstName':[],
      'lastName':[],
      'phoneNumber':[],
      'phoneType':[],
      // 'reason':[],
      'description':[]
    });
  }

  ngOnInit() {
    this.formSubmitted = false;
  }


  // public httpRequest():void{

  //   this.http.get('httphere')
  //   .subscribe(
  //     data => {

  //     },
  //     error =>{
        
  //     }
  //   )
  // }

  public submitClick():void{
    console.log(this.contactusForm.value);

    //this.http.post('',this.contactusForm.value)
    // .subscribe({

    // });
    //code to send email here
    this.formSubmitted = true;
  }

  public sendEmail():void{

    
  }
}
