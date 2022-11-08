

var string = "Hello";

// prototype in JavaScript
// console.log(Object.getPrototypeOf(string));

// prototype example

// cloning robots for out robot army

function MyPrototype(proto) {
    this.proto = proto;

    this.clone = function () {
        var robot = new Robot();

        robot.bodyType = proto.bodyType;
        robot.specialty = proto.specialty;
        robot.status = proto.status;

        return robot;
    }
}

function Robot(bodyType, specialty, status) {

    this.bodyType = bodyType;
    this.specialty = specialty;
    this.status = status;

    this.listSpecs = function () {
        console.log(this.bodyType, this.specialty, this.status);
    }

}

function Client() {

    var proto = new Robot("n/a", "n/a", "prototype phase");
    var prototype = new MyPrototype(proto);

    var clones = [];
    var robot1 = prototype.clone();
    var robot2 = prototype.clone();
    var robot3 = prototype.clone();

    clones.push(robot1, robot2, robot3);

    return clones;

}

console.log(Client())