import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-driver-information',
  templateUrl: './driver-information.component.html',
  styleUrls: ['./driver-information.component.less'],
})
export class DriverInformationComponent implements OnInit {
  code: string;
  public driverInfo: any;

  constructor(private http: HttpService, public route: ActivatedRoute, private router: Router) {
    //Get drivercode (EXAMPLE: VER/HAM/BOT)
    this.code = this.route.snapshot.params.code;

    this.http.get(HttpService.DRIVERS_URL).subscribe((result: any) => {

      //Get array of selected driver
      this.setDrivers(result.MRData.DriverTable.Drivers.filter((item: any) => {
        return item.code == this.code;
      })[0]);

      //All drivers
      // result.MRData.DriverTable.Drivers.forEach((obj) => {
      //   console.log(obj);
      // });

      //drivercode
      console.log(this.driverInfo);
    });
  }

  ngOnInit(): void {
  }

  //Driver data
  public setDrivers(driverInfo: Array<Object>) {
    this.driverInfo = driverInfo;
  }
  public getDrivers(): Array<Object> {
    return this.driverInfo;
  }

  log(s) {
    console.log(s);
  }
}
