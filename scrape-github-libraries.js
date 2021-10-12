const readFileSync = require("fs").readFileSync;
const writeFileSync = require("fs").writeFileSync;

const searches = readFileSync(`./github-searches-transpilers.txt`,'utf8').split("\n");

const https = require('https');

// be gentle to github servers

let scraper = setInterval(()=>{

	if (searches.length > 0) {

		try {

			let search = searches.shift();

			// search =  escape(search.slice(search.indexOf("+")));
			search = search.slice(search.indexOf("+"));


			const options = {
			  hostname: 'github.com',
			  port: 443,
			  path: `/search?q=transpile${search}`,
			  method: 'GET'
			}

			console.log(search);

			const req = https.request(options, res => {
			  console.log(`statusCode: ${res.statusCode}`)

			  res.on('data', d => {
			    // process.stdout.write(d)

			    writeFileSync(`./github-transpiler-searches/${search}.html`,d);

			  })
			});

			req.on('error', error => {
			  writeFileSync("./errors.txt",error)
			});

			req.end()

		} catch(e) {

		}

	} else clearInterval(scraper)

},10000);