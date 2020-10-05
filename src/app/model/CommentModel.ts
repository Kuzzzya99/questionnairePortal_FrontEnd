export class CommentModel {
  username;
  comment: string;
  fileId: number;

  constructor(username?: string, comment?: string, fileId?: number) {
    this.username = username;
    this.comment = comment;
    this.fileId = fileId;
  }
}
