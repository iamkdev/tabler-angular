import { Component } from '@angular/core'
import { FormGroup } from '@angular/forms'
import { Field } from '@tabler/angular-forms'

@Component({
  selector: 'app-forms-demo-advanced',
  template: `
    <div class="row">
      <div class="col">
        <ui-form [form]="form" [fields]="fields" [model]="model"></ui-form>
      </div>
      <div class="col">
        <app-docs-json [model]="model"></app-docs-json>
      </div>
    </div>
  `,
})
export class FormsAdvancedComponent {

  public model = {}

  public form = new FormGroup({})

  public fields = [
    Field.radio('color', {
      label: 'Favorite color',
      options: [
        { value: 'No preference', key: null },
        { value: 'Green', key: 'green' },
        { value: 'Blue', key: 'blue' },
      ],
    }),
    Field.textarea('reason', {
      expressionProperties: {
        'templateOptions.label': '`Why did you choose ${model.color}?`',
        'templateOptions.labelClasses': '`text-success`',
      },
      hideExpression: '!model.color',
    }),
  ]

}
