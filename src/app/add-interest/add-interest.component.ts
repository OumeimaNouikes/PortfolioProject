import { Component, OnInit } from '@angular/core';
import { InterestService } from '../interest.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { saveAs } from 'file-saver';
@Component({
  selector: 'app-add-interest',
  templateUrl: './add-interest.component.html',
  styleUrls: ['./add-interest.component.scss'],
})
export class AddInterestComponent  implements OnInit {

  interestForm!: FormGroup;

  constructor(private interestService: InterestService, private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.interestForm = this.formBuilder.group({
      title: [''],
     
      image: [null],
      description: ['']
     
      
    });
  }

  onFileChange(event: any): void {
    const target = event.target as HTMLInputElement;
    const files = target.files;

    if (files && files.length > 0) {
   
      this.interestForm.patchValue({
        image: files[0] as File
      });
    }
  }

  onSave(): void {
    const newinterest = this.interestForm.value;

    const imageFile: File | null = newinterest.image;

    if (imageFile) {
      // Save the image file locally i used file-saver library
      saveAs(imageFile, 'interest_image.jpg');
    }
    this.interestService.addInterest(newinterest);

    
    this.resetForm();
  }

  resetForm(): void {
    this.interestForm.reset();
  }

}
