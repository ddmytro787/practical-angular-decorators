import { AfterViewInit, ChangeDetectionStrategy, Component, ViewChild } from '@angular/core';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { Course } from '../../interfaces/course';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { CoursesService } from '../../services/courses.service';
import { Unsubscribe } from '../../decorators/unsubscribe.decorator';
import { finalize, Subscription, tap } from 'rxjs';
import { NgOptimizedImage, NgTemplateOutlet } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { Confirm } from '../../decorators/confirm.decorator';

@Component({
	selector: 'app-confirm',
	standalone: true,
	imports: [
		HttpClientModule,
		MatTableModule,
		MatPaginatorModule,
		NgOptimizedImage,
		MatMenuModule,
		MatButtonModule,
		MatIconModule,
		NgTemplateOutlet,
	],
	templateUrl: './confirm.component.html',
	styleUrl: './confirm.component.scss',
	changeDetection: ChangeDetectionStrategy.OnPush,
	providers: [CoursesService],
})
export class ConfirmComponent implements AfterViewInit {
	displayedColumns: string[] = ['iconUrl', 'description', 'category', 'lessonsCount', 'actions'];
	dataSource = new MatTableDataSource<Course>([]);
	@ViewChild(MatPaginator) paginator!: MatPaginator;
	isLoadingCourses: boolean = false;

	constructor(private coursesService: CoursesService) {
		this.getCourses();
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
				finalize(() => (this.isLoadingCourses = false)),
			)
			.subscribe();
	}

	@Confirm('Are you sure you want to remove following item: {{id}}?')
	removeCourse(name: string) {
		console.log(`Course "${name}" is removing...`);
	}
}
