import { Component, OnInit } from '@angular/core';
import {StudentService} from '../student.service';

@Component({
  selector: 'app-employers',
  templateUrl: './employers.component.html',
  styleUrls: ['./employers.component.css']
})
export class EmployersComponent implements OnInit {

  constructor(private student:StudentService) { }

  ngOnInit(): void {
    this.student.getAllStudent().subscribe((allData)=>{
      console.log(allData);
    });
    
    }
  }
