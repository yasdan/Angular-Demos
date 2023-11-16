import { Component,OnInit } from '@angular/core';
import { AddEmployeeRequest } from '../models/add-employee-request.model';
import { EmployeeService } from '../services/employee.service';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements OnInit {

     employees:AddEmployeeRequest[]=[];
     private empsubscription?:Subscription;
     constructor(private empservice:EmployeeService ){
        
     }

     ngOnInit(): void {
       this.getEmployees();
     }
     getEmployees(){
      this.empsubscription=this.empservice.getEmployees().subscribe({
      next:(employees)=>{this.employees= employees}});
      //this.empsubscription?.unsubscribe();
     }
     /* ngOnDestroy(){
      this.empsubscription?.unsubscribe();
     } */

}
