/**
 * Created by lpetkov on 26/11/2016.
 */
import ctrl from "./requiredPhoneCtrl";
import template from "./requiredPhone.html!text";
let requiredPhoneModule = angular.module( "requiredPhoneModule", [] );

requiredPhoneModule.directive( "requiredPhone", ()=> {
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
      function phone( text ) {
        var model = ctrls[ 1 ];
        if ( angular.isUndefined(text) ) {
          text = "";
        }
        var transformedInput = text.replace( /[^0-9]/g, '' );
        if ( transformedInput !== text ) {
          model.$setViewValue( transformedInput );
          model.$modelValue = transformedInput;
        }
      }
      ctrls[ 1 ].$formatters.push( phone );
    }
  }
  return directive;
} );

export default requiredPhoneModule;