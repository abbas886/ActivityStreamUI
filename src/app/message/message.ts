export class Message {

  id: number;
  message: string;
  senderID: string;
  receiverID: string;
  circleName: string;
  postedDate: Date;
}

export class CommonMessage {
  circleName: string;
  userName: string;
  messages: Message[];
}

