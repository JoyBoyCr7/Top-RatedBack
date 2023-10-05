import mongoose from "../db/connection.js";
const showSchema = new mongoose.Schema({
    showName: String,
    yearWatched: String,
    showImage: String,
    intrestLevel: Number,
    wouldRecommend: Boolean,
    Description: String,
    userName: String
}, { timestamps: true });
const show = mongoose.model("Show", showSchema);
export default show;
//# sourceMappingURL=show.js.map