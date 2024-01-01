import { AfterViewInit, ChangeDetectionStrategy, Component, OnInit, ViewChild } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { finalize, Subject, Subscription, tap } from 'rxjs';
import { CoursesService } from '../../services/courses.service';
import { Course } from '../../interfaces/course';
import { Unsubscribe } from '../../decorators/unsubscribe.decorator';

@Component({
	selector: 'app-unsubscribe',
	standalone: true,
	imports: [HttpClientModule, MatTableModule, MatPaginatorModule, NgOptimizedImage],
	templateUrl: './unsubscribe.component.html',
	styleUrl: './unsubscribe.component.scss',
	changeDetection: ChangeDetectionStrategy.OnPush,
	providers: [CoursesService],
})
export class UnsubscribeComponent implements OnInit, AfterViewInit {
	displayedColumns: string[] = ['iconUrl', 'description', 'category', 'lessonsCount'];
	dataSource = new MatTableDataSource<Course>([]);
	@ViewChild(MatPaginator) paginator!: MatPaginator;
	isLoadingCourses: boolean = false;
	subject = new Subject();

	constructor(private coursesService: CoursesService) {
		this.getCourses();
		this.getDataFromSubject();
	}

	ngOnInit() {
		let count = 0;
		setInterval(() => this.subject.next(count++), 2000);
	}

	ngAfterViewInit() {
		this.dataSource.paginator = this.paginator;
	}

	@Unsubscribe
	getCourses(): Subscription {
		this.isLoadingCourses = true;
		return this.coursesService
			.getCourses()
			.pipe(
				tap((courses) => (this.dataSource.data = courses)),
				finalize(() => {
					this.isLoadingCourses = false;
					console.log('getCourses done');
				}),
			)
			.subscribe();
	}

	@Unsubscribe
	getDataFromSubject() {
		return this.subject
			.pipe(
				finalize(() => {
					console.log('getDataFromSubject done');
				}),
			)
			.subscribe(console.log);
	}
}
