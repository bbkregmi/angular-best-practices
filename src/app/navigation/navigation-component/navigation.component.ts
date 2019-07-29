import { Component } from '@angular/core';
import { NavItem } from '../navigation-model/nav-item.model';
import { NavigationData } from './navigation.data';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent {

  navItems: NavItem[] = NavigationData;

  constructor(
    private router: Router
  ) {}

  onNavItemClicked(navItem: NavItem) {
    this.router.navigateByUrl(navItem.link);
  }

  navItemsTrackFun(index: number, navItem: NavItem) {
    return index;
  }
}
