/**
 * Created by lpetkov on 26/11/2016.
 */
class landingPageCtrl {
  constructor( $scope, countries, $http ) {
    this.countries = countries.countries;
    this.$http     = $http;
  }

  submit() {
    this.errMessages=[];
    this.$http.post("call_to_the_server",{
      "firstName": this.firstName,
      "lastName": this.lastName,
      "email": this.email,
      "phone": this.userCountryOptions.phoneCode + this.userPhone,
      "password":this.userPassword,
      "repeatPassword":this.repeatPassword
    }).then(function ( response ) {
      if(response.data.errCode === 200){
        this.errMessages = response.data.errorMessage;
      }else if(response.data.errCode === 0 &&  response.data.errorMessage===null){
        alert("finaly");
      }else if(response.status === 404){
        console.error("contact the support team!");
      }
    },function ( reject ) {
      console.log(reject);
    })
  }
}

export default landingPageCtrl;