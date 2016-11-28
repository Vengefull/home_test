/**
 * Created by lpetkov on 26/11/2016.
 */
import ctrl from "./passwordCtrl";
import template from "./password.html!text";
let passwordModule = angular.module( "passwordModule", [] );

passwordModule.directive( "password", ()=> {
  function checkAttributes( scope, attrs ) {
    if ( angular.isUndefined( attrs.placeholder ) ) {
      throw "Missing placeholder attribute: ";
    }
  }
  let directive = {
    restrict:     "E",
    scope:        {
      model:    "=ngModel",
      placeholder: "=",
    },
    require:      [ "^form","ngModel" ],
    controller:   ctrl,
    controllerAs: "ctrl",
    template:     template,
    link:         function ( scope, element, attrs, ctrls ) {
      scope.form = ctrls[ 0 ];
    }
  }
  return directive;
} );

export default passwordModule;