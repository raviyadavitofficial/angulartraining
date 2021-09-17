import { PipeCollector } from '@angular/compiler/src/template_parser/binding_parser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ColorInputDirectiveDirective } from './Directive/color-input-directive.directive';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { ExpressionComponent } from './expression/expression.component';
import { HonmeComponent } from './honme/honme.component';
import { LoginComponent } from './login/login.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { PipeDemoComponent } from './pipe-demo/pipe-demo.component';
import { ProductDetailsComponent } from './product-details/product-details.component';

const routes: Routes = [
  {path:'',component:HonmeComponent},
  {path:'home',component:HonmeComponent},
  {path:'about',component:AboutComponent},
  {path:'login',component:LoginComponent},
  // {path:'directive',component:ColorInputDirectiveDirective},
  {path:'expression',component:ExpressionComponent},
  {path:'pipe',component:PipeDemoComponent},
  {path:'product',component:ProductDetailsComponent},
  {path:'employee-list',component:EmployeeListComponent},
  {path:'**',component:PagenotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
