/// <reference path="../_ref.ts" />
module SPA.Controllers {
    //'use strict';

    export interface IForecastScope extends ng.IScope {
        forecast: string;
        result: any;
        
        //GetForecast(): string;
    }

    export interface IForecastParamService extends ng.route.IRouteParamsService {
        days: number;

    }

    export class ForecastController {

        constructor(public $scope: IForecastScope, public forecastService: Services.ForecastService, $routeParams: IForecastParamService) {
            $scope.forecast = forecastService.City;
            forecastService.Days = $routeParams.days || 2;
            $scope.result = this.getForecast();
            
            //$scope.GetForecast = this.GetForecast;
        }

        public getForecast(): any {
            return this.forecastService.GetForecastResource();
       }

        public convertToDate(dt: number): Date {
            return new Date(dt * 1000);
        }

        public convertToF(temparature: number): number {
            return Math.round((1.8 * (temparature - 273)) + 32);
        }
    }
}