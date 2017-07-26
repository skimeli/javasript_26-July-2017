/**
 * Created by skimeli on 7/26/17.
 */
var Vehicle = function(){}

var factory = {
    create: function(name, props){
        var v = new Vehicle();
        v.type = name;
        for(var prop in props) {
            v[prop] = props[prop];
        }
    }
}

var bike = factory.create('Bike', {
    wheels: 2
});

var car = factory.create('Car', {
    wheels: 4,
    doors: 5,
    gear: 'automatic'
});

var plane = factory.create('Airplane', {
    wings: 2,
    engines: 4
});
