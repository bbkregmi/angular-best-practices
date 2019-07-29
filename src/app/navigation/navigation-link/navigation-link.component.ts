import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { NavItem } from '../navigation-model/nav-item.model';

@Component({
  selector: 'app-nav-link',
  templateUrl: './navigation-link.component.html',
  styleUrls: ['./navigation-link.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NavigationLinkComponent {

  @Input()
  navItem: NavItem;

  @Output()
  itemClicked = new EventEmitter<NavItem>();

  constructor(

  ){}

  onNavItemClick() {
    this.itemClicked.emit(this.navItem);
  }
}
