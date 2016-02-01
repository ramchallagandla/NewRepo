/// <reference path="_ref.ts" />
module SPA {
    'use strict';
    angular.module('weatherApp', ['ngRoute', 'ngResource'])
        .config(Providers.WeatherRouteProivder)
        .directive('weatherReport', Directives.WeatherReportDirective)
        .service('forecastService', ['$resource', Services.ForecastService])
        .controller('homeController', ['$scope', '$location','forecastService', Controllers.HomeController])
        .controller('forecastController', ['$scope', 'forecastService', '$routeParams', Controllers.ForecastController])
        
        
}
