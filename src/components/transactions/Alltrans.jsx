import React from 'react'
import { useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap'
import { svgs } from '../nav/svgIcons';
import { transdata } from '../transactions/transtable/transdata';
import ShowingVeri from '../users/ShowingVeri';
import Transtable from '../transactions/transtable/Transtable';
import TransDetails from '../transactions/transdetails/TransDetails';
import TransFilter from '../transactions/transfilter/TransFilter';
import './Alltrans.scss'

const Alltrans = () => {
  let [showing, setShowing] = useState({ val: 10 });
  let [details, setDetails] = useState(false);
  let [info, setInfo] = useState(null);
  let [toggle, setToggle] = useState('none');

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
  function handleShow(){
    setToggle('flex');
  }
  return (
    <Container fluid >
      {
        !details && 
      <div className='alltrans'>
      <Row>
        <Col className="row1">
          <h1>ALL TRANSACTIONS</h1>
        </Col>
      </Row>
      <div className="parent">
      <Row>
        <Col className="row2">
            <h3 className="title">All Transactions</h3>
            <div className="second">
              <div className="cell1">
              <span className="disc">List of all currently Active Transactions</span>
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
              <div className="lev">
                <h5>All Transactions</h5>
                <h5>Pending</h5>
                <h5>Deposit</h5>
                <h5>Withdrawal</h5>
                <h5>
                <div className="item1">
                  <span>Filter</span> <button onClick={()=> handleShow()}>Date</button>
                </div>
                <TransFilter toggle={toggle} setToggle={setToggle} />
                </h5>
                <h5>
                  <div className="cell2">
                  <label htmlFor="search">Search</label>
                  <input type="text" name='search' id='search' />
                </div>
                </h5>
              </div>
              <div className="hori"> <div className="a"></div> <div className="b"></div> <div className="c"></div> <div className="d"></div> <div className="e"></div> </div>
             </Col>
        </Row>
         
        <Transtable
          header={
            {
              item1: 'User',
              item2: 'Transaction ID',
              item3: 'Amount',
              item4: 'DR/CR',
              item5: 'Currency',
              item6: 'Date',
              item7: '',
             }
          }
          array={transdata}
          cols={
            {
              col1: ['', 2],
              col2: [1],
              col3: [1],
              col4: [1],
              col5: [1],
              col6: [1],
              col7: ['',2],
            }
          }
          toShow={
            {
             item1: 'userName', 
             item2: 'userId', 
             item3: 'totalBalance', 
             item4: 'DR', 
             item5: 'currency', 
             item6: 'date', 
             item7: 'Details', 
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
        <TransDetails setDetails={setDetails} info={info && info} />
      }

    </Container>
  )
}

export default Alltrans