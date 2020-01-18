import web3 from "./web3";

const VoteEvent = require("./VoteEvent");
const Voting = require("./Voting.json")

export default {
    VoteEvent: addr => new web3.eth.Contract(VoteEvent.abi, addr),
    Voting: new web3.eth.Contract(Voting.abi, "0x7ddf480f7c84f144d996bd86c9b87f939d44102c")
}