import React from "react";
import Link from "next/link";
import Contract from "../etherium/Contract";
import { ButtonToolbar, Button } from "react-bootstrap";
import "../style/common.scss";

export default class Index extends React.Component {
  async componentDidMount() {
    const Voting = await Contract.Voting.methods.getEvents().call();
    console.log(Voting);
  }

  render() {
    return (
      <ButtonToolbar>
        <Link href="new-vote-event">
          <Button variant="outline-primary">Create new vote event</Button>
        </Link>
      </ButtonToolbar>
    );
  }
}
