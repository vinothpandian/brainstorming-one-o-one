import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-right",
  templateUrl: "./right.component.html",
  styleUrls: ["./right.component.scss"]
})
export class RightComponent implements OnInit {
  @Input() floatterSrc: string = "";
  @Input() floatterAlt: string = "";
  @Input() floatterPosition: string = "";
  @Input() imageSrc: string = "";
  @Input() imageAlt: string = "";
  @Input() text: string = "";
  constructor() {}

  ngOnInit() {}
}
