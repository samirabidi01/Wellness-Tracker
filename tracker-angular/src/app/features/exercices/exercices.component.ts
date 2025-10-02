import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from '../../shared/components/layout/layout.component'; 
import { ExercicesCardComponent } from '../../shared/components/exercices-card/exercices-card.component'; 
import { WelnessComponent } from '../../shared/components/welness/welness.component'; 
@Component({
  selector: 'app-exercices',
  standalone: true,
  imports: [
    CommonModule,
    ExercicesCardComponent,
    WelnessComponent,
    LayoutComponent, 
 
    
  ],
  templateUrl: './exercices.component.html',
  styleUrl: './exercices.component.scss'
})
export class ExercicesComponent {

}
