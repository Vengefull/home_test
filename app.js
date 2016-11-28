/**
 * Created by lpetkov on 26/11/2016.
 */
import angular from 'angular';
// angular route import
import route from 'angular-route';
import css from "./style/mainCss.css!css"
//import the compiled css from sass files

import landingPageModul from "./components/pages/landingPage/export";
import requiredInputModule from "./components/common/directives/requiredInput/export";
import requiredEmailModule from "./components/common/directives/reuiredEmail/export";
import requiredPhoneModule from "./components/common/directives/requiredPhone/export";
import passwordModule from "./components/common/directives/password/export";
import repeatPasswordModule from "./components/common/directives/repeatPassword/export";

let home_test = angular.module( "homeTest", [landingPageModul.name,
    requiredInputModule.name,
    requiredEmailModule.name,
    requiredPhoneModule.name,
    passwordModule.name,
    repeatPasswordModule.name] )
  .config(['$httpProvider', function ( $httpProvider ) {
  console.log($httpProvider);
    $httpProvider.defaults.headers.post[ "Content-Type" ] = "application/x-www-form-urlencoded";
    $httpProvider.interceptors.push( function ( $q ) {
      return {
        request:       function ( config ) {
          return config;
        },
        requestError:  function ( rejection ) {
          return rejection || $q.when(rejection);
        },
        response:      function ( response ) {
          return response || $q.when(response);
        },
        responseError: function ( rejection ) {
          return rejection || $q.when(rejection);
        }
      }
    } );

  } ]);

angular.bootstrap( window.document.body,
  ["homeTest"] );

home_test.$inject = [ '$httpProvider' ]