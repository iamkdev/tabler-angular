import { Component, OnInit } from '@angular/core'

@Component({
  selector: 'app-gallery-page-options',
  template: `
    <div class="page-options d-flex">
      <select class="form-control custom-select w-auto">
        <option value="asc">Newest</option>
        <option value="desc">Oldest</option>
      </select>
      <div class="input-icon ml-2">
        <span class="input-icon-addon">
          <i class="fe fe-search"></i>
        </span>
        <input type="text" class="form-control w-10" placeholder="Search photo">
      </div>
    </div>
    
  `,
  styles: [],
})
export class GalleryPageOptionsComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
