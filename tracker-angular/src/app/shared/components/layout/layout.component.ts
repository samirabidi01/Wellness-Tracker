import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';

interface NavItem {
  name: string;
  icon: string;
  path: string;
}

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [CommonModule, MatIconModule, RouterModule],
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent {
  collapsed = false;

  navigation: NavItem[] = [
    { name: 'Dashboard', icon: 'home', path: '/' },
    { name: 'Water', icon: 'local_drink', path: '/water' },
    { name: 'Sleep', icon: 'bedtime', path: '/sleep' },
    { name: 'Step', icon: 'directions_walk', path: '/step' },
    { name: 'Mood', icon: 'sentiment_satisfied', path: '/mood' },
    { name: 'Meal', icon: 'restaurant', path: '/meal' },
    { name: 'Exercise', icon: 'fitness_center', path: '/exercise' },
    { name: 'Goals', icon: 'emoji_events', path: '/goal' },
  ];

  toggleSidebar() {
    this.collapsed = !this.collapsed;
  }
}
