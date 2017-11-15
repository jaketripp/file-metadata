const express = require('express');
const multer  = require('multer');

const app = express();
const upload = multer();

app.use(express.static(__dirname + '/views'));
app.use(express.static(__dirname + '/public'));

app.get('/', (req, res) => {
	res.render('index.html');
});

app.post('/get-file-size', upload.single('file'), function (req, res, next) {
	res.send({size: req.file.size});
});

// app.get('/imgsearch/:search', (req, res) => {

// 	var startIndex = parseInt(req.query.offset) || 1;
//   var cx = process.env.CX;
//   var key = process.env.APIKEY;

// 	request({
// 		url: `https://www.googleapis.com/customsearch/v1?key=${key}&cx=${cx}&hl=en&searchType=image&q=${req.params.search}&num=10&start=${startIndex}`,
// 		json: true
// 	}, function(error, response, body) {

// 		if (!error && response.statusCode === 200) {
// 			var obj = body.items.map((item) => {
// 				return {
// 					url: item.link,
// 					snippet: item.snippet,
// 					thumbnail: item.image.thumbnailLink,
// 					context: item.image.contextLink
// 				};
// 			});
// 			res.send(obj);
// 		} else {
// 			console.log('Unable to fetch data.');
// 		}

// 	});
// });

const port = process.env.PORT || 3000;

app.listen(3000, () => {
	console.log(`Server is up on port ${port}`);
});
