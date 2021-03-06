import { Component, OnInit, Input } from '@angular/core';
import { DashboardService } from '../services/dashboard.service';
import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';
import { Router, ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-alerts',
  templateUrl: './alerts.component.html',
  styleUrls: ['./alerts.component.css']
})
export class AlertsComponent implements OnInit {

  @Input() alertsData: any = [];
  @Input() alertsTotal: any = 0;

  public response: any;
  tollDataToBeSentToNextComp: any = {
    toll_plaza_id: '',
    toll_plaza_name: ''
  }

  public isDashboard: any;

  constructor(
    public dashboardService: DashboardService, private router: Router, private activatedRoute: ActivatedRoute,
    private spinnerService: Ng4LoadingSpinnerService,
    private toastr: ToastrService
  ) {
    this.activatedRoute.paramMap.subscribe((params: any) => {
      if (params.get('id') != '' && params.get('id') != undefined && params.get('id') != null) {
        this.isDashboard = false;
      } else {
        this.isDashboard = true;
      }
    });
  }

  ngOnInit() {
    this.spinnerService.show();
  }


  // Toaster for notication
  showSuccess() {
    this.toastr.error('Toll Has reached 100 counts!', 'Alert!');
  }

  selectedPlaza(plazaInfo) {
    // console.log('selected Plaza:', plazaInfo);
    if (plazaInfo != null && plazaInfo != undefined) {
      this.tollDataToBeSentToNextComp.toll_plaza_id = plazaInfo.toll_plaza_id
      this.tollDataToBeSentToNextComp.toll_plaza_name = plazaInfo.toll_plaza_name
      this.dashboardService.tollPlazaInfoForTable$.next(this.tollDataToBeSentToNextComp);
      // console.log('data being sent:', this.tollDataToBeSentToNextComp);
      this.router.navigate(['/views/toll-details', plazaInfo.toll_plaza_id]);
    }
  }
}
