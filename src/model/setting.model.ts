import mongoose, { Schema, model } from "mongoose";

interface ISetting {
    ownerId: string
    businessName: string
    supportEmail: string
    knowledge: string
}

const settingsSchema = new Schema<ISetting>({
    ownerId: {
        type: String,
        required: true,
        unique:true

    },
    businessName: {
        type: String,
       

    },
    supportEmail: {
        type: String,
       

    },
    knowledge: {
        type: String,
        

    },
}, { timestamps: true })


const Settings = mongoose.models.Settings || model("Settings", settingsSchema)

export default Settings