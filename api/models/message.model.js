import mongoose from 'mongoose';
const { Schema } = mongoose;

const userSchema = new Schema({
  
}, {
  timestamp: true
});

export default mongoose.model("User", userSchema);