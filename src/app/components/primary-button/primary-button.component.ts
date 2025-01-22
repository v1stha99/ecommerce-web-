import { Component, input, output } from '@angular/core';

@Component({
  selector: 'app-primary-button',
  imports: [],
  template: `
    <button
      class="bg-blue-500 text-white w-full border px-5 py-2 rounded-xl shadow-md hover:opacity-90"
      [disabled]="disabled()"
      (click)="btnClicked.emit()"
    >
      <span class="text-md">{{ label() }}</span>
    </button>
  `,
  styles: ``,
})
export class PrimaryButtonComponent {
  label = input<string>(); // Input for the button label
  disabled = input<boolean>(); // Input for the disabled state, expected as boolean

  btnClicked = output(); // Output for the button click event
}
