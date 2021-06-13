const path = require('path');
const express = require('express');
const cors = require('cors');
const fs = require('fs');

const app = express();

app.use(cors());
app.use('/', express.static(path.resolve(__dirname, '../public')));
app.use('/images', express.static(path.resolve(__dirname, '../images')));

app.get('/api/videos.json', (req, res) => {
	fs.readFile(`${__dirname}/videos.json`, {encoding: 'utf-8'}, (err, data) => {
		if (err) {
			res.status(500).send(err);
		}
		res.send(data);
	});
});

app.get('/', (req, res) =>{
	res.sendFile('index.html', { root: 'src' });
  });


app.listen(3000, () => {
	console.log('app listens at port 3000');
});

