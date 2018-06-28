import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { TrimmerPipe } from './pipes/trimmer.pipe';
import { LoggerDirective } from './directives/logger.directive';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SandboxComponent } from './components/sandbox/sandbox.component';
import { VolunteersComponent } from './components/volunteers/volunteers.component';
import { VolunteerDetailsComponent } from './components/volunteers/volunteer-details/volunteer-details.component';
import { VolunteerCreateComponent } from './components/volunteers/volunteer-create/volunteer-create.component';
import { VolunteerListComponent } from './components/volunteers/volunteer-list/volunteer-list.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { AppMaterialModule } from './app-material.module';
import { DrawerComponent } from './components/drawer/drawer.component';
import { SubmitComponent } from './components/submit/submit.component';

@NgModule({
	declarations: [
		AppComponent,
		HomeComponent,
		TrimmerPipe,
		LoggerDirective,
		DashboardComponent,
		NavbarComponent,
		SandboxComponent,
		VolunteersComponent,
		VolunteerDetailsComponent,
		VolunteerCreateComponent,
		VolunteerListComponent,
		NotFoundComponent,
		DrawerComponent,
		SubmitComponent
	],
	imports: [AppRoutingModule, BrowserModule, AppMaterialModule],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule {}
