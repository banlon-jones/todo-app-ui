import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {RouterLink} from '@angular/router';
import {GoogleAuthComponent} from '../google-auth/google-auth.component';

@Component({
  selector: 'app-sign-in-form',
  imports: [
    ReactiveFormsModule,
    RouterLink,
    GoogleAuthComponent
  ],
  templateUrl: './sign-in-form.component.html',
  styleUrl: './sign-in-form.component.css'
})
export class SignInFormComponent implements OnInit {
  signInForm: any;

  ngOnInit() {
    this.signInForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.minLength(6)]),
    })
  }

  onSubmit() {
    if (this.signInForm.valid) {
      console.log('Form Submitted!', this.signInForm.value);
      // Perform sign-in logic here
    } else {
      console.log('Form is invalid');
    }
  }

}
