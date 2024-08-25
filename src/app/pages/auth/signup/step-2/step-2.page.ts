import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { USER_MODEL } from 'src/app/models/user.mode';

@Component({
  selector: 'app-step-2',
  templateUrl: './step-2.page.html',
  styleUrls: ['./step-2.page.scss'],
})
export class Step2Page implements OnInit {
  form = new FormGroup({
    username: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
      Validators.pattern('^[a-zA-Z0-9_-]+$'),
    ]),
  });

  canShowError: boolean = false;

  constructor(private router: Router) {}

  ngOnInit() {
    this.form.statusChanges.subscribe((status) => {
      if (status === 'INVALID' && this.form.controls.username.value === '') {
        this.canShowError = false;
        this.form.controls.username.setErrors(null);
      }
    });
  }

  submit() {
    this.canShowError = true;
    if (this.form.controls.username.valid) {
      const usernameValue = this.form.controls.username.value ?? '';

      if (this.checkUsername(usernameValue)) {
        console.error('Nombre de usuario ya existe');
        this.form.controls.username.setErrors({ usernameTaken: true });
      } else {
        this.router.navigate(['/signup/step-3']);
      }
    } else {
      console.error('Nombre de usuario no válido');
      this.form.controls.username.markAsTouched();
    }
  }

  checkUsername(username: string): boolean {
    return USER_MODEL.some(
      (user) => user.username.toLowerCase() === username.toLowerCase()
    );
  }
}
