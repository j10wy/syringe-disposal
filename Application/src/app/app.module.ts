import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { TrimmerPipe } from './pipes/trimmer.pipe';
import { LoggerDirective } from './directives/logger.directive';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SandboxComponent } from './components/sandbox/sandbox.component';

@NgModule({
	declarations: [AppComponent, HomeComponent, TrimmerPipe, LoggerDirective, NavbarComponent, SandboxComponent],
	imports: [AppRoutingModule, BrowserModule],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule {}
