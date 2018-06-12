import { Component, OnInit } from "@angular/core";
import { Hero } from "../hero";

@Component({
  selector: "app-dc-universe",
  templateUrl: "./dc-universe.component.html",
  styleUrls: ["./dc-universe.component.css"]
})
export class DcUniverseComponent implements OnInit {
  hero: Hero = {
    id: 2,
    name: "Batman"
  };
  constructor() {}

  ngOnInit() {}
}
