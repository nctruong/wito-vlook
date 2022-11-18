import {
  Subjects,
  Publisher,
  ExpirationCompleteEvent,
} from "@wito/common";

export class ExpirationCompletePublisher extends Publisher<ExpirationCompleteEvent> {
  subject: Subjects.ExpirationComplete = Subjects.ExpirationComplete;
}
