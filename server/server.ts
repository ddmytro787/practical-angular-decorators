import * as express from 'express';
import { Application } from 'express';
import { getAllCourses } from './get-courses.route';

const bodyParser = require('body-parser');

const app: Application = express();

const cors = require('cors');

app.use(cors({ origin: true }));
app.use(bodyParser.json());

app.route('/api/courses').get(getAllCourses);

const httpServer: any = app.listen(9000, () => {
	console.log('HTTP REST API Server running at http://localhost:' + httpServer.address().port);
});
