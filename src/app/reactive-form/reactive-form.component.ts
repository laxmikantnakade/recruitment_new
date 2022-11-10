import { Component, OnInit } from '@angular/core';
import { Validators,FormBuilder} from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {

  registerForm:any;
  submitted=false;

  constructor(private fb:FormBuilder) { }

  ngOnInit() {
    this.registerForm=this.fb.group({
      fname:['',Validators.required],
      sname:['',Validators.required,Validators.email],
      email:['',Validators.required],
      address:['',Validators.required],
      tag:['',Validators.required]

    })

  }

  get registerFormControl()
  {
    return this.registerForm.controls;
  }

  onsubmit(){
    this.submitted=true;
    if(this.registerForm.valid){
      alert('Form Submitted Successfully');
      console.table(this.registerForm.value);
    }
  }
  
}

