const { model, Schema } = require("mongoose");
const Participant = require("./participants");

const leaderboardSchema = new Schema(
  {
    quizId: { type: Schema.Types.ObjectId, ref: "quiz", required: true },
    participants: [{ type: Schema.Types.ObjectId, ref: "participant" }],
    totalScore: { type: Number },
  },
  { timestamps: true }
);

const leaderboard = model("leaderboard", leaderboardSchema);

module.exports = leaderboard;
