module.exports = [
    /**
     * instead of trying to transpile to every loop syntax,
     * just focus on the most useful loop. A while loop.
     * Don't even bother with the do whiles or for whiles
     * and don't argue to rely on recursion, recursions cool
     * but terrible for memory usage.
     * 
     * 
     * why the while loop? pre, dur, and post actions make it 
     * more useful than do whiles. also for loops deterministic
     * setup was never safeguarded from accidental infinite loops.
     * 
     *      <code-pre>
     * 
     *      while (<code-limiter>) {
     *          <code-dur>
     *      }
     * 
     *      <code-post>
     * 
     * 
     */

    // js loop statements: continue, break
 
    {

        name: "while loop",


        javascript: `
            <code-pre>

            while (<limiter>) {
                <code-dur>
            }

            <code-post>
        `, 
        nodejs: `
            <code-pre>

            while (<limiter>) {
                <code-dur>
            }

            <code-post>
        `, 
        python:`
            <code-pre>

            while (<limiter>) {
                <code-dur>
            }

            <code-post>
        `,
        php:`
            <code-pre>

            while (<limiter>) {
                <code-dur>
            }

            <code-post>
        `,
        ruby:`
            <code-pre>

            while <limiter> do
                <code-dur>
            end

            <code-post>
        `,
        perl:`
            <code-pre>

            while (<limiter>) {
                <code-dur>
            }

            <code-post>
        `,
        lua:`
            <code-pre>

            while <limiter> do
                <code-dur>
            end

            <code-post>
        `,
        r: `
            <code-pre>

            while (<limiter>) {
                <code-dur>
            }

            <code-post>
        `,
        lisp:`
            <code-pre>

            (loop while (<limiter>) 
                do <code-dur>

            <code-post>
        `,
        kotlin:`
            <code-pre>

            while (<limiter>) {
                <code-dur>
            }

            <code-post>
        `,
        swift:`
            <code-pre>

            while <limiter> {
                <code-dur>
            }

            <code-post>
        `,
        go:`
            <code-pre>

            for <limiter> {
                <code-dur>
            }

            <code-post>
        `,
        java:`
            <code-pre>

            while (<limiter>) {
                <code-dur>
            }

            <code-post>
        `,
        cpp:`
            <code-pre>

            while (<limiter>) {
                <code-dur>
            }

            <code-post>
        `,
        c:`
            <code-pre>

            while (<limiter>) {
                <code-dur>
            }

            <code-post>
        `,
        "c#":`
            <code-pre>

            while (<limiter>) 
            {
                <code-dur>
            }

            <code-post>
        `,
        rust:`
            <code-pre>

            while <limiter> {
                <code-dur>
            }

            <code-post>
        `,
        fortran:`
            <code-pre>

            do while (<limiter>) {
                <code-dur>
            }

            <code-post>
        `,
        x86:        "",
        arm32:      "",
        arm64:      "",
        wasm:       ""
    }
]