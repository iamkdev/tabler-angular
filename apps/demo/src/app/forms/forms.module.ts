import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { SharedModule } from '@tabler/angular-core'
import { FormsDynamicComponent } from './containers/forms-dynamic/forms-dynamic.component'
import { FormsIndexComponent } from './containers/forms-index/forms-index.component'
import { FormsInputImageComponent } from './components/forms-input-image/forms-input-image.component'
import { FormsInputColorComponent } from './components/forms-input-color/forms-input-color.component'
import { FormsInputIconComponent } from './components/forms-input-icon/forms-input-icon.component'
import { FormsInputToggleComponent } from './components/forms-input-toggle/forms-input-toggle.component'
import { FormsFormFieldsetComponent } from './components/forms-form-fieldset/forms-form-fieldset.component'
import { FormsDemoComponent } from './components/forms-demo/forms-demo.component'

const routes: Routes = [
  { path: '', redirectTo: 'elements', pathMatch: 'full' },
  { path: 'elements', component: FormsIndexComponent },
  { path: 'dynamic', component: FormsDynamicComponent },
]

@NgModule({
  imports: [SharedModule, RouterModule.forChild(routes)],
  declarations: [
    FormsDynamicComponent,
    FormsIndexComponent,
    FormsInputImageComponent,
    FormsInputColorComponent,
    FormsInputIconComponent,
    FormsInputToggleComponent,
    FormsFormFieldsetComponent,
    FormsDemoComponent,
  ],
})
export class FormsModule {}
