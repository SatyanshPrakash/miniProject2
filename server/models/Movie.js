import mongoose from "mongoose";

const MovieSchema = mongoose.Schema({
        title: {type: String, required: true, unique: true},
        desc: {type: String },
        image: {type: String },
        imgTitle: {type: String },
        thumbnail: {type: String },
        trailer: {type: String },
        movie: {type: String },
        year: {type: Number },
        ageLimit: {type: Number },
        genre: {type: String },
        isSeries: {type: Boolean },
        
    },
    {timestamps: true},
)

export default mongoose.model("Movie", MovieSchema);