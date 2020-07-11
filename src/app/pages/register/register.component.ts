import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../../services/authentication.service';
import { NbToastrService } from '@nebular/theme';
const toBase64 = file => new Promise((resolve, reject) => {
  const reader = new FileReader();
  reader.readAsDataURL(file);
  reader.onload = () => resolve(reader.result);
  reader.onerror = error => reject(error);
});
@Component({
  selector: 'ngx-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  user:{email,password,type,username,job,image} = {email:null,password:"123456",type:null,username:null,job:"",image:null};
  fileData: File = null;
  previewUrl:any = null;
  uploadedFilePath: string = null;

  constructor(
    private auth:AuthenticationService,
    private toast:NbToastrService
    ) { }

  ngOnInit(): void {
  }
  async fileProgress(fileInput: any) {
    this.fileData = <File>fileInput.target.files[0];
    this.user.image = await toBase64(this.fileData);
    this.preview();
}
  preview() {
    // Show preview
    var mimeType = this.fileData.type;
    if (mimeType.match(/image\/*/) == null) {
      return;
    }

    var reader = new FileReader();
    reader.readAsDataURL(this.fileData);
    reader.onload = (_event) => {
      this.previewUrl = reader.result;
    }
  }
  async register()
  {
    try{
      if(this.user.type=="dataEntry")
        this.user.job = 'مدخل بيانات';
      else if(this.user.type=="admin")
        this.user.job = 'مشرف';
      else if(this.user.type=="investor")
        this.user.job = 'مستثمر';
      await this.auth.createUser(this.user.email,this.user.type,this.user.password,this.user.username,this.user.image,this.user.job);
      this.toast.success("تم التسجيل بنجاح",'نجاح');
    }
    catch(e)
    {
      this.toast.danger(e.error.error,'فشل');
    }
  }

}
