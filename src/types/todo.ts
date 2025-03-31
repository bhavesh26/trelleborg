export interface Todo {
    id : string,
    content : string,
    postedBy : string,
    dueDate : Date,
    status : Status
}

export enum Status {
    Pending = "PENDING",
    InProgress = "IN_PROGRESS",
    Completed = "COMPLETED"
  }