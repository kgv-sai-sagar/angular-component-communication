import { Component, Input } from "@angular/core";

@Component({
  selector: "my-rental-list",
  templateUrl: "./rental-list.component.html",
  styleUrls: []
})
export class RentalListComponent {
  // @Input()
  // Decorator that marks a class field as an input property and supplies configuration metadata. The input property is bound to a DOM property in the template. During change detection, Angular automatically updates the data property with the DOM property's value.
  // myList or rental  is a variable that is being passed on to this component from it's parent or child.e.g

  @Input() rentalList;
  @Input() myList;
}
