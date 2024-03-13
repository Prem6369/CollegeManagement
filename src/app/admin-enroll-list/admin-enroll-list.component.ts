import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { HttpClient } from '@angular/common/http';

export class StudentList {
  constructor(
    public id: number,
    public FirstName: string,
    public LastName: string,
    public Gender: string,
    public Email: string,
    public HighSchoolName: string,
    public HighSchoolGroup: string,
    public HighSchoolMark: number,
    public SecondarySchoolName: string,
    public SecondarySchoolMark: number,
    public CommunityCertificate: SafeResourceUrl,
    public Photo: SafeResourceUrl,
    public Status: number,
  ) {}
}

@Component({
  selector: 'app-admin-enroll-list',
  templateUrl: './admin-enroll-list.component.html',
  styleUrls: ['./admin-enroll-list.component.scss']
})

export class AdminEnrollListComponent implements OnInit {
  studentLists: StudentList[] = [];

  constructor(private httpClient: HttpClient, private sanitizer: DomSanitizer) {}

  ngOnInit(): void {
    this.getStudent();
  }

  getStudent(): void {
    this.httpClient.get<StudentList[]>('https://localhost:44394/api/Admin/Userdetails')
      .subscribe((response: StudentList[]) => {
        this.studentLists = response.map((student: any) => {
          const safeImageUrl = this.sanitizeImage(student.Photo);
          const safeCertificateUrl = this.sanitizeImage(student.CommunityCertificate);
  
          return new StudentList(
            student.id,
            student.firstName,
            student.lastName,
            student.gender,
            student.email,
            student.highSchoolName,
            student.highSchoolGroup,
            student.highSchoolMark,
            student.secondarySchoolName,
            student.secondarySchoolMark,
            safeCertificateUrl,
            safeImageUrl,
            student.status
          );
        });
      }
    );
  }

  private sanitizeImage(image: string): SafeResourceUrl {
    if (image && typeof image === 'string') {
      return this.sanitizer.bypassSecurityTrustUrl(`data:image/png;base64,${image}`);
    }
    return '';
  }

  onStatusChange(student: StudentList): void {
    // Perform actions when the status changes
    console.log(`Status changed for student ${student.id} to ${student.Status}`);

    // You can also make an HTTP request to update the status on the server
    // this.httpClient.post('https://your-api-endpoint/update-status', { id: student.id, status: student.Status })
    //   .subscribe(response => {
    //     console.log('Status updated successfully');
    //   }, error => {
    //     console.error('Error updating status', error);
    //   });
  }
}
