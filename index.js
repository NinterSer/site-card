const express 	= require('express');
const app 		= express();
const PORT 		= 8080;

app.set('view engine', 'ejs');

app.get(['/','/index.html'], (req, res)=>{
	res.status(200).sendFile(__dirname+'/site/index.html');
});

app.get(['/resource/:path/:file','/resource/:file'] , (req, res)=>{
	let path = req.params.path===undefined?'':`${req.params.path}/`;
	path = `${__dirname}/site/${path}${req.params.file}`;
	res.status(200).sendFile(path);
});

app.listen(PORT, ()=>{
	console.log(`Server started on http://localhost:${PORT}`);
})