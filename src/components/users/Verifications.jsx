import React from 'react'
import { useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap'
import { svgs } from '../nav/svgIcons';
import { allUsersData } from './allUsersData';
import ShowingVeri from './ShowingVeri';
import Usertable from './userTable/Usertable';
import VeriDetails from './VeriDetails/VeriDetails';

import './verifications.scss';
const Verifications = () => {
  let [showing, setShowing] = useState({ val: 10 });
  let [details, setDetails] = useState(false);
  let [info, setInfo] = useState(null);

   const numOptions = [
  {
    label: '10',
    value: "10",
    selected: true
  },
  {
    label: "20",
    value: "20"
  },
  {
    label: "30",
    value: "30"
  }
];
  return (
    <Container fluid >
      {
        !details && 
      <div className='verifications'>
      <Row>
        <Col className="row1">
          <h1>VERIFICATIONS</h1>
        </Col>
      </Row>
      <div className="parent">
      <Row>
        <Col className="row2">
            <h3 className="title">Verifications</h3>
            <div className="second">
              <div className="cell1">
              <span className="disc">List of all currently Active verifications</span>
              </div>
              <div className="cell2">
                <label htmlFor="search">Search</label>
                <input type="text" name='search' id='search' />
              </div>
              <div className="cell3">
                <span className="sho">Showing</span>
                <span className='drop'> <ShowingVeri opt={numOptions} icon={svgs.dropdown}  /> </span>
                <span className="wing">Entries</span>
              </div>

            </div>
          </Col>
         </Row>  
          <Row>
            <Col className="row3">
              <h5>Active Verifications</h5>
              <div className="hori"> <div className="a"></div> <div className="b"></div> </div>
             </Col>
        </Row>
         
        <Usertable
          header={
            {
              item1: 'User',
              item2: 'Email | Phone',
              item3: 'Joined At',
              item4: 'Wallet Balance',
              item5: '',
             }
          }
          array={allUsersData}
          cols={
            {
              col1: ['', 2],
              col2: [1],
              col3: [1],
              col4: [1],
              col5: ['',2],
            }
          }
          toShow={
            {
             item1: 'userName', 
             item2: 'phoneNumber', 
             item3: 'date', 
             item4: 'totalBalance', 
             item5: 'Details', 
            }
          }
          showing={showing}
                setDetails={setDetails}
                setInfo={setInfo}
                
        />

      </div>
      
      </div>   

      }

      {
        details && 
        <VeriDetails setDetails={setDetails} info={info && info} />
      }

    </Container>
  )
}

export default Verifications