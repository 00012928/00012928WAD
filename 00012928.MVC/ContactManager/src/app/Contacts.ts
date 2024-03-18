export interface Contacts{
    id:number,
    name:string,
    phoneNumber:number,
    categoryId:number,
    category:{
        id:number,
        name:string
    }
}