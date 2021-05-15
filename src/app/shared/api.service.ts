import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private httpClient:HttpClient) { }

  postStudent(data:any)
  {
    return this.httpClient.post(" http://localhost:3000/students/",data)
    .pipe(map((res:any)=>{
       return res;
    }))
  }

  getStudent()
    {
      return this.httpClient.get<any>(" http://localhost:3000/students/")
      .pipe(map((res:any)=>{
        return res;
      }))
    }

    updateStudent(data:any,id:number)
    {
      return this.httpClient.put(" http://localhost:3000/students/"+id,data)
      .pipe(map((res:any)=>
      {
        return res;
      }))
    }

    deleteStudent(id:number)
    {
      return this.httpClient.delete<any>(" http://localhost:3000/students/"+id)
      .pipe(map((res:any)=>{
        return res;
      }))
    }
  
}
