const express = require('express');
const app = express();
const bp = require('body-parser');
const path = require('path');
const morgan = require('morgan');

app.use( morgan() );
app.use( bp.json() );
app.use(bp.urlencoded({ extended: true }));
app.use('/', express.static('../'));

app.set('port', (process.env.PORT || 3001));
app.listen(app.get('port'), function(){
	console.log('API Server started: http://localhost:' + app.get('port') + '/');
})

//comment