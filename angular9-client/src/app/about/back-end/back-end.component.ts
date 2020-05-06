import { Component, OnInit } from '@angular/core';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-back-end',
  templateUrl: './back-end.component.html',
  styleUrls: ['./back-end.component.scss']
})
export class BackEndComponent implements OnInit {

  apiPath: string;
  registryPath: string; //Port 8761
  zipkinPath: string; //Port 9411
  kibanaPath: string;

  constructor() { }

  ngOnInit() {
    this.apiPath = environment.apiPath;

    // Replace with correct port number.
    const index = this.apiPath.lastIndexOf(":");
    const basePath = this.apiPath.substring(0, index);
    this.registryPath = `${basePath}:8761`;
    this.zipkinPath = `${basePath}:9411`;
    this.kibanaPath = `${basePath}:5601`;
  }

}
