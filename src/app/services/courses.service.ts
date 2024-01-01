import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { Course } from '../components/interfaces/course';

@Injectable({ providedIn: 'root' })
export class CoursesService {
	constructor(private http: HttpClient) {}

	getCourses(): Observable<Course[]> {
		return this.http.get<{ payload: Course[] }>(`/api/courses`).pipe(map((res) => res.payload));
	}
}
