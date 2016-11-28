/**
 * Created by lpetkov on 26/11/2016.
 */
import html from "./landingPage.html!text";
import landingPageCtrl from "./landingPageCtrl";

let landingPageModul = angular.module( "landingPage", [ "ngRoute" ] );
landingPageModul.config( [ "$routeProvider", ( $routeProvider ) => {
  $routeProvider
    .when( "/", {
      template:     html,
      controller:   landingPageCtrl,
      controllerAs: 'ctrl',
      resolve:      {
        countries:function ( $http,$q ) {
          var deffered = $q.defer();
          $http.get("./fakeServerData/countriesJson.json").then(function ( response ) {
            deffered.resolve(response.data);
          });
          return deffered.promise;
        }
      }
    } )
} ] );
landingPageModul.controller( "landingPageCtrl", landingPageCtrl );

export default landingPageModul;
