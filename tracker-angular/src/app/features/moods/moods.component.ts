// moods.component.ts
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MoodCalendarComponent } from '../../shared/components/mood-calendar/mood-calendar.component'; 
import { MoodsCardComponent } from '../../shared/components/moods-card/moods-card.component'; 
import { LayoutComponent } from '../../shared/components/layout/layout.component'; 
@Component({
  selector: 'app-moods',
  standalone: true, 
  imports: [CommonModule, MoodCalendarComponent,LayoutComponent,MoodsCardComponent],
  templateUrl: './moods.component.html',
  styleUrls: ['./moods.component.scss']
})
export class MoodsComponent {}
