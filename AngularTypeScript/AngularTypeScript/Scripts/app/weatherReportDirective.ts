/// <reference path="_ref.ts" />
module SPA.Directives {

    export function WeatherReportDirective() {
       
            return {
                restrict: 'E',
                templateUrl: '/directives/weatherReport.html',
                replace: true,
                scope: {
                    dt: '@',
                    temparature: '@'
                }
            };
    }
}