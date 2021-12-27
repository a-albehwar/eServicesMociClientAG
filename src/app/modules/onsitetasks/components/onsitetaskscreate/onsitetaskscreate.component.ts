import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ResponseMessage } from 'src/app/core/models/responsemessage.model';
import { User } from 'src/app/modules/users/models/user.model';
import { UserService } from 'src/app/modules/users/services/user.service';
import { OnSiteTask } from '../../models/task.model';
import { OnSiteTaskAttachment } from '../../models/taskattachment.model';
import { OnSiteTaskService } from '../../services/task.service';

@Component({
  selector: 'app-onsitetaskscreate',
  templateUrl: './onsitetaskscreate.component.html',
  styleUrls: ['./onsitetaskscreate.component.scss']
})
export class OnsitetaskscreateComponent implements OnInit {
  // dataSource = new MatTableDataSource<OnSiteTask>();

  onsitetask: OnSiteTask =  {
    TaskTitle: '',
    TaskDescription: '',
    TaskDate: '',
    ID: undefined,
    UserID: undefined,
    TaskClassification: '',
    TaskPriority: '',
    TaskCompletePercent: '',
    TaskDeadLine: '',
    TaskStatus: '',
    Created: '',
    CreatedBy: '',
    Modified: '',
    ModifiedBy: '',
    Attachments: [],
    TaskSubmittedWork: ''
  };

  user:User={
    id: undefined,
    userDisplayName: '',
    userEmail: '',
    userDomainName: '',
    userMobileNumber: '',
    userDepartment: '',
    userJobTitle: '',
    created: '',
    createdBy: ''
  }

  dialogExist:any;
  @ViewChild('fileInput') fileInput!: ElementRef;
  fileAttr = 'اختر الصور والملفات';
  UserResponseMessage!:ResponseMessage;
  Users!:User[]
  //selectedUserValue!:User;
  //fileattachments!:OnSiteTaskAttachment[];
  constructor(private onsitetaskservice:OnSiteTaskService,public dialog: MatDialog,private userservice:UserService) {
    
    this.userservice.getAll()
    .subscribe({
      next: 
     (data) => {
       this.Users=data as User[];    
       console.log(this.Users);
     },
     error: (e) => console.error(e)
   });

   }

  ngOnInit(): void {
     this.dialogExist = this.dialog.getDialogById('createdgid');
  }

  saveTask(): void {
    const data = {
      taskTitle: this.onsitetask.TaskTitle,
      taskDescription: this.onsitetask.TaskDescription,
      Attachments:this.onsitetask.Attachments,
      UserID:this.onsitetask.UserID
    };

    this.onsitetaskservice.create(data)
      .subscribe({
        next: (res) => {
          console.log(res);
          alert('تم انشاء المهمة بنجاح');
        },
        error: (e) => console.error(e)
        
      });
  }
  newTask():void{
    this.onsitetask = {
      TaskTitle: '',
      TaskDescription: '',
      TaskSubmittedWork:'',
      TaskDate: '',
      ID: undefined,
      UserID: undefined,
      TaskClassification: '',
      TaskPriority: '',
      TaskCompletePercent: '',
      TaskDeadLine: '',
      TaskStatus: '',
      Created: '',
      CreatedBy: '',
      Modified: '',
      ModifiedBy: '',
      Attachments:[]
    };
  }

   uploadFileEvt(imgFile: any) {
    if (imgFile.target.files && imgFile.target.files[0]) {
      this.fileAttr = '';
       Array.from(imgFile.target.files).forEach( async (file: any) => {
        
        this.fileAttr += file.name + ' - ';
        this.getBase64(file);
       
        
      });

      this.fileInput.nativeElement.value = "";
    } else {
      this.fileAttr = 'اختر الملفات';
    }
  }

   getBase64(file:any) {
    const self = this;
    var reader = new FileReader();
    reader.readAsDataURL(file);
    
    reader.onload = function () {    

      const result: string = reader.result as string;
      let attachment:OnSiteTaskAttachment =new OnSiteTaskAttachment();
      attachment.Attachment=result;
      attachment.Created=Date.now().toLocaleString();
      self.onsitetask.Attachments.push(attachment);
      // return result;
    };
  
    reader.onerror = function (error) {
      console.log('Error: ', error);
    };
    
    // console.log(result);
    // return result;
  }
  
}
