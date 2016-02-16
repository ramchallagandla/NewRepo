/// <reference path="_ref.ts" />
var SPA;
(function (SPA) {
    'use strict';
    angular.module('weatherApp', ['ngRoute', 'ngResource'])
        .controller('homeController', SPA.HomeController);
})(SPA || (SPA = {}));
//# sourceMappingURL=app.js.map