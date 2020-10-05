import {ChangeDetectorRef, Component, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {MembersService} from "../../services/members-service";
import {Member} from "../../../../model/Member";
import {environment} from "../../../../../environments/environment";
import {FileUploader} from "ng2-file-upload";
import {FileModel} from "../../../../model/FileModel";
import {CookieService} from "ngx-cookie-service";
import {CommentModel} from "../../../../model/CommentModel";
import {AccessModel} from "../../../../model/AccessModel";

declare var SockJS;
declare var Stomp;

@Component({
  selector: 'app-members',
  templateUrl: './members.component.html',
  styleUrls: ['./members.component.scss']
})
export class MembersComponent implements OnInit, OnChanges {
  public role: string;
  public members: Member[] = [];
  private newMember: Member;
  private index;
  file;
  currentRate = [];
  public files: FileModel[] = [];
  public uploader: FileUploader = new FileUploader({
    url: environment.host + "/member/upload",
    additionalParameter: File
  });
  public currentUser: string;
  public allUsers: AccessModel[];
  public comments: CommentModel[];

  constructor(private service: MembersService,
              private cookieService: CookieService,
              private cdr: ChangeDetectorRef,
  ) {
    this.initializeWebSocketConnection();
  }

  public stompClient;

  initializeWebSocketConnection() {
    const serverUrl = 'https://questionnaireportal.herokuapp.com/ws';
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
            if (that.newMember.userId === el.userId) {
              that.index = that.members.indexOf(el);
              that.members.splice(that.index, 1);
            }
          })
          that.stompClient.unsubscribe();
        }
      )

      that.stompClient.subscribe('/topic/raise_hand', (message) => {
        that.newMember = JSON.parse(message.body);
        that.members.forEach(el => {
          if (that.newMember.userId === el.userId) {
            that.index = that.members.indexOf(that.newMember);
            el.raisedHand = !el.raisedHand;
          }
        })
      });

      that.stompClient.subscribe('/topic/upload', (message) => {
          let newMessage = JSON.parse(message.body);
          that.files.push(newMessage);
        }
      );

      that.stompClient.subscribe('/topic/delete', (message) => {
          let newMessage = JSON.parse(message.body);
          that.files.forEach(el => {
            if (newMessage == el.id) {
              that.index = that.files.indexOf(el);
              that.files.splice(that.index, 1);
            }
          })
        }
      );

      that.stompClient.subscribe('/topic/rate', (message) => {
          let newMessage = JSON.parse(message.body);
          that.files.forEach(el => {
            if (newMessage.fileId == el.id) {
              el.rate = newMessage.rate;
            }
          })
        }
      );

      that.stompClient.subscribe('/topic/comment', (message) => {
          let newMessage = JSON.parse(message.body);
          that.comments.push(newMessage);
        }
      );
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
    this.service.list().subscribe((data: FileModel[]) => {
      this.files = data;
      this.files.forEach(file => {
        this.currentRate[file.id] = this.file?.rate;
      })
      this.currentUser = this.cookieService.get("userId");
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

  getComments(fileId) {
    this.service.getComments(fileId).subscribe((data: CommentModel[]) => {
      this.comments = data;
    })
  }

  getAllAccessUsers() {
    this.service.getAccessUsers().subscribe((data: AccessModel[]) => {
      this.allUsers = data;
    })
  }

  userCanWatch(canWatch: []): boolean {
    let isTrue;
    canWatch.forEach(el => {
      if (el == this.currentUser) {
        isTrue = true;
      } else {
        isTrue = false;
      }
    })
    return isTrue;

  }

  sendStars(event, i) {
    console.log(event);
    this.service.rate(this.files[i].id, event).subscribe(data => {
    })
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log(changes);
  }
}



