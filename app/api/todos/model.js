import mongoose from "mongoose";


const TodoSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Every todo needs a name"],
    trim: true,
    maxlength: [60, "Name cannot be more than 30 characters"],
  },
  dateCreated: {
    type: Date,
  },
  dateDue: Date,
  completedStatus: {
    type: Boolean,
    default: false,
  },
  authorID: {
    type: String,
  },
});

const Todo = mongoose.models.Todo || mongoose.model("Todo", TodoSchema);

export default Todo;
