import React, {Component} from 'react';
import { Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button } from 'reactstrap';
 import items from "../Data/horror.json";
 import { Container, Row, Col } from 'reactstrap';
  
  const MyBook = (props) => {
    
    const shows = items.map(item => {
   return (
    
        
<Card>
  <CardImg  src={item.img} alt={item.title} />
  <CardBody>
    <CardTitle>{item.title}</CardTitle>
    <CardText><p><strong>Price:</strong>${item.price}</p></CardText>
    <Button>Button</Button>
  </CardBody>
</Card>









);
});

    
   var lat = shows.slice(0,10);
   return lat;
};     
 
export default MyBook;

