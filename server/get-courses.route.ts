import { Request, Response } from 'express';
import { COURSES } from './db-data';

export function getAllCourses(req: Request, res: Response) {
	console.log('Retrieving courses data ...');
	const timeout = Number(req.query['timeout']) || 1000;
	setTimeout(() => res.status(200).json({ payload: Object.values(COURSES) }), timeout);
}

export function getCourseByUrl(req: Request, res: Response) {
	const courseUrl = req.params['courseUrl'];
	const courses: { url: string }[] = Object.values(COURSES);
	const course = courses.find((course) => course.url == courseUrl);
	setTimeout(() => res.status(200).json(course), 3000);
}
