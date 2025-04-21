import { Component } from '@angular/core';
import { DatasharingService } from '../services/datasharing.service';
@Component({
  selector: 'app-displayweather',
  standalone: true,
  imports: [],
  templateUrl: './displayweather.component.html',
  styleUrl: './displayweather.component.scss'
})
export class DisplayweatherComponent {
  weatherobject:any = ""
  address:any =""

  constructor(private data:DatasharingService){}

ngOnInit(){
  this.weatherobject = this.data.weatherData
  
  console.log("here is your weather data:", this.weatherobject)
}
}
