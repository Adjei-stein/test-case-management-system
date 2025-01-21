import { Component, OnInit, ChangeDetectionStrategy, inject, signal } from '@angular/core';
import { FormGroup, FormControl, FormArray, FormBuilder, Validators, AbstractControl } from '@angular/forms';
import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { MdbFormsModule } from 'mdb-angular-ui-kit/forms'; // If you're using MDB UI Kit
import {LiveAnnouncer} from '@angular/cdk/a11y';
import { ReactiveFormsModule } from '@angular/forms';
import { MatChipEditedEvent, MatChipInputEvent, MatChipsModule } from '@angular/material/chips'; // Material Chips Module
import { MatButtonModule } from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';

export interface Emails {
  name: string;
}

@Component({
  selector: 'app-project-details',
  imports: [MdbFormsModule, ReactiveFormsModule, MatChipsModule, MatIconModule, MatFormFieldModule, MatButtonModule],
  templateUrl: './project-details.component.html',
  styleUrl: './project-details.component.scss'
})
export class ProjectDetailsComponent {
  readonly addOnBlur = true;
  readonly separatorKeysCodes = [ENTER, COMMA] as const;
  readonly emails = signal<Emails[]>([]);
  readonly announcer = inject(LiveAnnouncer);

  add(event: MatChipInputEvent): void {
    const value = (event.value || '').trim();

    // Add our email
    if (value) {
      this.emails.update(emails => [...emails, {name: value}]);
    }

    // Clear the input value
    event.chipInput!.clear();
  }

  remove(email: Emails): void {
    this.emails.update(emails => {
      const index = emails.indexOf(email);
      if (index < 0) {
        return emails;
      }

      emails.splice(index, 1);
      this.announcer.announce(`Removed ${email.name}`);
      return [...emails];
    });
  }

  edit(email: Emails, event: MatChipEditedEvent) {
    const value = event.value.trim();

    // Remove email if it no longer has a name
    if (!value) {
      this.remove(email);
      return;
    }

    // Edit existing email
    this.emails.update(emails => {
      const index = emails.indexOf(email);
      if (index >= 0) {
        emails[index].name = value;
        return [...emails];
      }
      return emails;
    });
  }

    /* public separatorKeysCodes = [ENTER, COMMA];
    public emailList: { value: any; invalid: boolean }[] = [];
    removable = true;
    rulesForm!: FormGroup;
  
    constructor(private fb: FormBuilder) {}
  
    ngOnInit() {
      this.rulesForm = this.fb.group({
        firstname: ['', Validators.required],
        lastname: ['', Validators.required],
        emails: this.fb.array([], [this.validateArrayNotEmpty]),
      });
    }
  
    // Helper method to get the email FormArray
    get emails(): FormArray {
      return this.rulesForm.get('emails') as FormArray;
    }
  
    add(event: any): void {
      const email = event.value;
      if (email) {
        if (this.validateEmail(email)) {
          this.emails.push(new FormControl(email, [Validators.required, Validators.email]));
          this.emailList.push({ value: email, invalid: false });
        } else {
          this.emailList.push({ value: email, invalid: true });
          this.rulesForm.controls['emails'].setErrors({ 'incorrectEmail': true });
        }
      }
      if (event.input) {
        event.input.value = '';  // Clear the input field after adding the email
      }
    }
  
    removeEmail(data: any): void {
      const index = this.emailList.indexOf(data);
      if (index >= 0) {
        this.emailList.splice(index, 1);
        this.emails.removeAt(index);  // Remove email from the FormArray as well
      }
    }
  
    private validateArrayNotEmpty(c: AbstractControl) {
      if (c.value && c.value.length === 0) {
        return {
          validateArrayNotEmpty: { valid: false }
        };
      }
      return null;
    }
  
    private validateEmail(email: string) {
      const re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
      return re.test(String(email).toLowerCase());
    } */
  
    // Submit handler
    /* onSubmit() {
      if (this.rulesForm.valid) {
        console.log('Form submitted', this.rulesForm.value);
      }
    } */
}
