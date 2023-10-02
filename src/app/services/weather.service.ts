import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root',
})
export class WeatherService {
  constructor(private http: HttpClient) {}

  getWeatherData(cityname: string) {
    this.http.get<weatherData>(environment.weatherApiBaseUrl, {
      headers: new HttpHeaders()
        .set(
          environment.XRapidAPIHostHeaderName,
          environment.XRapidAPIHostHeaderValue
        )
        .set(environment.XRapidAPIKey, environment.XRapidAPIKeyValue),
      params: new HttpParams()
        .set('q', cityname)
        .set('units', 'metric')
        .set('mode', 'json'),
    })
  }
}
