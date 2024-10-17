import { REPORT_TYPE, Status } from "@/enum/ticket";
import { TicketDocument } from "@/types/tickets";
import mongoose, { model, Schema } from "mongoose";
import Counter from "./counter";

const TicketSchema = new Schema<TicketDocument>(
  {
    id: {
      type: Number,
      unique: true,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    report: {
      type: String,
      enum: [
        REPORT_TYPE.BUG_CARD,
        REPORT_TYPE.BUG_FUNCTION,
        REPORT_TYPE.BUG_OTHER,
      ],
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      enum: [Status.open, Status.inProgress, Status.closed],
      default: Status.open,
    },
    userId: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
  },
  { timestamps: true }
);

TicketSchema.pre("save", async function (next) {
  if (!this.isNew) return next();

  const counter = await Counter.findOneAndUpdate(
    { _id: "ticketId" },
    { $inc: { sequenceValue: 1 } },
    { new: true, upsert: true }
  );

  this.id = counter.sequenceValue;
  next();
});

const Ticket =
  mongoose.models?.tickets || model<TicketDocument>("Ticket", TicketSchema);

export default Ticket;
