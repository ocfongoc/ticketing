import { Publisher, Subjects, TicketCreatedEvent } from "@bnmtickets/common";

export class TicketCreatedPublisher extends Publisher<TicketCreatedEvent> {
  readonly subject = Subjects.TicketCreated;
}
