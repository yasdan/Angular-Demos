import { Injectable } from '@angular/core';
import { AddEmployeeRequest } from '../models/add-employee-request.model';
import { Observable } from 'rxjs';

// needed for Http client requests
import { HttpClient } from '@angular/common/http';
import { AddEmployeeComponent } from '../add-employee/add-employee.component';

@Injectable({
  providedIn: 'root'
})

export class EmployeeService {

  constructor(private http:HttpClient) { }

   //const employeeslist: any[]| AddEmployeeRequest[];

 getEmployees(): Observable<AddEmployeeRequest[]>{
  return this.http.get<AddEmployeeRequest[]>('https://localhost:7207/api/Employee');
 }  
 
 addEmployee(model:AddEmployeeRequest): Observable<void>{

  return this.http.post<void>('https://localhost:7207/api/Employee',model);
 } 


}
