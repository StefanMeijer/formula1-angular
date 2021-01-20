import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-drivers',
  templateUrl: './drivers.component.html',
  styleUrls: ['./drivers.component.less']
})
export class DriversComponent implements OnInit {

  private drivers: Array<Object>;
  private driverName: Array<Object>;

  constructor(private http: HttpService) { }

  ngOnInit(): void {
    this.http.get(HttpService.DRIVERS_URL).subscribe((result:any) => {
      this.setDrivers(result.MRData.DriverTable.Drivers);

      console.log(result.MRData);
    });
  }

  //Driver data
  public setDrivers(drivers: Array<Object>) {
    this.drivers = drivers;
  }
  public getDrivers(): Array<Object> {
    return this.drivers;
  }

  log(s) {
    console.log(s);
  }

}
