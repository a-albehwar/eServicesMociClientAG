import { OnSiteTaskAttachment } from "./taskattachment.model"

export class OnSiteTask{
    ID : any
    UserID!:any
    TaskTitle! : string
    TaskDescription!:string
    TaskSubmittedWork!:string
    TaskClassification!:string
    TaskPriority!:string
    TaskCompletePercent!:string
    TaskDeadLine!:string
    TaskStatus!:string
    TaskDate!:string
    Created!:string
    CreatedBy!:string
    Modified!:string
    ModifiedBy!:string
    Attachments!:OnSiteTaskAttachment[]
}