
import { DataCenterServicesComponent } from './data-center-services/data-center-services.component';
// app-routing.module.ts
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component'; // Import the HomeComponent
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

import { DatabaseManagementComponent } from './database-management/database-management.component';
import { ManagedServicessComponent } from './managed-servicess/managed-servicess.component';
import { NetworkManagementComponent } from './network-management/network-management.component';
import { ApplicationManagementComponent } from './application-management/application-management.component';
import { RemoteInfrastructureManagementComponent } from './remote-infrastructure-management/remote-infrastructure-management.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { WelcomeComponent } from './pages/welcome/welcome.component';
import { DashbordComponent } from './dashbord/dashbord.component';
import { ManageUserComponent } from './manage-user/manage-user.component';
import { ManageProductComponent } from './manage-product/manage-product.component';
import { PostCategoryComponent } from './post-category/post-category.component';
import { PostProductComponent } from './post-product/post-product.component';
import { ComputerHardwareComponent } from './computer-hardware/computer-hardware.component';
import { CartComponent } from './cart/cart.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: 'home',
    component: HomeComponent,
 
  },
  { path: 'azure', component: AzureCloudComponent },
  { path: 'data', component: DataCenterCoLocationComponent },
  { path: 'aboutus', component: AboutusComponent },
  { path: 'events', component: EventsComponent },
  { path: 'meritotech', component: MeritotechComponent },
  { path: 'microsoft', component: MicrosoftComponent },
  { path: 'career', component: CareerComponent },
  { path: 'life', component: LifeComponent },
  { path: 'itSecurity', component: ServiceItSecurityComponent },
  { path: 'digial', component: ServiceDigitalTransformationComponent },
  { path: 'enduser', component: EndUserInterfaceComponent },
  { path: 'automation', component: AutomationComponent },
  { path: 'itsm', component: ItsmComponent },
  { path: 'devops', component: DevopsComponent },
  { path: 'processoutsource', component: ProcessOutSourceComponent },
  { path: 'data-center-services', component: DataCenterServicesComponent },
  { path: 'database-management', component: DatabaseManagementComponent },
  { path: 'magedservices', component: ManagedServicessComponent },
  { path: 'network-management', component: NetworkManagementComponent },
  { path: 'application-management', component: ApplicationManagementComponent },
  { path: 'remote-infrastructure-management', component: RemoteInfrastructureManagementComponent },
  
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  { path: 'welcome', component: WelcomeComponent },
  { path: 'computer', component: ComputerHardwareComponent },
  { path: 'dashbord', component: DashbordComponent },
  { path: 'manage-user', component: ManageUserComponent },
  { path: 'manage-product', component: ManageProductComponent },
  { path: 'category', component: PostCategoryComponent },
  { path: 'product', component: PostProductComponent },
  { path: 'cartC', component: CartComponent },
  { path: '**', redirectTo: '/home', pathMatch: 'full' } 

  

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
