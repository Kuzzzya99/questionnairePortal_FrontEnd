import {Component, OnInit} from '@angular/core';
import {MembersService} from "../../services/members-service";
import {Member} from "../../../../model/Member";
import {environment} from "../../../../../environments/environment";
import {FileUploader} from "ng2-file-upload";

declare var SockJS;
declare var Stomp;

@Component({
  selector: 'app-members',
  templateUrl: './members.component.html',
  styleUrls: ['./members.component.scss']
})
export class MembersComponent implements OnInit {
  public role: string;
  public members: Member[] = [];
  private newMember: Member;
  private index;
  file;
  currentRate = 8;
  public files: [] = [];
  public uploader: FileUploader = new FileUploader({
    url: environment.host + "/member/upload",
    additionalParameter: File
  });

  constructor(private service: MembersService) {
    this.initializeWebSocketConnection();
  }

  public stompClient;

  initializeWebSocketConnection() {
    const serverUrl = 'http://localhost:8087/ws';
    const ws = new SockJS(serverUrl);
    this.stompClient = Stomp.over(ws);
    const that = this;
    this.stompClient.connect({}, function (frame) {

      that.stompClient.subscribe('/topic/join', (message) => {
        that.newMember = JSON.parse(message.body);
        that.members.push(that.newMember);
      })

      that.stompClient.subscribe('/topic/leave', (message) => {
          that.newMember = JSON.parse(message.body);
          that.members.forEach(el => {
            if (that.newMember.id === el.id) {
              that.index = that.members.indexOf(that.newMember);
              that.members.splice(that.index, 1);
            }
          })
          that.stompClient.unsubscribe();
        }
      )

      that.stompClient.subscribe('/topic/raise_hand', (message) => {
        that.newMember = JSON.parse(message.body);
        that.members.forEach(el => {
          if (that.newMember.id === el.id) {
            that.index = that.members.indexOf(that.newMember);
            el.raisedHand = !el.raisedHand;
          }
        })
      });
    });

  }

  ngOnInit(): void {
    this.fileUploader();
  }


  getAllMembers() {
    this.service.findAllMembers().subscribe((data: Member[]) => {

      this.members = data;
    })
  }

  setRoleStudent() {
    this.role = "student";
    this.join();
  }

  setRoleTeacher() {
    this.role = "teacher";
    this.join();
  }

  join() {
    this.getAllMembers();
    this.list();
    this.stompClient.subscribe('/topic/join');
    this.stompClient.subscribe('/topic/leave');
    this.stompClient.subscribe('/topic/raise_hand');

    this.service.join(this.role).subscribe((data: Member) => {

      },
      error => {
        alert("You have already join")
      })
  }

  risehand() {
    this.service.riseHand().subscribe((data: Member) => {
    })
  }

  leave() {
    this.service.leave().subscribe((data: Member) => {
      this.stompClient.unsubscribe();
      this.members = [];
      this.files = [];
    })
  }

  deleteMember(userId) {
    this.service.deleteMember(userId).subscribe((data: Member) => {
    })
  }

  list() {
    this.service.list().subscribe((data: any) => {
      this.files = data;
    })
  }

  upload() {
    this.service.upload(this.file).subscribe((data: String) => {
    })
  }

  delete(fileName) {
    this.service.delete(fileName).subscribe((data) => {
    })
  }

  download(fileName) {
    this.service.download(fileName).subscribe((data: any) => {
      console.log(data);
      // window.open('https://questionnaire-portal-bucket.s3.eu-west-2.amazonaws.com/'+data.key);
    })
  }

  fileUploader() {
    this.uploader.onAfterAddingFile = (file) => {
      file.withCredentials = false;
    };
    this.uploader.onCompleteItem = (item: any, response: any, status: any, headers: any) => {
      console.log('ImageUpload:uploaded:', item, status, response);
      alert('File uploaded successfully');
    };
  }


  onFileSelected($event: any) {
    this.file = $event.target.files[0];
  }
}



