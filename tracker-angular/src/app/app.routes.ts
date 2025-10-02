import { Routes } from '@angular/router';
import { WaterComponent } from './features/water/water.component'; 
import { StepsComponent } from './features/steps/steps.component';
import { SleepComponent } from './features/sleep/sleep.component'; 
import { MoodsComponent } from './features/moods/moods.component'; 
import { MealsComponent } from './features/meals/meals.component'; 
import { GoalsComponent } from './features/goals/goals.component'; 
import { ExercicesComponent } from './features/exercices/exercices.component'; 
import { DashboardComponent } from './features/dashboard/dashboard.component'; 
export const routes: Routes = [
    { path: 'water', component: WaterComponent },
    { path: 'step', component: StepsComponent },
    { path: 'sleep', component: SleepComponent },
    { path: 'mood', component: MoodsComponent },
    { path: 'meal', component: MealsComponent },
    { path: 'goal', component: GoalsComponent },
    { path: 'exercise', component: ExercicesComponent },
    { path: '', component: DashboardComponent },

];
