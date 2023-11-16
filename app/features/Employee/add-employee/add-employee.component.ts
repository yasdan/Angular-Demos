import { Component, OnDestroy } from '@angular/core';
import { AddEmployeeRequest } from '../models/add-employee-request.model';
// import employee services
import { EmployeeService } from '../services/employee.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnDestroy {

   model: AddEmployeeRequest;
   private employeesubscription?:Subscription;
   // inject employee service variable within constructor
   constructor( private empservice: EmployeeService){
    this.model={
      name:'',
      designation:'',
      city:' ',
      email:' ',
      phone:' '
    }
   }
  
  onFormSubmit(){

   this.employeesubscription= this.empservice.addEmployee(this.model).subscribe({
      next:(response)=>{
        console.log("Successfully Submitted");
      }
    })
 // console.log(this.model);
  }

  ngOnDestroy(): void {
    //throw new Error('Method not implemented.');
    this.employeesubscription?.unsubscribe();
  }
}
