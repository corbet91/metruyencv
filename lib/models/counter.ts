import mongoose, { model } from "mongoose";

const CounterSchema = new mongoose.Schema({
  sequenceValue: {
    type: Number,
    default: 0,
  },
});

module.exports = mongoose.model("Counter", CounterSchema);

const Counter = mongoose.models?.Counter || model("Counter", CounterSchema);

export default Counter;
