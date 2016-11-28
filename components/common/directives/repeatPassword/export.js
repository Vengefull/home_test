/**
 * Created by lpetkov on 26/11/2016.
 */
import ctrl from "./repeatPasswordCtrl";
import template from "./reapeatPassword.html!text";
let repeatPasswordModule = angular.module( "repeatPasswordModule", [] );

repeatPasswordModule.directive( "repeatPassword", ()=> {
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
      pattern:"="
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

export default repeatPasswordModule;