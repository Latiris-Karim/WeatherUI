import { Component} from '@angular/core';
import { FormGroup,FormControl,ReactiveFormsModule } from '@angular/forms';
import { HttpParams } from '@angular/common/http';
import { HttprequestService } from '../services/httprequest.service';
import { DatasharingService } from '../services/datasharing.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-selectweather',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './selectweather.component.html',
  styleUrl: './selectweather.component.scss'
})


export class SelectweatherComponent {
  error: boolean = false
  

  weather = new FormGroup({
    city: new FormControl(''),
    time: new FormControl('today'),

  });
  
  constructor(private http: HttprequestService, private data: DatasharingService, private router: Router) {}
  
  submitForm() {
    const params = new HttpParams()
      .set('city', this.weather.value.city!)
      .set('timespan', this.weather.value.time!);
  
    this.http.get('weather',  {params} ).subscribe({
      next: (response: any) => {

      this.data.weatherData = response
      
      if (typeof response === 'string') {
        this.error = true;
      }

      if(this.error === false){
        this.router.navigate(['/weather'])
      }
      },
      error: (err) => {
        console.error('Error fetching weather data:', err);
      }
    });
    this.error = false
  }
}
  


