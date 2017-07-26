/**
 * Created by skimeli on 7/26/17.
 */
function Animal() {};
Animal.prototype.eat = function () {
    alert("All animals can eat!");
};
function Bird() {};
Bird.prototype = new Animal();
Bird.prototype.fly = function() {
    alert("Birds are special, they can fly!");
};
