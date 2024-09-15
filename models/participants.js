const { Schema, model } = require("mongoose");
const leaderboard = require("./leaderboard");

const participantSchema = new Schema({
  userId: { type: Schema.Types.ObjectId, ref: "user", required: true },
  leaderboardID: { type: Schema.Types.ObjectId, ref: "leaderboard" },
  userName: String,
  score: Number,
  totalScore: Number,
  attempt: { type: Number, default: 0 },
});

const Participant = model("Participant", participantSchema);

module.exports = Participant;
