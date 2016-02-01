/// <reference path="../_ref.ts" />


module SPA.Controllers {
    'use strict';
    export interface IHomeScope extends ng.IScope {
        City: string
    }
    export class HomeController {
        $scope: IHomeScope;
        forecastService: Services.ForecastService;
        constructor($scope: IHomeScope, public $location: ng.ILocationService, forecastService: Services.ForecastService) {
            this.$scope = $scope;
            this.forecastService = forecastService;
            //this.$scope.$watch('City', () =>
            //    this.forecastService.City = this.$scope.City
            //    , false);

            this.watchCityChange();
           
        }

        
        private watchCityChange(): void {
            //this.$scope.$watch('City', this.UpdateServiceCity, false);
             this.$scope.$watch('City', () =>
                this.forecastService.City = this.$scope.City
                , false);

            //this.$scope.$watch('City', this.UpdateServiceCity(), false);
        }

        public submit(): void {
            this.$location.path("/forecast");
        }

    }
}