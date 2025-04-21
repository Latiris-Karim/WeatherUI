import { Routes } from '@angular/router';
import { SelectweatherComponent } from './selectweather/selectweather.component';
import { DisplayweatherComponent } from './displayweather/displayweather.component';

export const routes: Routes = [
    {path: '', component:SelectweatherComponent},
    {path: 'weather', component:DisplayweatherComponent}
];
