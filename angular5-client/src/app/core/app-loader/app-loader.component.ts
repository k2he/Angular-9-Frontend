import { Component, OnInit } from '@angular/core';

import { SpinnerService } from '../../services/spinner.service';

@Component({
  selector: 'app-app-loader',
  templateUrl: './app-loader.component.html',
  styleUrls: ['./app-loader.component.scss']
})
export class AppLoaderComponent implements OnInit {

  isLoading: boolean;

  constructor(private spinnerServie: SpinnerService) { }

  ngOnInit() {
    this.spinnerServie.events$.subscribe(result => {
      this.isLoading = result;
    });
  }

}
