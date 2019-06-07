import { Component, OnInit } from '@angular/core'

@Component({
  selector: 'app-forms-form-fieldset',
  template: `
    <fieldset class="form-fieldset">
      <div class="form-group">
        <label class="form-label">Full name<span class="form-required">*</span></label>
        <input type="text" class="form-control" />
      </div>
      <div class="form-group">
        <label class="form-label">Company<span class="form-required">*</span></label>
        <input type="text" class="form-control" />
      </div>
      <div class="form-group">
        <label class="form-label">Email<span class="form-required">*</span></label>
        <input type="email" class="form-control" />
      </div>
      <div class="form-group mb-0">
        <label class="form-label">Phone number</label>
        <input type="tel" class="form-control" />
      </div>
    </fieldset>
  `,
  styles: [],
})
export class FormsFormFieldsetComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
