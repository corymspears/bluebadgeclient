import React, {useState, useEffect} from 'react';
import { Row, Col, } from 'reactstrap';
import Builder from './builder';

const BoardIndex = (props) => {
 return(
   <div>
    <Row>
      <Col>
        <Builder />
      </Col>
    </Row>
   </div>
 )
}

export default BoardIndex;