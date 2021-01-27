const { model, Schema } = require("mongoose");

const taskSchema = new Schema(
  {
    title: String,
    completed: {
      type: Boolean,
      default: false
    },
    description: String,
    date: {
      type: Date,
      default: Date.now
    },
    author: { type: Schema.Types.ObjectId, ref: 'User' }
  },
  {
    timestamps: true
  }
);

module.exports = model("Task", taskSchema);