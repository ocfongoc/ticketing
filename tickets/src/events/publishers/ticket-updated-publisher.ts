import { Publisher, Subjects, TicketUpdatedEvent } from "@bnmtickets/common";

export class TicketUpdatedPublisher extends Publisher<TicketUpdatedEvent> {
  readonly subject = Subjects.TicketUpdated;
}
