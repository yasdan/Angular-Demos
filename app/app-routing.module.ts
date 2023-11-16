import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// import employees component 
import { EmployeesComponent } from './features/employee/employees/employees.component';
import { AddEmployeeComponent } from './features/employee/add-employee/add-employee.component';


// add routing paths for specific
const routes: Routes = [
  {
    path:'admin/employees',
    component:EmployeesComponent
  },
  {
    path:'admin/employees/add',
    component:AddEmployeeComponent
  }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
