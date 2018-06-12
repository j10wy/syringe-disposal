import { Component, OnInit } from "@angular/core";
import { Hero } from "../hero";

@Component({
  selector: "app-marvel-universe",
  templateUrl: "./marvel-universe.component.html",
  styleUrls: ["./marvel-universe.component.css"]
})
export class MarvelUniverseComponent implements OnInit {
  hero: Hero = {
    id: 3,
    name: "Iron Man"
  };
  constructor() {}

  ngOnInit() {}
}
