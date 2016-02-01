/// <reference path="../_ref.ts" />

module SPA.Services {
    'use strict';

    export interface ICity {
        q: string;
        mode: string;
        units: string;
        cnt: number;
        appid: string;
    }

    export class ForecastService {
        
        City: string;
        Days: number;

        constructor(public $resource: ng.resource.IResourceService) {
            this.City = 'New York';
            //this.City.units = "metrics";
            //this.City.mode = "json";
            //this.City.appid = "44db6a862fba0b067b1930da0d769e98";
        };

        public GetForecastResource(): any {
          
            return this.$resource(
                'http://api.openweathermap.org/data/2.5/forecast/daily',
                { callback: "JSON_CALLBACK" }, {
                    get: { method: "JSONP" }
                }).get({ q: this.City, cnt: this.Days, appid: '44db6a862fba0b067b1930da0d769e98' });
        };
    }
    
}