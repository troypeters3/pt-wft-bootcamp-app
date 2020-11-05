import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'pt-wft-bootcamp-app';
  addVals(value1: string, value2: string) {
	var total = 0;
	if(!isNaN(Number(value1))){
		var int_val1 = Number(value1);
		total += int_val1;
	} else {
		console.log('Value 1 is not a Number');
	}
	if(!isNaN(Number(value2))){
		var int_val2 = Number(value2);
		total += int_val2;
	} else {
		console.log('Value 2 is not a Number');
	}
	console.log(total)
	document.write("The total of " + int_val1 + " and " + int_val2 + " is:  " + total + ".");
  }
}
