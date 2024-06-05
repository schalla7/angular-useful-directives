import { Component } from '@angular/core';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CreditCardDirective } from '../credit-card.directive';


@Component({
  selector: 'app-myform',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    NgbModule,  // ng-bootstrap
    CreditCardDirective,
  ],
  templateUrl: './myform.component.html',
  styleUrl: './myform.component.css'
})
export class MyformComponent {

  timmyForm!: FormGroup;

  onSubmit() {
    console.log("onSubmit was clicked");
  }
}
