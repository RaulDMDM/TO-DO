export class Task{
    title: string = '';
    description: string ='';
    status:string ='';
    id:number = 0;

    constructor(title: string, description: string, status: string, id:number){
        this.title = title;
        this.description = description;
        this.status = status;
        this.id = id;
    }


}