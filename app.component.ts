import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'student-registration-app';

  studentList:any[] = [
    { name: 'John Doe',
       age: 20,
        email: 'john@gmail.com',
        course: 'Computer Science' },
  ];

   student:any= {name:'' ,age:'', email:'',course:""};
  registerStudent() {

    if(this.student.name && this.student.age &&this.student.email &&this.student.course) {
      this.studentList.push({...this.student});
      this.resetform();
    }

}
resetform() {
    this.student = {name:'' ,age:'', email:'',course:""};
}

deleteStudent(index: number) {
    this.studentList.splice(index, 1);
}

}
