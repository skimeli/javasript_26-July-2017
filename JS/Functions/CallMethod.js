/**
 * Created by skimeli on 7/26/17.
 */
var student = {
    firstName:"mercy",
    lastName: "Daniels",
    fullName: function() {
        return this.firstName + " " + this.lastName;
    }
}
var myObject = {
    firstName:"Mercy",
    lastName: "Daniels",
}
person.fullName.call(myObject); 
