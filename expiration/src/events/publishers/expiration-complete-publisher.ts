import {
  ExpirationCompleteEvent,
  Publisher,
  Subjects,
} from "@bnmtickets/common";

export class ExpirationCompletePublisher extends Publisher<ExpirationCompleteEvent> {
  subject: Subjects.ExpirationComplete = Subjects.ExpirationComplete;
}
