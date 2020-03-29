let http = require('http');
let fs = require('fs');
var qs = require('querystring');

let server = http.createServer((req,res)=>{
	res.writeHead(200, {'Content-Type': 'text/html'});
	(req.url=='/')
		res.write("<form method='POST' action='/message'>");
		res.write("<input type='text' name='message'>")
		res.write('<br>')
		res.write('<input type=\'submit\' value=\'submit\'>');
		res.write("</form>");
		if(req.method=='POST'){
			let input='';
			req.on('data', data=>input+=data).on('end', 
				()=>{
				let message= qs.parse(input).message;
				res.writeHead(200,{'Content-Type':'text/html'});
				fs.appendFileSync('./message.txt',message + '\n')
		})}
res.end()
}).listen(8080);



