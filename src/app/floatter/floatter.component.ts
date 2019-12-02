import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-floatter",
  templateUrl: "./floatter.component.html",
  styleUrls: ["./floatter.component.scss"]
})
export class FloatterComponent implements OnInit {
  @Input() src: string = "";
  @Input() alt: string = "";
  @Input() position: string = "";

  constructor() {}

  ngOnInit() {}
}
