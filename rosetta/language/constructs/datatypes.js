module.exports = [
    /**
     * 
     * it seems the popular general programming 
     * langauges have two consistent datatypes
     * 
     * booleans and strings
     * 
     * scripting languages seem to not care about space.
     * 
     * so python, ruby, and javascript use a 
     * number datatype that utilizes 64 bit space
     * 
     * other langauges allow efficient use of space
     * offering 8 bit, 16 bit, 32bit, and 64bit 
     * ints, floats, and chars
     *  
     */
{
    name: "string",


    javascript: [
        [`"<string>"`],
        [`'<string>'`],
        [`\`<string>\``]
    ],
    nodejs:[
        [`"<string>"`],
        [`'<string>'`],
        [`\`<string>\``]
    ],
    python:[
        [`"<string>"`],
        [`'<string>'`],
    ],
    php:[
        [`"<string>"`],
        [`'<string>'`],
        [`<<<<string>`],
        [`<<<'EOT'
            <string>
            EOT;    
        `]
    ],
    ruby:[
        [`"<string>"`]
    ],
    perl:[
        [`"<string>"`],
        [`'<string>'`],
        [`q//<string>/`],
        [`qq//<string>/`],
    ],
    lua:[
        [`"<string>"`],
        [`'<string>'`],
    ],
    r:[
        [`"<string>"`],
        [`'<string>'`],
    ],
    lisp:[
        [`"<string>"`],    
    ],
    kotlin:[
        [`"<string>"`],
    ],
    swift:[
        [`"<string>"`],
    ],
    go:[
        [`"<string>"`],
    ],
    java:[
        [`"<string>"`],
    ],
    cpp:[
        [`"<string>"`],
    ],
    c:[
        [`"<string>"`],
    ],
    "c#":[
        [`"<string>"`],
    ],
    rust:       [
        [`"<string>"`],
    ],
    fortran:[
        [`'<string>'`]
    ],
    x86:        "",
    arm32:      "",
    arm64:      "",
    wasm:       ""
},
{

    name: "",


//    bits: 


    javascript: "",
    nodejs:     "",
    python:     "",
    php:        "",
    ruby:       "",
    perl:       "",
    lua:        "",
    r:          "",
    lisp:       "",
    kotlin:     "",
    swift:      "",
    go:         "",
    java:       "",
    cpp:        "",
    c:          
    "c#":       "",
    rust:       "",
    fortran:    "",
    x86:        "",
    arm32:      "",
    arm64:      "",
    wasm:       ""
},

c = [
	// type	      		bits	val range

integers: [
	["char",		8,	[-128,127]],
	["unsigned char",	8,	[0,255]],
	["signed char",		8,	[-128,127]],
	["int",			[16,32],[[-32768,32767],[-2147483648, 2147483647]]],
	["unsigned int",	[16,32],[[0,65535],[0,4294967295]]],
	["short",		16,	[-32768,32767]],
	["unsigned short",	16,	[0,65535]],
	["long",		64, 	[-9223372036854775808,9223372036854775807]],
	["unsigned long",	64,	[0,18446744073709551615]]
],

floats:[
	// type		bits	value range		decimal precision
	["float",	32, 	[1.2E-38, 3.4E+38],	6],
	["double",	64,	[2.3E-308, 1.7E+308],	15],
	["long double",	80,	[3.4E-4932, 1.1E+4932],	19]
],

enums:[
	// 
],

derived:[

],


]

cpp:[

	// type			bits	value range
	["char",	 	8,	[[-127, 127], [0, 255]]],
	["unsigned char",	8,	[[0,255]]],
	["signed char",		8,	[[-127,127]]],
	["int",			32,	[[-2147483648,2147483647]]],
	["unsigned int",	32,	[[0, 4294967295]]],
	["signed int",		32,	[[-2147483648,2147483647]]],
	["short int",		16,	[[-32768,32767]]],
	["unsigned short int",	16,	[[0, 65535]]],
	["signed short int",	16,	[[-32768, 32767]]],
	["long int",		64,	[[-2147483648, 2147483647]]],
	["signed long int",	64,	[[-2147483648, 2147483647]]],
	["unsigned long int",	64,	[[0, 4294967295]]],
	["long long int",	64,	[[-(2**63), (2**63)-1]]],
	["unsigned long long int",64,	[[0,18446744073709551615]]],
	["float",		32,	[[]]],	
	["double",		64,	[[]]],
	["long double",		96,	[[]]],
	["wchar_t",		[16,32],[[]]],
]


]