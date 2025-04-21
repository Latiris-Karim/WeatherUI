import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DatasharingService {
  private _weatherData:any = ""

  constructor() {}

  
  set weatherData(weather:any){
    this._weatherData = weather
  }

  get weatherData(){
    return this._weatherData
  }
}
