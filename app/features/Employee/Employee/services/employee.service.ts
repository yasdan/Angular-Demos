import { Injectable } from '@angular/core';
import { AddEmployeeRequest } from '../models/add-employee-request.model';
import { Observable } from 'rxjs';

// needed for Http client requests
import { HttpClient,HttpHeaders } from '@angular/common/http';
//import { AddEmployeeComponent } from '../add-employee/add-employee.component';

@Injectable({
  providedIn: 'root'
})

export class EmployeeService {

  constructor(private http:HttpClient) { }

  private employeeUrl = 'https://localhost:7207/api/Employee';  // URL to web api
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

 getEmployees(): Observable<AddEmployeeRequest[]>{
  return this.http.get<AddEmployeeRequest[]>(this.employeeUrl);
 }  
 
 addEmployee(model:AddEmployeeRequest): Observable<void>{

  return this.http.post<void>(this.employeeUrl,model);
 } 

 editEmployee(id:string, model:AddEmployeeRequest):Observable<void>{
  const url = `${this.employeeUrl}/${id}`;
  return this.http.put<void>(url,model);
 }

 getOneEmployee(id:string):Observable<AddEmployeeRequest>{
  const url = `${this.employeeUrl}/${id}`;
  return this.http.get<AddEmployeeRequest>(url);
 }

 deleteEmployee(id:string):Observable<void>{
  const url = `${this.employeeUrl}/${id}`;
  return this.http.delete<void>(url)

 }

}
