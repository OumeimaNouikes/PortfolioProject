import { Component, OnInit } from '@angular/core';
import { Project } from '../models/Project';
import { ProjectService } from '../project.service';

@Component({
  selector: 'app-list-of-projects',
  templateUrl: './list-of-projects.component.html',
  styleUrls: ['./list-of-projects.component.scss'],
})
export class ListOfProjectsComponent  implements OnInit {

  projects: Project[] = [];

  constructor(private projectservice: ProjectService) {}

  ngOnInit(): void {
    
    this.projects = this.projectservice.getAllprojects();
  }

}
