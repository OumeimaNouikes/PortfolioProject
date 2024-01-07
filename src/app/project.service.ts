import { Injectable } from '@angular/core';
import { Project } from './models/Project';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  projects: Project[] = [];

  addProject(project: Project): void {
    this.projects.push(project);
  }
  getAllprojects():Project[]{
    return this.projects
}
removeProject(project:Project): void {
  const index = this.projects.indexOf(project);
  if (index !== -1) {
    this.projects.splice(index, 1);
  }
}
}
