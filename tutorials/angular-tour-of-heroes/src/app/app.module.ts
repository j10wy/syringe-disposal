import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { AppComponent } from "./app.component";
import { HeroesComponent } from "./heroes/heroes.component";
import { DcUniverseComponent } from "./dc-universe/dc-universe.component";
import { MarvelUniverseComponent } from "./marvel-universe/marvel-universe.component";

@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent,
    DcUniverseComponent,
    MarvelUniverseComponent
  ],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
