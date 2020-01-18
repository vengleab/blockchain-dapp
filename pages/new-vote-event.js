import React from "react";
import Contract from "../etherium/Contract";
import { Form, Button, Container, Card, Spinner } from "react-bootstrap";
import Router from "next/router";
import web3 from "../etherium/web3";
import "../style/common.scss";

export default class Index extends React.Component {
  async componentDidMount() {}
  state = {}

  onSubmit = async e => {
    e.preventDefault();

    const accounts = await web3.eth.getAccounts();
    await Contract.Voting.methods
      .createEvent(this.state.description)
      .send({
        from: accounts[0]
      });

    Router.pushRoute('/');
  };

  render() {
    return (
      <Container style={{ paddingTop: "20px" }}>
        {this.state.loading ? (
          <Spinner animation="border" role="status">
            <span className="sr-only">Loading...</span>
          </Spinner>
        ) : (
          <Card border="primary">
            <Card.Header>Vote Event</Card.Header>
            <Card.Body>
              <Card.Title style={{ textAlign: "center" }}>
                Vote Event Info
              </Card.Title>
              <Form onSubmit={this.onSubmit}>
                <Form.Group controlId="formBasicEmail">
                  <Form.Label>Event Description</Form.Label>
                  <Form.Control
                    as="textarea"
                    row="5"
                    placeholder="Enter Event information"
                    onChange={e=>this.setState({description: e.target.value})}
                  />
                </Form.Group>
                <Button variant="primary" type="submit">
                  Submit
                </Button>
              </Form>
            </Card.Body>
          </Card>
        )}
      </Container>
    );
  }
}
