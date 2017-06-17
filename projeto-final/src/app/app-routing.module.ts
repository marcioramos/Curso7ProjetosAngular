import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// import { TemplateFormComponent } from "app/template-form/template-form.component";
// import { DataFormComponent } from "app/data-form/data-form.component";


const routes: Routes = [
   { path: '', redirectTo: './dashboard', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
