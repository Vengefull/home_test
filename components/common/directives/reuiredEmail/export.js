/**
 * Created by lpetkov on 26/11/2016.
 */
import ctrl from "./requiredEmailCtrl";
import template from "./requiredEmail.html!text";
let requiredEmailModule = angular.module( "requiredEmail", [] );

requiredEmailModule.directive( "requiredEmail", ()=> {
  function checkAttributes( scope, attrs ) {
    if ( angular.isUndefined( attrs.placeholder ) ) {
      throw "Missing placeholder attribute: ";
    }
    else if ( angular.isUndefined( attrs.name ) ) {
      throw "Missing name attribute: ";
    }
  }
  
  let directive = {
    restrict: "E",
    scope:{
      name:"=",
      model:"=ngModel",
      placeholder:"="
    },
    require:["^form","ngModel"],
    controller : ctrl,
    controllerAs : "ctrl",
    template     : template,
    link:function ( scope, element, attrs, ctrls ) {
      scope.form = ctrls[0];
      
    }
}
  return directive;
} );

export default requiredEmailModule;