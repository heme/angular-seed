'use strict';
import 'angular';
import 'angular-route';
import './view1/view1';
import './view2/view2';
import './components/version/version';
import './components/version/version-directive';
import './components/version/interpolate-filter';


// Declare app level module which depends on views, and components
angular.module('myApp', [
  'ngRoute',
  'myApp.view1',
  'myApp.view2',
  'myApp.version'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.otherwise({redirectTo: '/view1'});
}]);

angular.element(document).ready(function() {
    angular.bootstrap(document, ['myApp']);
});