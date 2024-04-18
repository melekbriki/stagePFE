
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatSnackBarModule } from '@angular/material/snack-bar';

import { MatButtonModule } from '@angular/material/button';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { AzureCloudComponent } from './azure-cloud/azure-cloud.component';
import { DataCenterCoLocationComponent } from './data-center-co-location/data-center-co-location.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { EventsComponent } from './events/events.component';
import { MeritotechComponent } from './meritotech/meritotech.component';
import { MicrosoftComponent } from './microsoft/microsoft.component';
import { CareerComponent } from './career/career.component';
import { LifeComponent } from './life/life.component';
import { ServiceItSecurityComponent } from './service-it-security/service-it-security.component';
import { ServiceDigitalTransformationComponent } from './service-digital-transformation/service-digital-transformation.component';
import { EndUserInterfaceComponent } from './end-user-interface/end-user-interface.component';
import { AutomationComponent } from './automation/automation.component';
import { ItsmComponent } from './itsm/itsm.component';
import { DevopsComponent } from './devops/devops.component';
import { ProcessOutSourceComponent } from './process-out-source/process-out-source.component';
import { DataCenterServicesComponent } from './data-center-services/data-center-services.component';

import { DatabaseManagementComponent } from './database-management/database-management.component';

import { ManagedServicessComponent } from './managed-servicess/managed-servicess.component';
import { NetworkManagementComponent } from './network-management/network-management.component';
import { ApplicationManagementComponent } from './application-management/application-management.component';
import { RemoteInfrastructureManagementComponent } from './remote-infrastructure-management/remote-infrastructure-management.component';
import { RegisterComponent } from './pages/register/register.component';
import { LoginComponent } from './pages/login/login.component';
import { WelcomeComponent } from './pages/welcome/welcome.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthenticationService } from './services/authentification.service';
import { DashbordComponent } from './dashbord/dashbord.component';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ManageUserComponent } from './manage-user/manage-user.component';
import { ManageProductComponent } from './manage-product/manage-product.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { CommonModule } from '@angular/common';
import { PostCategoryComponent } from './post-category/post-category.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PostProductComponent } from './post-product/post-product.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    AzureCloudComponent,
    DataCenterCoLocationComponent,
    AboutusComponent,
    EventsComponent,
    MeritotechComponent,
    MicrosoftComponent,
    CareerComponent,
    LifeComponent,
    ServiceItSecurityComponent,
    ServiceDigitalTransformationComponent,
    EndUserInterfaceComponent,
    AutomationComponent,
    ItsmComponent,
    DevopsComponent,
    ProcessOutSourceComponent,
    DataCenterServicesComponent,
  
    DatabaseManagementComponent,
    ManagedServicessComponent,
    NetworkManagementComponent,
    ApplicationManagementComponent,
    RemoteInfrastructureManagementComponent,
    RegisterComponent,
    LoginComponent,
    WelcomeComponent,
    DashbordComponent,
    HeaderComponent,
    SidebarComponent,
    ManageUserComponent,
    ManageProductComponent,
    ForgotPasswordComponent,
    PostCategoryComponent,
    PostProductComponent
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    CommonModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatFormFieldModule,
    MatSelectModule,
    MatButtonModule,
    MatSnackBarModule
    
    
    
   
    
    
    
   
    
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
