import mongoose from "../db/connection.js";
const { Schema, model } = mongoose;
// showName: String, 
// yearWatched: String,
// showImage : String, 
// intrestLevel : Number,
// wouldRecommend: Boolean,
// Description : String, 
// userName : String
const showSchema = new Schema({
    showName: String,
    yearWatched: String,
    showImage: String,
    rating: Number,
    wouldRecommend: Boolean,
    description: String,
    userName: String
});
const Show = model("Show", showSchema);
export default Show;
//# sourceMappingURL=show.js.map