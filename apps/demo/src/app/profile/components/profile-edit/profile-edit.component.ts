import { Component, Input } from '@angular/core'

@Component({
  selector: 'app-profile-edit',
  template: `
    <div class="card">
      <div class="card-header">
        <h3 class="card-title">My Profile</h3>
      </div>
      <div class="card-body">
        <form>
          <div class="row">
            <div class="col-auto">
              <ui-avatar size="xl" [image]="user.photo"></ui-avatar>
            </div>
            <div class="col">
              <div class="form-group">
                <label class="form-label">Email-Address</label>
                <input class="form-control" placeholder="your-email@domain.com"/>
              </div>
            </div>
          </div>

          <div class="form-group">
            <label class="form-label">Bio</label>
            <textarea class="form-control" rows="5">Big belly rude boy, million dollar hustler. Unemployed.</textarea>
          </div>

          <div class="form-group">
            <label class="form-label">Email-Address</label>
            <input class="form-control" placeholder="your-email@domain.com"/>
          </div>

          <div class="form-group">
            <label class="form-label">Password</label>
            <input type="password" class="form-control" value="password"/>
          </div>

          <div class="form-footer">
            <button class="btn btn-primary btn-block">Save</button>
          </div>
        </form>
      </div>
    </div>
  `,
  styles: []
})
export class ProfileEditComponent {
  @Input() public user
}
