/// <reference path="../_ref.ts" />

module SPA.Providers {

    export class WeatherRouteProivder {
        constructor($routeProvider: ng.route.IRouteProvider) {

            $routeProvider
                .when('/', {
                    templateUrl: 'pages/home.html',
                    controller: 'homeController',
                    controllerAs: 'homeCntrl'
                })
                .when('/forecast', {
                    templateUrl: 'pages/forecast.html',
                    controller: 'forecastController',
                    controllerAs: 'forecastCntrl'
                })
                .when('/forecast/:days', {
                    templateUrl: 'pages/forecast.html',
                    controller: 'forecastController',
                    controllerAs: 'forecastCntrl'
                });

        }
    
    }


}