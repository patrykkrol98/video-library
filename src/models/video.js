import mongoose from 'mongoose';

const Video = mongoose.Schema({
    title: String,
    url: String,
    description: String,
    tags: String
},{
    versionKey: false // You should be aware of the outcome after set to false
});

export default mongoose.model('Video', Video);