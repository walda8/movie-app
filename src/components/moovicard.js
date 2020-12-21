import React from 'react'
import {Card} from 'react-bootstrap'
import '../App.css';
import ReactStars from "react-rating-stars-component";


export default function MooviCard({el}){

  
    

    return (
        <>
<Card >
  
  <Card.Body>

    <Card.Text>{el.image} </Card.Text>
    <Card.Title>{el.name}</Card.Title>
    <Card.Text>{el.type} </Card.Text>
    <ReactStars value={el.rate}/>
    

  </Card.Body>
</Card>
        </>
    )

}


