import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-joinacadamy',
  templateUrl: './joinacadamy.component.html',
  styleUrls: ['./joinacadamy.component.css']
})
export class JoinacadamyComponent {
  selectFile() {
    throw new Error('Method not implemented.');
    }
      
      uploadedImage: any;
    
    constructor( private toaster:ToastrService)
  {}
  showtoaster()
  {
     this.toaster.success("Form Submitted Successfully..!")
  }
    
      onFileSelected(event: any) {
        const file = event.target.files[0];
        if (file) {
          const reader = new FileReader();
          reader.readAsDataURL(file);
          reader.onload = () => {
            this.uploadedImage = reader.result;
          };
        }
      }

    
    
}
