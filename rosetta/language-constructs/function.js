module.exports = [
/**
 * 
 * need to build a common function format next
 * 
 * typed by default and commented out for non typed languages.
 * 
 * YESSSS, memory needs to be handled somehow, 
 * when using low level languages.
 * 
 */
{

    name: "function",
    description: "",


    javascript:`
        function <name> (<params>) {
            <code>
        }
    `,
    nodejs:`
        function <name> (<params>) {
            <code>
        }
    `,
    python:`
        def <name> (<params):
            <code>
    `,
    php:`
        function <name> (<params) {
            <code>
        }
    `,
    ruby:`
        def <name> (<params>)
            <code>
        end
    `,
    perl:`
        sub <name> {
            my (<params>) = @_;
            <code>
        }
    `,
    lua:`
        function <name> (<params>) 
            <code>
        end
    `,
    r:`
        <name> <- function(<params>) {
            <code>
        }
    `,
    lisp:`
        (defun <name> (<params>) "<optional documentation>" 
            <code>
        )
    `,
    kotlin:`
        fun <name> (<params>): <type-return> {
            <code>
        }
    `,
    swift:`
        func <name> (<params>) -> <type-return> {
            <code>
        }
    `,
    go:`
        func <name> (<params>) -> <type-return> {
            <code>
        }
    `,
    java:`
        // public class Student {
        //     private String name;
        //     public String getName() {
        //         return name;
        //     }
        //     public void setName(String name) {
        //         this.name = name;
        //     }
        // }
    `,
    cpp:`
        <type-return> <name> (<params>) {
            <code>
        }
    `,
    c:`
        <type-return> <name> (<params>) {
            <code>
        }
    `,
    "c#":`
        <visibility> <type-return> <name> (<params>)
        {
            <code>
        }
    `,
    rust:[`
        fn <name> (<params>) {
            <code>
        }
    `,
        `
        fn <name> (<params>) -> <type-return>    
    `
    ],
    fortran:[`
        function <name> (<params>) <result> <return_var_name>
            <code-declarations>
            <code-block>
        end function <name>
        `,
        `
        subroutine <name> (<params>)
            <code-declarations>
            <code-block>
        `
    ],
    x86:``,
    arm32:      "",
    arm64:      "",
    wasm:       ""
},
]