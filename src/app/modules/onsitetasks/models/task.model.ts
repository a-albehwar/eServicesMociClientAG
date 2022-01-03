import { OnSiteTaskAttachment } from "./taskattachment.model"

export class OnSiteTask{
    id : any
    userID!:any
    taskTitle! : string
    taskDescription!:string
    taskSubmittedWork!:string
    taskClassification!:string
    taskPriority!:string
    taskCompletePercent!:string
    taskDeadLine!:string
    taskStatus!:string
    taskDate!:string
    created!:string
    createdBy!:string
    modified!:string
    modifiedBy!:string
    attachments!:OnSiteTaskAttachment[]
}