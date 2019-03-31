# Angular-7-Frontend
This contains 2 version. 1) Monolithic APIs.  2) Microservices APIs (Microservices have more UI which show retry and other resilience logics.

# Angualar5Clients

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.5.5. 
Currently Updated to 1.7

## Build Docker Image

docker build -t victoryssmile/angular-app:monolithic-cloud .

## Push to DockerHub

docker push victoryssmile/angular-app:monolithic-cloud

## To build Docker Image for different Environment, open Dockerfile and pass environment into "--configuration="
RUN npm run build -- --configuration=cloud

## To add more environment, need add below code one for "ng build" and one for "ng serve"
<pre>
"build": {
  ...,
  "configurations": {
    ...,
    "cloud": {
      "fileReplacements": [
        {
          "replace": "src/environments/environment.ts",
          "with": "src/environments/environment.cloud.ts"
        }
      ]
    }
  },
  "serve": {
    ...,
    "configurations": {
      ...,
      "cloud": {
        "browserTarget": "angualar5-clients:build:cloud"
      }
    }
  } 
}
</pre>

