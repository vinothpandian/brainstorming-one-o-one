import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-left",
  templateUrl: "./left.component.html",
  styleUrls: ["./left.component.scss"]
})
export class LeftComponent implements OnInit {
  @Input() floatterSrc: string = "";
  @Input() floatterAlt: string = "";
  @Input() floatterPosition: string = "";
  @Input() imageSrc: string = "";
  @Input() imageAlt: string = "";
  @Input() text: string = "";

  constructor() {}

  ngOnInit() {}
}
