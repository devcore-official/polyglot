module.exports = [
{

name: "",

// none, ??, ???

// case sensitive

javascript: 
[    // declaration // syntax      // assignable stage // redeclarable // reassignable // scope   // hoisted
    [`var`, `var <name> = <value>`,    `post`, `re`,            `re`,             `global`, `hoisted`],
    [`let`, `let <name> = <value>`,    `post`, `non`,           `re`,             `block`,  `stagnant`],
    [`cont`,`const <name> = <value>`   `init`, `non`,           `sub values only`,`block`,  `stagnant`],
],
nodejs:
[    // declaration // syntax      // assignable stage // redeclarable // reassignable // scope   // hoisted
    [`var`, `<decl> <name> = <value>`,    `post`,       `re`,         `re`,             `global`, `hoisted`],
    [`let`, `<decl> <name> = <value>`,    `post`,       `non`,        `re`,             `block`,  `stagnant`],
    [`cont`,`<decl> <name> = <value>`,    `init`,       `non`,        `sub values only`,`block`,  `stagnant`],
],
python:[    
    // declaration // syntax      // assignable stage // redeclarable // reassignable // scope   // hoisted
    [`none`, `<decl> <name> = <value>`,    `init`,      `re`,        `re`,              `block`, `stagnant`],
    [`global`,`<decl> <name> = <value>`,   `post`,      `re`,        `re`,              `global`,`stagnant`]
],
php:[    
    // declaration // syntax      // assignable stage // redeclarable // reassignable // scope   // hoisted
    [`none`,  `<decl> $<name> = <value>`,    `init`,      `re`,        `re`,              `block`, `stagnant`],
    [`const`, `<decl> $<name> = <value>`,    `init`,      `no`,        `no`,              `block`, `stagnant`],   
    [`define`,`<decl>('<name>', <value>)`,   `init`,      `??`,        `??`,              `block`, `stagnant`],    
],
ruby:[    
    // declaration // syntax      // assignable stage // redeclarable // reassignable // scope   // hoisted
    [`none`,  `$<name> = <value>`,       `init`,      `no`,        `re`,              `global`, `stagnant`],
    [`@@`, `<decl> <name> = <value>`,    `init`,      `no`,        `re`,              `class`, `stagnant`],   
    [`none`,`<decl> <Name> = <value>`,   `init`,      `no`,        `no`,              `block`, `stagnant`],
    // [`self`, `<decl>.<name>`]    
],
perl: [    
    // declaration // syntax      // assignable stage // redeclarable // reassignable // scope   // hoisted
/*scalar*/[`$`,  `<decl><name> = <integer | string | float>`,       `init`,      `no`,        `re`,              `block`, `stagnant`],
/*array*/ [`@`,  `<decl><name> = <array>`,  `init`,      `no`,        `re`,              `block`, `stagnant`],
/*hash*/  [`%`,  `<decl><name> = <hash>`,   `init`,      `no`,        `re`,              `block`, `stagnant`],
],
lua:        "",
r:          "",
lisp:       "",
kotlin:     "",
swift:      "",
go:[
    [`var`,  `<decl> <name> <type> = <value>`,       `post`,      `no`,        `re`,              `block`, `stagnant`],
    [`const`,`<decl> <name> <type> = <char | string, boolean, numeric>`,       `post`,      `no`,        `re`,              `block`, `stagnant`]
],         
java:[
    [`none`,  `<ifConst> <type> <name> = <value>`,       `post`,      `no`,        `re`,              `block`, `stagnant`],
],
cpp:[
    [`none`,  `<ifConst> <type> <name> = <value>`,       `post`,      `no`,        `re`,              `block`, `stagnant`],
],
c:[
    [`none`,  `<type> <name> = <value>`,       `post`,      `no`,        `yes`,             `block`, `stagnant`],
    [`none`,  `const <type> <name> = <value>`, `init`,      `no`,        `no`,              `block`, `stagnant`],
    [`none`,  `#define <name> <value>`,        `init`,      `no`,        `no`,              `block`, `stagnant`],
],
"c#":[
    [`none`,  `<type> <name> = <value>`,       `post`,      `no`,        `yes`,             `block`, `stagnant`],
    [`none`,  `const <type> <name> = <value>`, `init`,      `no`,        `no`,              `block`, `stagnant`],
],
rust:[
    [`let`,  `<decl> <mut> <name>:<type> = <value>`,       `post`,      `no`,        `yes`, `block`, `stagnant`],
    [`const`,`<decl> <name>:<type> = <value>`,             `init`,      `no`,        `no`,  `block`, `stagnant`],
],
fortran:    "",
x86:        "",
arm32:      "",
arm64:      "",
wasm:       ""
}
]