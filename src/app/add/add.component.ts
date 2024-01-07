
import { Component } from '@angular/core';
import { ProjectService } from '../project.service';
import { FormBuilder, FormGroup } from '@angular/forms';

import { saveAs } from 'file-saver';
@Component({
  selector: 'app-add-project',
  templateUrl: './add-project.component.html',
  styleUrls: ['./add-project.component.css'] 
})
export class AddProjectComponent {
  projectForm!: FormGroup;

  constructor(private projectService: ProjectService, private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.projectForm = this.formBuilder.group({
      title: [''],
      image: [null],
      description: ['']
     
      
    });
  }

  onFileChange(event: any): void {
    const target = event.target as HTMLInputElement;
    const files = target.files;

    if (files && files.length > 0) {
   
      this.projectForm.patchValue({
        image: files[0] as File
      });
    }
  }

  onSave(): void {
    const newProject = this.projectForm.value;

    const imageFile: File | null = newProject.image;

    if (imageFile) {
      // Save the image file locally i used file-saver library
      saveAs(imageFile, 'project_image.jpg');
    }
    this.projectService.addProject(newProject);

    
    this.resetForm();
  }

  resetForm(): void {
    this.projectForm.reset();
  }
}
