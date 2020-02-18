import React from 'react';
import { Column } from 'simple-flexbox';
import { StyleSheet, css } from 'aphrodite/no-important';
import MiniCardComponent from './MiniCardComponent';
import TodayTrendsComponent from './TodayTrendsComponent';
import UnresolvedTicketsComponent from './UnresolvedTicketsComponent';
import TasksComponent from './TasksComponent';
import {
    container,
    Table,
    Card,
    Row,
    Col,
    Button, Form, FormGroup, Label, Input, FormText
  } from 'reactstrap';
  import {
    BrowserRouter as Router,
    Route,
    Link
  } from 'react-router-dom';
const styles = StyleSheet.create({
    cardsContainer: {
        marginRight: -30,
        marginTop: -30
    },
    cardRow: {
        marginTop: 30,
        '@media (max-width: 768px)': {
            marginTop: 0
        }
    },
    miniCardContainer: {
        flexGrow: 1,
        marginRight: 30,
        '@media (max-width: 768px)': {
            marginTop: 30,
            maxWidth: 'none'
        }
    },
    todayTrends: {
        marginTop: 30
    },
    lastRow: {
        marginTop: 30
    },
    unresolvedTickets: {
        marginRight: 30,
        '@media (max-width: 1024px)': {
            marginRight: 0
        }
    },
    tasks: {
        marginTop: 0,
        '@media (max-width: 1024px)': {
            marginTop: 30,
        }
    }
});

const Example = (props) => {
    return (
        <Row form inline>
        {/* <Col lg="4"></Col>
          <Col lg="4"> */}
          <FormGroup>
              {/* <Label for="restaurantName">Name</Label> */}
              {/* <Input type="text" name="name"  id="name" required={true} value="" laceholder="Name" />
              <span id="nameerror" style={{color:"red", display:"none"}}>Enter correct Name(Don't use special chars minimum 5 chars)</span> */}
                <Input type="select" bsSize="md">
                <option>SElect category</option>
                <option>Php</option>
                <option>Javascript</option>
                <option>Graphic design</option>
                <option>Android</option>
                <option>Ios</option>
                </Input>
          </FormGroup>
      
          <FormGroup>
              {/* <Label for="restaurantName">Name</Label> */}
              <Input type="text" name="name"  id="name" required={true}  laceholder="Name" />
              {/* <span id="nameerror" style={{color:"red", display:"none"}}>Enter correct Name(Don't use special chars minimum 5 chars)</span> */}
          </FormGroup>
          <FormGroup>
              {/* <Label for="restaurantName">Name</Label> */}
              <Input type="text" name="name"  id="name" required={true} laceholder="Name" />
              {/* <span id="nameerror" style={{color:"red", display:"none"}}>Enter correct Name(Don't use special chars minimum 5 chars)</span> */}
          </FormGroup>
          
          <FormGroup>
              {/* <Label for="restaurantName">Name</Label> */}
              <Input type="text" name="name"  id="name" required={true}  laceholder="Name" />
              {/* <span id="nameerror" style={{color:"red", display:"none"}}>Enter correct Name(Don't use special chars minimum 5 chars)</span> */}
          </FormGroup>
          <FormGroup>
          <Button color="primary"> Submit</Button>
           </FormGroup>
            {/* </Col> */}

      </Row>
    );
  }
  


function ContentComponent() {
    return (
  
            <Row className={css(styles.cardsContainer)} wrap flexGrow={1} horizontal="space-between" break points={{ 768: 'column' }}>
               <Col> 
               {/* <Row className={css(styles.cardRow)} wrap flexGrow={1} horizontal="space-between" breakpoints={{ 384: 'column' }}>
                    <Example className={css(styles.miniCardContainer)} title="Unresolved" value="60" />
                </Row> */}
                    <Example />

                </Col>
            </Row>
    )
               
}

export default ContentComponent;
