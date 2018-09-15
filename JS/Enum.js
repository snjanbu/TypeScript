"use strict";
var Veh;
(function (Veh) {
    Veh[Veh["cycle"] = 0] = "cycle";
    Veh[Veh["bike"] = 1] = "bike";
    Veh[Veh["car"] = 2] = "car";
    Veh[Veh["bus"] = 3] = "bus";
    Veh[Veh["lorry"] = 4] = "lorry";
})(Veh || (Veh = {}));
var er;
er = Veh.bike;
console.log(er);
