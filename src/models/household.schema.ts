import mongoose, { Schema } from "mongoose";

const householdSchema = new Schema({
  reg: { type: String, required: true },
  cwt: { type: String, required: true },
  amp: { type: String, required: true },
  tmb: { type: String, required: true },
  area: { type: String, required: true },
  ea: { type: String, required: true },
  vil: { type: String, required: true },
  psu_no: { type: String, required: true },
  ea_set: { type: String, required: true },
  month: { type: String, required: true },
  yr: { type: String, required: true },
  hh_no: { type: String, required: true },
  list_gr: { type: String, required: true },
  enum_gr: { type: String },
  members: { type: String },
  listing: { type: String, required: true },
  mem_dis: { type: String },
  enum: { type: String, required: true },
  status: { type: String, required: true },
  create_date: {
    type: Date,
    default: new Date(),
  },
  edit_date: {
    type: Date,
    default: new Date(),
  },
});

export default mongoose.model("Household", householdSchema);
