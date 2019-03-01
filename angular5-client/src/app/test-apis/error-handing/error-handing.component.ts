import { Component, OnInit } from '@angular/core';

import { TestApisServiceService } from '../../api/test-apis-service.service';

@Component({
  selector: 'app-error-handing',
  templateUrl: './error-handing.component.html',
  styleUrls: ['./error-handing.component.css']
})
export class ErrorHandingComponent implements OnInit {

  retryFailResult: string;
  retrySuccessResult: string;
  circuitBreakerResult: string;

  constructor(private testService: TestApisServiceService) { }

  ngOnInit() {
  }

  testRetryFail() {
    this.retryFailResult = null;
    this.testService.getTestRetryFail().subscribe(
      res => this.retryFailResult = res.result
    );
  }

  async testRetrySuccess() {
    this.retrySuccessResult = null;
    const response = await this.testService.getTestRetrySuccess().toPromise();
    this.retrySuccessResult = response.result;
  }

  async testCircuitBreaker() {
    this.circuitBreakerResult = null;
    const response = await this.testService.getTestCircuitBreaker().toPromise();
    this.circuitBreakerResult = response.result;
  }
}
