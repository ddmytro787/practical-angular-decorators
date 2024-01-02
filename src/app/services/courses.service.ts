import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { Course } from '../interfaces/course';

@Injectable({ providedIn: 'root' })
export class CoursesService {
	constructor(private http: HttpClient) {}

	getCourses(timeout: number = 1000): Observable<Course[]> {
		return this.http
			.get<{ payload: Course[] }>(`/api/courses`, {
				params: {
					timeout,
				},
			})
			.pipe(map((res) => res.payload));
	}
}
