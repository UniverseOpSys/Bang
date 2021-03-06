//For John Cocke of IBM: Thanks, John. I bend my elbow to you once more. You'd have loved this one.
//
//This program creates UOS, establishes the Logon state and then logs in.
//The last time it runs UOS is decreed created and sharable. (And then this, Bang.js will disappear.)
//From it a program shall be created Bang (.js program without the .js suffix) for user entry to UOS state.
//	It will not change any of the creation moment variables but
//	will be otherwise initially identical.
//This program as Login will undergo further open development.
//
var //Winnow this list down after TEST program works.
sys = require("util"),
my_http = require("http"),
path = require("path"),
url = require("url"),
filesys = require("fs")
;

//Create the UOS type. God's Wink.
var UOS {
	//Capitalize these? Redesign them.
	Fuzz: function() {/*What do do*/},
	//realReality: function() {/*The member function that applies the hallowed transform.*/},
	//from: function() {/*What do do*/},
	//xform: function() {/*What do do*/},
	//zero: function() {/*What do do*/},
	//think: function() {/*Bayseian, QBist simulation of quantum system.  To be specified.*/},
	event: function(/*Should .event have paramaters*/) { //Initalize to zero at instantiation with no parameters.
		pX: 0,
		pY: 0,
		pZ: 0,
		qX: [0, 0],
		qY: [0, 0],
		qZ: [0, 0],
		//1.27e72 * 1E6 is 1.27e78 Planck units times is 260 bits. Use 8 or 9 32 bit integers. 8 is 256 bits 
		//which is a nice number. 
		//Visible universe is 46.5e9 years old.
		//What comes before the expansion happens to be the repeating decimal 1.268181818...e72 and I think that might be significant.
		//Thanks to 46.5e9*1.47e18/5.39e-44 and to http://www.ttmath.org/online_calculator.
		t: [46.5E9/*ly*/ * 1.47E18/*sec/ly*/ / 5.39E-44/*sec/Planck*/ * 1E6/*Expansion*/],
		//1 The world is everything that is the case.
		//...
		//...
		//7 Whereof one cannot speak, thereof one must be silent.  
		//Such is d. Manipulable but not intelligible in the core.
		//Heavy lifting all above it.  The process/link layer never
                //does more than move/copy them without regard to their nature.
                //I think that the content of .d is accessable locally 
                //immediately upon receipt so gates are needed. 
                //
                //Transputer stuff guarantees that an arrived message contains
                //a formless and locally accessable data packet. Transputer stuff 
                //guarantees that.  
                //Must be initialized to only receive messages addresed to the 
                //active node in UOS coordinates. (logon instance.)  
                //Back to addressibility, anybody I've given my name to can 
                //send me messages at Bang state if they can produce that name.
                //Limitations as to amount sent are policy of the sender and the
                //limits of physical memory. Your sender is like an ISP outside your
                //node to manage your gates. Pick a good, generic ISP. A 
                //recommendation or built in bot might become part of this Bang 
                //definition.  Removing any length check from the receiver process
                //might prove advantageous for memory management.
		d: []
	}
};

//Defining a function.  Function can be used after definition so they will be at the start.
//<script>
function UOS.Fuzz(parameter) {
//invoked on a UOS and fuzzes it about its coordinates to within a tolerance.  Can also be a member function.
	var variable = rand();
	variable = parameter;
	return variable;
};
//</script>

//The Universe and Everything
var uOSUniverse = new UOS.event();
//HERE

//Real Reality hard wired eventually to some CMB measurement.
//Transformation to CMB will be done locally?
var uOSCMB = new UOS.xform();  //This should instantiate as zero after Bang.js

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
var uOSHallowed = new UOS.xform();

//////////////Launched about 7:12 A.M. Fri JUN 10 2016.  Global access possible but not fruitful./////////////

//Need now to start connecting devices for external communication using Node.  Good point to be.
//Learn peculiarities and particularities of Node next.

//Want to connect to Bluetooth as soon as possible for IoT.  Events across the physical ether will be B.T under control of Node. 
//Physical near field ether events will be B.T. with Node riding herd. Pairing needed.
 
//Again, a user needs not know of the existence of the implicit server.  
//It's always running and unconditionally serving up requests for whatever is held.
//Simple as fuck.  Or as simple as I can make it.  
//I create a channel to something by placing something interesting into the UOS space at any old point.

//How does it receive requests and get them under the aegis of the server.  Final link.  
//Any process on the device is served locally by the device and service is synchronous.

//From A and I want to ask for something from B.  A.d = B.from(uOSEvent) copies the current data packet from event uOSEvent.
//within B.  Should this block?

//World lines remain not even well thought out.  I'm sure my subconscious has a thread going on it, though.

//Next thing to do is create some Node event loops that actually start up.
//1 Some event needs to be harvesting and serving data from an event queue as it is requested.
//2 Some event needs to be able to put a request in the same event queue.
//After that I think it is about how they are used.  Back to the books.

///////////////////////////////////////////////////////////////////////////////////////////////////////////
//Here will go the interface to the Transputer like process/link model.  Initially it must well simulate
//a Transputer (hard development decision) but it will eventuate to have UOS objects and events incorporated 
//having no symantic overlap between the mechanism and the data that is on the links or of any UOS object.  
//Separate universes ripe for independant development. Write a usable Transputer simulator in JavaScript 
//and Node.js (which will come to underly every communication in the system.)  Such a thing could be very
//useful outside this project.
//
//In the end what remains of the instruction execution unit might even disappear to be replaced with something 
//totally UOS centric that I imply as actions when I describe the data above. Simplicity, generality shall
//decree that functionality.  Maybe back to the JavaScript REPL with that going on silently below.  Now runs
//some UOS representation of the CSP like interface in the Transputer which can be "called" via some associated 
//object defined in UOS.  What to call this beast?  Where to put it? Can it be a generally switchable context?
//It's what I implied with saying things like "going there."  The exposed methods of this object relate to the
//Transputer process and link model of what is "within" it.  It also contains as a data component a UOSEvent.
//The generic, object type is a UOSEontext T.B.D.
///////////////////////////////////////////////////////////////////////////////////////////////////////////
Var UOSProcess{};
	//Should this be the object and the initial state which contains the Transputer methods first.
	//It will eventuate to contain the minimal necessary extensions to that for context free management 
	//of UOSEvent objects.  All that can be removed from the instruction execution unit will be via an object
	//inheritance.  The Kindle book defining the Transputer is available at:
		//https://smile.amazon.com/Hardware-Software-Architecture-Transputer-Computer-ebook/dp/B004OYTS1K
	//The first exposed methods will resemble the Occam methods defined therein as closely as possible with
	//regard to processes and links.  I want something known to work first with content available.  
	//The blocks and flows at https://www.dropbox.com/s/dqmur1qyrwbglj7/T400_Low-Cost_32-bit_Transputer.pdf
	//can be one by one be replaced by an environment that is more UOS appropo.  If only I knew a prof. 
	//An exact Javascript/Node model of a Transputer would be a wonderfully useful undergrad project.
	//
	//However it gets fleshed out, the initial user workspace will be that of the JavaScript Node REPL. One can
	//assume that the process model for the Transputer is operative and that he can invoke Occam methods on the
	//UOSProcess object.  He remains firmly ensconsed in that REPL.  Entry at this level will always exist. 
	
////////////////////////////////////////////////////////////////////////////////////////
//Final section for discussion of the state one will be in upon execution of this file.
//What is above is the machinery and objects to get it that way.  This section will guide
//the development of the above.
////////////////////////////////////////////////////////////////////////////////////////
		
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
