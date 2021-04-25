import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-registration-form',
  templateUrl: './registration-form.component.html',
  styleUrls: ['./registration-form.component.css']
})
export class RegistrationFormComponent implements OnInit {

  dynamicFormArray:any;

  constructor(private httpClient:HttpClient) { }

  ngOnInit() {
    this.httpClient.get('/assets/DynamicFormControl.json').subscribe(data => {
      this.dynamicFormArray = data;
      console.log(this.dynamicFormArray)
    })
  }

}
