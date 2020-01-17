import { Directive, Component, OnInit, ElementRef } from "@angular/core";

// @Directive({
//   selector: '[clickOutside]'
// })
@Component({
  selector: "app-multi-select",
  templateUrl: "./multi-select.component.html",
  styleUrls: ["./multi-select.component.css"]
})
export class MultiSelectComponent implements OnInit {
  constructor(private el: ElementRef) {}

  ngOnInit() {}

  userSelectsString = "";
  name = "Angular";
  userSelects = [];
  suggestions = [
    { id: "001", name: "mango" },
    { id: "002", name: "apple" },
    { id: "003", name: "banana" },
    { id: "004", name: "pine" },
    { id: "005", name: "orange" },
    { id: "006", name: "chery" },
    { id: "007", name: "watermelon" },
    { id: "008", name: "grapes" },
    { id: "009", name: "lemon" }
  ];
  x: boolean = true;
  show: boolean = false;

  suggest() {
    this.show = true;
    this.x = false;
  }

  isSelected(s: any) {
    return this.userSelects.findIndex(item => item.id === s.id) > -1
      ? true
      : false;
  }

  closeDropDown() {
    this.show = false;
  }

  // selectSuggestion(s) {
  //   if(this.userSelects.indexOf(s) > -1){
  //      this.userSelects = this.userSelects.replace(s,'');
  //   } else {
  //      this.userSelects += ' '+s;
  // }
  //   this.userSelects = this.userSelects.replace(/^\s*/,'');//.trim();
  //   this.deleteInvalidSelects();
  //   this.show = false;
  // }

  selectSuggestion(s) {
    this.userSelects.find(item => item.id === s.id)
      ? (this.userSelects = this.userSelects.filter(item => item.id !== s.id))
      : this.userSelects.push(s);
    // this.assignToNgModel();

    this.el.nativeElement
      .querySelector(".menu")
      .addEventListener("clickOutside", this.closeDropDown.bind(this));
  }

  // deleteInvalidSelects() {
  //  for(var user of this.invalidUsers){
  //     if(this.userSelects.indexOf(user) > -1){
  //        this.userSelects = this.userSelects.replace(user, ' ');
  //     }
  //   }
  // }

  deleteSelects(s) {
    this.userSelects = this.userSelects.filter(item => item.id !== s.id);
    // this.assignToNgModel();
  }

  assignToNgModel() {
    this.userSelectsString = "";
    this.userSelects.map(item => (this.userSelectsString += item.name + " "));
  }
}
