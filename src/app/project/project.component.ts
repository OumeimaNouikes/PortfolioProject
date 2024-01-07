import { Component, Input, OnInit } from '@angular/core';
import { Project } from '../models/Project';
import { ProjectService } from '../project.service';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss'],
})
export class ProjectComponent   {

  showDeleteButton: boolean = false;

  @Input() project!: Project;
  constructor(private projectService: ProjectService) {}
  toggleDeleteButton(): void {
    this.showDeleteButton = !this.showDeleteButton;
  }
  deleteproject(): void {
    this.projectService.removeProject(this.project)
    
  }
  
}
