import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MyBioDataComponent } from './my-biodata.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ExpressionComponent } from './expression/expression.component';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { PipeDemoComponent } from './pipe-demo/pipe-demo.component';
import { CustomMultiplier } from './expression/pipes/CustomMultiplierPipe';
import { SecondCustomPipePipe } from './expression/pipes/second-custom-pipe.pipe';
import { ColorDirectiveDirective } from './expression/color-directive.directive';
import { ColorInputDirectiveDirective } from './Directive/color-input-directive.directive';
import { HonmeComponent } from './honme/honme.component';
import { AboutComponent } from './about/about.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';

@NgModule({
  declarations: [
    AppComponent,
    MyBioDataComponent,
    HeaderComponent,
    FooterComponent,
    ExpressionComponent,
    LoginComponent,
    ProductDetailsComponent,
    PipeDemoComponent,
    CustomMultiplier,
    SecondCustomPipePipe,
    ColorDirectiveDirective,
    ColorInputDirectiveDirective,
    HonmeComponent,
    AboutComponent,
    PagenotfoundComponent,
    EmployeeListComponent,
    EmployeeDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
