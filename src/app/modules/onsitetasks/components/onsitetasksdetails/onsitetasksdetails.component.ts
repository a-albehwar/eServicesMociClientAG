import { Component, OnInit, Inject, ElementRef, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { OnSiteTask } from '../../models/task.model';
import { OnSiteTaskService } from '../../services/task.service';
import { OnSiteTaskAttachment } from '../../models/taskattachment.model';
import { ResponseMessage } from 'src/app/core/models/responsemessage.model';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-onsitetasksdetails',
  templateUrl: './onsitetasksdetails.component.html',
  styleUrls: ['./onsitetasksdetails.component.scss']
})
export class OnsitetasksdetailsComponent implements OnInit {

  onsitetask: OnSiteTask = {
    id: undefined,
    userID: undefined,
    taskTitle: '',
    taskDescription: '',
    taskSubmittedWork: '',
    taskClassification: '',
    taskPriority: '',
    taskCompletePercent: '',
    taskDeadLine: '',
    taskStatus: '',
    taskDate: '',
    created: '',
    createdBy: '',
    modified: '',
    modifiedBy: '',
    attachments: []
  };

  dialogExist:any;
  @ViewChild('fileInput') fileInput!: ElementRef;
  fileAttr!:File[] | null;
  ResponseMessage!:ResponseMessage;
  parameters:any;

  constructor(private route: ActivatedRoute, private router: Router,
    @Inject(MAT_DIALOG_DATA) public data: {
      id: any,
      mode: any
    }
  , private onsitetaskservice:OnSiteTaskService,public dialog: MatDialog) { 
    this.parameters=data;
    this.onsitetaskservice.get(data.id)
     .subscribe({
       next: 
      (data) => {
        this.ResponseMessage = data;
        this.onsitetask=this.ResponseMessage.value as OnSiteTask;
       
        // this.dataSource = new MatTableDataSource(this.OnSiteTasks);
        //this.dataSource.data=this.OnSiteTasks;        
        console.log(this.onsitetask);
      },
      error: (e) => console.error(e)
    });

  }



  
  ngOnInit(): void {
    //   this.route.queryParams.subscribe(params => {
    //     console.log(params)
    //     this.CurrentTaskID = params['id'];
    //     this.CurrentMode = params['mode'];
    // });
    this.dialogExist = this.dialog.getDialogById('edittaskgid');

  }

  saveTask(): void {
    const data = {
      id:this.onsitetask.id,
      taskTitle: this.onsitetask.taskTitle,
      taskDescription: this.onsitetask.taskDescription,
      Attachments:this.onsitetask.attachments,
      //UserID:this.onsitetask.userID
      taskSubmittedWork:this.onsitetask.taskSubmittedWork
    };

    this.onsitetaskservice.update(data.id,data)
      .subscribe({
        next: (res) => {
          console.log(res);
          alert('تم تحديث المهمة بنجاح');
        },
        error: (e) => console.error(e)
        
      });
      this.dialog.closeAll();
  }

  uploadFileEvt(imgFile: any) {
    if (imgFile.target.files && imgFile.target.files[0]) {
      //  imgFile.target.setCustomValidity("");
       this.onsitetask.attachments=[];
       this.fileAttr = null;
       Array.from(imgFile.target.files).forEach( async (file: any) => {
        
        //this.fileAttr += file.name + ' - ';
        this.fileAttr=imgFile.target.files;
        this.getBase64(file);
        
        
      });
      
      // this.fileInput.nativeElement.value = "";
    } else {
       this.fileAttr = null;
      // imgFile.target.setCustomValidity("sdasdsa");
      
    }
  }

   getBase64(file:any) {
    const self = this;
    var reader = new FileReader();
    reader.readAsDataURL(file);
    
    reader.onload = function () {    

      const result: string = reader.result as string;
      let attachment:OnSiteTaskAttachment =new OnSiteTaskAttachment();
      attachment.attachment=result;
      attachment.created=Date.now().toLocaleString();  
      // attachment.eTaskID=self.parameters.id;  
      self.onsitetask.attachments.push(attachment);
      //self.fileAttr=file;
      // return result;
    };
  
    reader.onerror = function (error) {
      console.log('Error: ', error);
    };
    
    // console.log(result);
    // return result;
  }

  previewimg(attach:any)
  {
    window.open(attach);
  }

}


