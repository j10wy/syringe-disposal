import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { VolunteersComponent } from './components/volunteers/volunteers.component';
import { SubmitComponent } from './components/submit/submit.component';

const routes: Routes = [
	{ path: '', component: HomeComponent },
	{ path: 'home', component: HomeComponent },
	{ path: 'volunteers', component: VolunteersComponent },
	{ path: 'submit-request', component: SubmitComponent }
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule {}
