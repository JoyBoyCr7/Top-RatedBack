import mongoose from "../db/connection.js";


// interface Ishow {
//     showName: String
//     yearWatched: String
//     showImage : String
//     intrestLevel : Number
//     wouldRecommend: Boolean
//     Description : String
//     userName : String
//   }
  

const showSchema = new mongoose.Schema({
    showName: String, 
    yearWatched: String,
    showImage : String, 
    intrestLevel : Number,
    wouldRecommend: Boolean,
    Description : String, 
    userName : String
})

const show = mongoose.model("Show", showSchema)

export default show