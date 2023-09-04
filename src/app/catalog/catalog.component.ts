import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';

import { CatalogRepositoryService } from './catalog-repository.service';
import { IClass } from './class.model';
import { UserRepositoryService } from "../users/user-repository.service"
import { FilterClassesService } from './filter-classes.service';

@Component({
  styleUrls: ['./catalog.component.css'],
  templateUrl: './catalog.component.html'
})
export class CatalogComponent implements OnInit, OnChanges {
  classes: IClass[] = [];
  visibleClasses: IClass[] = [];

  constructor(private filterClassesService: FilterClassesService,
              private catalogRepository: CatalogRepositoryService,
              public userRepository: UserRepositoryService) { }

  ngOnChanges(changes: SimpleChanges): void {

  }

  ngOnInit() {
    var catalogObservable = this.catalogRepository.getCatalog()

    var catalogObservableSubscription = catalogObservable.subscribe(
       (classes: IClass[]) => { this.classes = classes; this.applyFilter('') });
  }

  enroll(classToEnroll: IClass) {
    classToEnroll.processing = true;
    this.userRepository.enroll(classToEnroll.classId)
      .subscribe({
        next: ()=> {},
        error: (err) => { console.error(err); classToEnroll.processing = false },
        complete: () => { classToEnroll.processing = false; classToEnroll.enrolled = true; },
      });
  }

  drop(classToDrop: IClass) {
    classToDrop.processing = true;
    this.userRepository.drop(classToDrop.classId)
      .subscribe({
        error: (err) => { console.error(err); classToDrop.processing = false },
        complete: () => { classToDrop.processing = false; classToDrop.enrolled = false; }
      });
  }

  applyFilter(filter:string) {
    this.visibleClasses = this.filterClassesService.filterClasses(filter, this.classes);
  }
}
