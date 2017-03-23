import express from 'express';
import {
    ParseServer,
} from 'parse-server';
import ParseDashboard from 'parse-dashboard';

const SERVER_PORT = process.env.PORT || 8080;
const SERVER_HOST = process.env.HOST || 'localhost';
const APP_ID = process.env.APP_ID || 'my-test-app';
const MASTER_KEY = process.env.MASTER_KEY || '70c6093dba5a7e55968a1c7ad3dd3e5a74ef5cac';
const DATABASE_URI = process.env.DATABASE_URI || 'mongodb://localhost:27017/dev';
const IS_DEVELOPMENT = process.env.NODE_ENV !== 'production';
const DASHBOARD_AUTH = process.env.DASHBOARD_AUTH;

const app = express();

app.set('port', SERVER_PORT);

app.get('/', function(request, response) {
    response.send('I am still there, running and alive and now in ES6!!!');
});

app.listen(app.get('port'), function() {
    console.log('My Node app is running on port', app.get('port'));
});
