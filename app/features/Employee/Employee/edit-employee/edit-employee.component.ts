import { Component,OnDestroy } from '@angular/core';
import { EmployeeService } from '../services/employee.service';
import { AddEmployeeRequest } from '../models/add-employee-request.model';
import { Subscription } from  'rxjs';

@Component({
  selector: 'app-edit-employee',
  templateUrl: './edit-employee.component.html',
  styleUrls: ['./edit-employee.component.css']
})
export class EditEmployeeComponent implements OnDestroy{

  model: AddEmployeeRequest;
   private employeesubscription?:Subscription;
   //private id:string ='';
   // inject employee service variable within constructor
   constructor( private empservice: EmployeeService){
    this.model={
      id:'',
      name:'',
      designation:'',
      city:' ',
      email:' ',
      phone:' '
    }
  }
    onFormSubmit(){
      this.employeesubscription= this.empservice.editEmployee(this.model.id,this.model).subscribe({
         next:(response)=>{
           console.log("Successfully Updated");
         }
       })
    }

    ngOnDestroy(): void {
      
      this.employeesubscription?.unsubscribe();
    }
}

