import { Component, Input } from '@angular/core'

@Component({
  selector: 'app-card-members',
  template: `
    <div class="card">
      <div class="card-header">
        <h3 class="card-title">Members</h3>
      </div>

      <div class="card-body o-auto" style="height: 15rem">
        <ul class="list-unstyled list-separated">

          
          <li class="list-separated-item" *ngFor="let user of users">
            <div class="row align-items-center">
              <div class="col-auto">
                <app-avatar [image]="user.photo"></app-avatar>
              </div>
              <div class="col">
                <div>
                  <a href="javascript:void(0)" class="text-inherit">{{ user.name }} {{ user.surname }}</a>
                </div>
                <small class="d-block item-except text-sm text-muted h-1x">{{ user.email }}</small>
              </div>
              <div class="col-auto">
                <div class="item-action dropdown">
                  <a href="javascript:void(0)" data-toggle="dropdown" class="icon"><i class="fe fe-more-vertical"></i></a>
                  <div class="dropdown-menu dropdown-menu-right">
                    <a href="javascript:void(0)" class="dropdown-item">
                      <i class="dropdown-icon fe fe-tag"></i> Action </a>
                    <a href="javascript:void(0)" class="dropdown-item">
                      <i class="dropdown-icon fe fe-edit-2"></i> Another action </a>
                    <a href="javascript:void(0)" class="dropdown-item">
                      <i class="dropdown-icon fe fe-message-square"></i> Something else here</a>
                    <div class="dropdown-divider"></div>
                    <a href="javascript:void(0)" class="dropdown-item">
                      <i class="dropdown-icon fe fe-link"></i> Separated link</a>
                  </div>
                </div>
              </div>
            </div>
          </li>
          

        </ul>
      </div>
    </div>
  `,
  styles: []
})
export class CardMembersComponent {
  @Input() users

  get members() {
    return this.users.slice(30, 36)
  }
}
