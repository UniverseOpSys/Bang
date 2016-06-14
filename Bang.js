//For John Cocke of IBM: Thanks, John. I bend my elbow to you once more. You'd have loved this one.
//
//This program create UOS, establishes the Logon state and then logs in.
//The last time it runs UOS is decreed created and sharable. (And then this, Bang will disappear.)
//From this program shall be created Logon, .js program for user entry.
//	It will not change any of the creation moment variables but
//	will be otherwise initially identical.
var sys = require("util"),
my_http = require("http"),
path = require("path"),
url = require("url"),
filesys = require("fs")
;

//Defining a function.  Function can be used after definition so they will be at the start.
//<script>
function uwwFuzz(parameter) {
//invoked on a UWW and fuzzes it about its coordinates to within a tolerance.  Can also be a member function.
	var variable = 0;
	variable = parameter;
	return variable;
};
//</script>

//Create the UWW event type
var uWWEvent = {
/////NEEDS a constructor here that makes it zero.
	RealReality: function() {/*The member function that applies the hallowed transform.*/},
	Event: function() {/*What do do*/},
	From: function() {/*What do do*/},
	Xform: function() {/*What do do*/},
	Fuzz: function() {/*What do do*/},
	Zero: function() {/*What do do*/},
	Think: function() {/*Bayseian, QBist simulation of quantum system.  To be specified.*/},
	pX: 0,
	pY: 0,
	pZ: 0,
	qX: [0, 0],
	qY: [0, 0],
	qZ: [0, 0],
	qt: [0],
	d: []
};

//Create the UWW transform type.  Should just contain a uWWEvent object.
var uWWXform = {
	var uWWXform = uWWEvent();
};

//The Universe and Everything
var uWWUniverse = new uWWEvent();
//HERE

//Real Reality hard wired eventually to some CMB measurement.
//Transformation to CMB will be done locally?
var UWWCMB = new uWWXform();

/////////////////////////////////////////////////////
//The dynamic transform between CMB
//and a sweetened, hallowed version of where
//the universe is pinned and centered.  Jitter
//or judder here is a very, very bad thing.
//  
//Real (as opposed to Virtual) Reality upon which we 
//agree to agree.  Starts null.  To be replaced.
//////////////////////////////////////////////////////

//Hallowed Real Reality Transform
var uWWHallowed = new uWWXform();
//DONE
//////////////Launched about 7:12 A.M. Fri JUN 10 2016.  Global access possible but not fruitful./////////////

//Need now to start connecting devices for external communication using Node.  Good point to be.
//Learn peculiarities and particularities of Node next.

//Want to connect to Bluetooth as soon as possible for IoT.  Events across the physical ether will be B.T under control of Node. 
//Physical near field ether events will be B.T. with Node riding herd. Pairing needed.
 
//Again, a user needs not know of the existence of the implicit server.  
//It's always running and unconditionally serving up requests for whatever is held.
//Simple as fuck.  Or as simple as I can make it.  
//I create a channel to something by placing something interesting into the UWW space at any old point.

//How does it receive requests and get them under the aegis of the server.  Final link.  
//Any process on the device is served locally by the device and service is synchronous.

//I'm on A and I want to ask for something from B.  uww.From(uww, B) requests the current content of event uww within B.  Should this block?

//World lines remain not even well thought out.  I'm sure my subconscious has a thread going on it, though.

//Next thing to do is create some Node event loops that actually start up.
//1 Some event needs to be harvesting and serving data from an event queue as it is requested.
//2 Some event needs to be able to put a request in the same event queue.
//After that I think it is about how they are used.  Back to the books.

//TEST
function watcher (argv) {
    const
      fs = require('fs'),
      filename = process.argv[2];
    if (!filename) {
      throw Error("A file to watch must be specified!");
    }
    fs.watch(filename, function() {
      console.log("File " + filename + " just changed!");
    });
    console.log("Now watching " + filename + " for changes...");
};
