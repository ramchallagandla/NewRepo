/// <reference path="../_ref.ts" />
var SPA;
(function (SPA) {
    var Controllers;
    (function (Controllers) {
        'use strict';
        var HomeController = (function () {
            function HomeController($scope, $location, forecastService) {
                this.$location = $location;
                this.$scope = $scope;
                this.forecastService = forecastService;
                //this.$scope.$watch('City', () =>
                //    this.forecastService.City = this.$scope.City
                //    , false);
                this.watchCityChange();
            }
            HomeController.prototype.watchCityChange = function () {
                var _this = this;
                //this.$scope.$watch('City', this.UpdateServiceCity, false);
                this.$scope.$watch('City', function () {
                    return _this.forecastService.City = _this.$scope.City;
                }, false);
                //this.$scope.$watch('City', this.UpdateServiceCity(), false);
            };
            HomeController.prototype.submit = function () {
                this.$location.path("/forecast");
            };
            return HomeController;
        })();
        Controllers.HomeController = HomeController;
    })(Controllers = SPA.Controllers || (SPA.Controllers = {}));
})(SPA || (SPA = {}));
/// <reference path="../_ref.ts" />
var SPA;
(function (SPA) {
    var Providers;
    (function (Providers) {
        var WeatherRouteProivder = (function () {
            function WeatherRouteProivder($routeProvider) {
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
            return WeatherRouteProivder;
        })();
        Providers.WeatherRouteProivder = WeatherRouteProivder;
    })(Providers = SPA.Providers || (SPA.Providers = {}));
})(SPA || (SPA = {}));
/// <reference path="../_ref.ts" />
var SPA;
(function (SPA) {
    var Directives;
    (function (Directives) {
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
        var WeatherReportDirective = (function () {
            function WeatherReportDirective() {
                this.restrict = "E";
                this.templateUrl = '/directives/weatherReport.html';
                this.replace = true;
                this.scope = {
                    dt: '@',
                    temparature: '@'
                };
            }
            ;
            WeatherReportDirective.instance = function () {
                return new WeatherReportDirective();
            };
            return WeatherReportDirective;
        })();
        Directives.WeatherReportDirective = WeatherReportDirective;
    })(Directives = SPA.Directives || (SPA.Directives = {}));
})(SPA || (SPA = {}));
/// <reference path="../_ref.ts" />
var SPA;
(function (SPA) {
    var Services;
    (function (Services) {
        'use strict';
        var ForecastService = (function () {
            function ForecastService($resource) {
                this.$resource = $resource;
                this.City = 'New York';
                //this.City.units = "metrics";
                //this.City.mode = "json";
                //this.City.appid = "44db6a862fba0b067b1930da0d769e98";
            }
            ;
            ForecastService.prototype.GetForecastResource = function () {
                return this.$resource('http://api.openweathermap.org/data/2.5/forecast/daily', { callback: "JSON_CALLBACK" }, {
                    get: { method: "JSONP" }
                }).get({ q: this.City, cnt: this.Days, appid: '44db6a862fba0b067b1930da0d769e98' });
            };
            ;
            return ForecastService;
        })();
        Services.ForecastService = ForecastService;
    })(Services = SPA.Services || (SPA.Services = {}));
})(SPA || (SPA = {}));
/// <reference path="../typings/jquery/jquery.d.ts" />
/// <reference path="../typings/angularjs/angular.d.ts" />
/// <reference path="../typings/angularjs/angular-route.d.ts" />
/// <reference path="../typings/angularjs/angular-resource.d.ts" />
/// <reference path="controllers/forecastcontroller.ts" />
/// <reference path="controllers/homecontroller.ts" />
/// <reference path="providers/routeprovider.ts" />
/// <reference path="directives/weatherreportdirective.ts" />
/// <reference path="services/forecastservice.ts" />
/// <reference path="../_ref.ts" />
var SPA;
(function (SPA) {
    var Controllers;
    (function (Controllers) {
        var ForecastController = (function () {
            function ForecastController($scope, forecastService, $routeParams) {
                this.$scope = $scope;
                this.forecastService = forecastService;
                $scope.forecast = forecastService.City;
                forecastService.Days = $routeParams.days || 2;
                $scope.result = this.getForecast();
                //$scope.GetForecast = this.GetForecast;
            }
            ForecastController.prototype.getForecast = function () {
                return this.forecastService.GetForecastResource();
            };
            ForecastController.prototype.convertToDate = function (dt) {
                return new Date(dt * 1000);
            };
            ForecastController.prototype.convertToF = function (temparature) {
                return Math.round((1.8 * (temparature - 273)) + 32);
            };
            return ForecastController;
        })();
        Controllers.ForecastController = ForecastController;
    })(Controllers = SPA.Controllers || (SPA.Controllers = {}));
})(SPA || (SPA = {}));
/// <reference path="_ref.ts" />
var SPA;
(function (SPA) {
    (function () {
        'use strict';
        angular.module('weatherApp', ['ngRoute', 'ngResource'])
            .config(SPA.Providers.WeatherRouteProivder)
            .directive('weatherReport', SPA.Directives.WeatherReportDirective.instance)
            .service('forecastService', ['$resource', SPA.Services.ForecastService])
            .controller('homeController', ['$scope', '$location', 'forecastService', SPA.Controllers.HomeController])
            .controller('forecastController', ['$scope', 'forecastService', '$routeParams', SPA.Controllers.ForecastController]);
    })();
})(SPA || (SPA = {}));
//# sourceMappingURL=app.js.map