import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const userSchema = new Schema({
    name: { type: String, 
        required: [true, "Please Enter Name"] 
    },
    email: { 
        type: String,
        required: [true, "Please Enter Email"], 
        unique: true 
    },
}, { 
    timestamps: true 
});
export const User = mongoose.model('User', userSchema);
//export default mongoose.model('User', userSchema, 'users');
