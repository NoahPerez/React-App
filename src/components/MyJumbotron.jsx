import React, {Component} from 'react';
import { Jumbotron, Container } from 'reactstrap'


 const JumboBook = (props) => {
       return (
          <div>
            <Jumbotron fluid>
              <Container fluid>
                <h1 className="display-3">My BookStore</h1>
                <p className="lead">Books For Everyone!</p>
              </Container>
            </Jumbotron>
          </div>
            );
        };
    


export default JumboBook;