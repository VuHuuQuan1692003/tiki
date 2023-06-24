import mongoose from "mongoose";
const authSchema = mongoose.Schema({
    fullName: String,
    nickName: String,
    email: {
        type: String,
        default: ''
    },
    birth: {
        type: Date,

    },
    phoneNumber: {
        type: String,
        default: ""
    },
    password: {
        type: String,
        require: true,
        min: 8
    },
    gender: {
        type: String,
        enum: ["male", "female", "orther"],
        default: "male"
    },
    nationality: {
        type: String,
        default: "",
        require: true
    },
    role: {
        type: String,
        enum: ["USER", "USER_STORE", "ADMIN"],
        default: "USER"
    }
}, {
    timestamps: true
})
export default mongoose.model("Auth", authSchema)
