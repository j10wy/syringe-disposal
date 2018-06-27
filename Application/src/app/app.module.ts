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
import { VolunteerDetailsComponent } from './components/volunteers/volunteer-details/volunteer-details.component';
import { VolunteerCreateComponent } from './components/volunteers/volunteer-create/volunteer-create.component';
import { VolunteerListComponent } from './components/volunteers/volunteer-list/volunteer-list.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { AppMaterialModule } from './app-material.module';

@NgModule({
	declarations: [
		AppComponent,
		HomeComponent,
		TrimmerPipe,
		LoggerDirective,
		DashboardComponent,
		NavbarComponent,
		SandboxComponent,
		VolunteerDetailsComponent,
		VolunteerCreateComponent,
		VolunteerListComponent,
		NotFoundComponent
	],
	imports: [AppRoutingModule, BrowserModule, AppMaterialModule],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule {}
