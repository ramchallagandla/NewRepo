/// <reference path="../_ref.ts" />

module SPA.Directives {

    /*export function WeatherReportDirective() {
       
            return {
                restrict: 'E',
                templateUrl: '/directives/weatherReport.html',
                replace: true,
                scope: {
                    dt: '@',
                    temparature: '@'
                }
            };
    }*/

    export class WeatherReportDirective implements ng.IDirective {
            
        restrict = "E";
        templateUrl = '/directives/weatherReport.html';
        replace = true;
        scope = {
            dt: '@',
            temparature: '@'
        };

        constructor() { };
        
        static instance(): ng.IDirective {
            return new WeatherReportDirective();
        }

    }
}