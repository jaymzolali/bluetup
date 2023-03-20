import React from 'react'
import { useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap'
import { svgs } from '../nav/svgIcons';
import { allUsersData } from './allUsersData';
import FilterUsers from './filterUsers/FilterUsers';
import Newtable from './NewTable';
import './newUser.scss';
import ShowingVeri from './ShowingVeri';
import VeriDetails from './VeriDetails/VeriDetails';
const Inactive = () => {
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

  
    function handleSearch(e) {
        if(e.key === 'Enter' || e.target.textContent === 'Search') {
          let inp = e.target.value || e.target.nextElementSibling.value;
          console.log(inp);

        }
  }

  return (
    <Container fluid >
      {
        !details &&
        <div className="newUser">
          <Row>
            <Col className="row1 d-flex align-items-center align-contents-center justify-content-center">
              <h1 className=''>INACTIVE USERS</h1>
            </Col>
          </Row>
          <div className=" parent">
      
            <div className="row">
              <div className="col row2">
                <div className="item1">
                  <span>Filter Users</span> <button onClick={()=> handleShow()}>Date</button>
                </div>
                <div className="item2">
                  <span>Search</span> <input onClick={(e)=> handleSearch(e)} type="text" />
                </div>
                <div className="item3 ">
                  <span>Showing</span> <span > <ShowingVeri opt={numOptions} icon={svgs.dropdown} /> </span> <span>Entries</span>
                </div>

              </div>
              </div>
              <FilterUsers toggle={toggle} setToggle={setToggle} />
            <div className="row">
              <div className="col row3">
                <h1>List of new user</h1>
                <p>List of all new users registrations</p>
              </div>
            </div>
            <Newtable
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
                  col5: ['', 2],
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

export default Inactive