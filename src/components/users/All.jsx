import { set } from 'date-fns';
import React, { useRef, useState } from 'react'
import { useEffect } from 'react';
import { Col, Container, Form, Row } from 'react-bootstrap'
import { svgs } from '../nav/svgIcons';
import './allusers.scss';
import { allUsersData } from './allUsersData';
import Datepicker from './Datepicker';
import FilterDiag from './FilterDiag';
import FilterUsers from './filterUsers/FilterUsers';
import NumberSelectIcon from './NumberSelectIcon';
import ReactDatepickers from './ReactDatepicker';
import Userdetails from './userdetails/Userdetails';
const All = () => {
  let [showing, setShowing] = useState({ val: 10 });
  let [showDetails, setShowdetails] = useState(false);
  let [toggle, setToggle] = useState('none');
  let [show, setShow] = useState({
    start: 0,
    end: 10,
  })
  let [users, setUsers] = useState(allUsersData);
  
  let [more, setMore] = useState([
    { text: 1, style: { backgroundColor: '#172774', color: '#FFFFFF' }, id: 1 },
    { text: 2, style: { backgroundColor: '#FFFFFF', color: '#172774' }, id: 2 },
    { text: 3, style: { backgroundColor: '#FFFFFF', color: '#172774' }, id: 3 },
    
  ])
  const interviewDateRef = useRef();
  const handleInterviewDateClick = () => {
    interviewDateRef.current.focus();
    console.log('first');
  };

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

  function handleNext(prop) {
    console.log('text = ' + prop.text);
    console.log('id = ' + prop.id);
    let upd = more.map((each, i) => {
      if (prop.id === i + 1) {
        each.style = { backgroundColor: '#172774', color: '#FFFFFF' };
      } else {
        each.style = { backgroundColor: '#FFFFFF', color: '#172774' };
      }
      return each;
    });
    // console.log(upd);
    setMore(upd);
  }

  function handleShowdetails(each) {
    console.log(each);
    setShowdetails(true);
    }

  return (
          <div>
            {
              !showDetails && 
    <Container fluid className='all-users'>
    <Row className='row1 justify-content-center'>
        <Col>
        <h1>Users</h1>
        </Col>
            </Row>
            <div className="parent">

      <Row className='row2'>
        <Col>
        <h2>All Users</h2>
        </Col>
      </Row>
      <Row className='row3'>
        <Col>
        <div className="numbers">
          <span>Showing</span>
            <NumberSelectIcon opt={numOptions} icon={svgs.dropdownDyn}
              setShowing={setShowing}
              showing={showing}
            />
          <span>Entries</span>

        </div>
        </Col>
        <Col>
          <div className="search-box">
          <label onClick={(e)=> handleSearch(e)} htmlFor="search">Search</label>
          <input type="text" name="search" id="search" onKeyUp={(e)=> handleSearch(e)} />

          </div>
        </Col>
        <Col>
          <div className="filter-users">
              <label htmlFor="filter">Filter Users</label>
                <div className="icon"></div>
              <input onClick={()=> handleShow()} type="text" name="filter" id="filter" placeholder='            Date' readOnly />
          </div>

        </Col>
          {/* <FilterDiag toggle={toggle} setToggle={setToggle} Submit={Submit()} /> */}
          <FilterUsers toggle={toggle} setToggle={setToggle} />
      </Row>
      <Row className='row4'>
        <Col>
          <div className="userHead">
            <div>User</div>
            <div>User ID</div>
            <div>Total Balance</div>
            <div>Currency</div>
            <div>Phone Number</div>
            <div>&nbsp;</div>
          </div>
        </Col>
      </Row>
      <Row className="row5">
        <Col>
          <div className="userList">
            {
              users.filter((user,i)=> i>=show.start && i < showing.val).map((user, i) => {
                
                return (
                  <div className="aUser" key={user.id}>
                    <div> {user.userName + user.id} </div>
                    <div> {user.userId} </div>
                    <div> {user.totalBalance + user.id} </div>
                    <div> {user.currency} </div>
                    <div> {user.phoneNumber} </div>
                    <div onClick={(e)=> {handleShowdetails(user)}} className='details'>
                      <span> {svgs.eye} </span>
                      <span>Details</span>
                    </div>
                  </div>
                )
              })
            }
          </div>
        </Col>
      </Row>
      <Row className="row6">
        <Col className='next'>
          <div className="showing"> Showing <span className='bolder'> {`1-10`} </span> of <span className='bolder'> {`100`} </span> data </div>
          <div className="circles">
            <div className="icon1"> {svgs.dropdown} </div>
            {
              more.map((each, i) => {
                return (
                    <div key={each.id} style={each.style} className="circle" onClick={(e) => { handleNext({text: e.target.textContent, id: each.id}) }}> {each.text} </div>
                   
                )
              })
            }
            <div className="icon2"> {svgs.dropdown} </div>
          </div>
        </Col>
      </Row>
            </div>
    </Container> 
              
      }

      {
        showDetails &&
        <Userdetails setShowdetails={setShowdetails} />
      }
      
          </div>
  )
}

export default All