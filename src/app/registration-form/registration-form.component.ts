import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-registration-form',
  templateUrl: './registration-form.component.html',
  styleUrls: ['./registration-form.component.css']
})
export class RegistrationFormComponent implements OnInit {
  registrationForm!: FormGroup;
  dynamicFormArray:any;

  constructor(private httpClient:HttpClient, private fb:FormBuilder) { }

  ngOnInit() {
    //creating blank formGroup
    this.registrationForm = this.fb.group({
      //controls are bind dynamically from api response
        //so create on method for formControl binding

    });

    this.httpClient.get('/assets/DynamicFormControl.json').subscribe(data => {
      this.dynamicFormArray = data;
      //call method here so once response binded to dynamicFormArray
        //then bind formControl w/ HTML control
      this.createFormControl();
    })
  }

  createFormControl(){
    //create formControl based on dynamicFormArray
      //element = obj w/ id:string
    this.dynamicFormArray.forEach((element: { ID: string; }) => {
      this.registrationForm.addControl(element.ID, new FormControl(''))
    })
  }

}
