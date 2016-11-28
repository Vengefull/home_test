/**
 * Created by lpetkov on 26/11/2016.
 */
import ctrl from "./requiredInputCtrl";
import template from "./requiredInput.html!text";
let requiredInputModule = angular.module( "reguiredInput", [] );

requiredInputModule.directive( "requiredInput", ()=> {
  function checkAttributes( scope, attrs ) {
    if ( angular.isUndefined( attrs.placeholder ) ) {
      throw "Missing placeholder attribute: ";
    }
    else if ( angular.isUndefined( attrs.name ) ) {
      throw "Missing name attribute: ";
    }
  }
  
  let directive = {
    restrict:     "E",
    replace: true,
    scope:        {
      name:        "=",
      model:       "=ngModel",
      placeholder: "="
    },
    require:      [ "^form", "ngModel" ],
    controller:   ctrl,
    controllerAs: "ctrl",
    template:     template,
    link:         function ( scope, element, attrs, ctrls ) {
      scope.form = ctrls[ 0 ];
      checkAttributes( scope, attrs );
    }
  }
  return directive;
} );

export default requiredInputModule;