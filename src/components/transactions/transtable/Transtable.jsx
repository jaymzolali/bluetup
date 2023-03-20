import React from 'react'
import './transtable.scss';
import { Col, Container, Row } from 'react-bootstrap';


const Transtable = ({ header, array, cols, toShow, showing, setDetails, setInfo }) => {
  function handleInfo(each) {
    setDetails(true);
    setInfo(each);
  }
  return (
    <Container fluid className='userTable'>
           <Row>
          <Col className="row-header">
            <div className="header">
            <span className="one"> {header.item1} </span>
            <span className="two">{header.item2} </span>
            <span className="three">{header.item3} </span>
            <span className="four">{header.item4} </span>
            <span className="five">{header.item5} </span>
            <span className="six">{header.item6} </span>
            <span className="hidden">&nbsp;</span>

            </div>
           </Col>
          </Row>
          <Row>
<Col className="row-list">
{
    array.filter((max,i)=> i>= 0 && i< showing.val).map(user => {
        return (
            <div key={user.id} className='list' >
                  {cols.col1.length == 2 ?
              <div className='item1'>
                <span className='icon1'> {cols.col1[0]} </span>
                      <span className='text1'> {user[toShow.item1]} </span> </div> :
                    <span className='text1'> {user[toShow.item1]} </span>
                  }
                  {cols.col2.length == 2 ?
              <div className='item2'>
                <span className='icon2'> {cols.col2[0]} </span>
                      <span className='text2'> {user[toShow.item2]} </span> </div> :
                      <span className='text2'> {user[toShow.item2]} </span>
                  }
                  {cols.col3.length == 2 ?
              <div className='item3'>
                <span className='icon3'> {cols.col3[0]} </span>
                      <span className='text3'> {user[toShow.item3]} </span> </div> :
                      <span className='text3'> {user[toShow.item3]} </span>
                  }
                  {cols.col4.length == 2 ?
              <div className='item4'>
                <span className='icon4'> {cols.col4[0]} </span>
                      <span className='text4'> {user[toShow.item4]} </span> </div> :
                      <span className='text4'> {user[toShow.item4]} </span>
                  }
                  {cols.col5.length == 2 ?
              <div className='item5'>
                <span className='icon5'> {cols.col5[0]} </span>
                      <span className='text5'> {user[toShow.item5]} </span> </div> :
                      <span className='text5'> {user[toShow.item5]} </span>
                  }
                  {cols.col6.length == 2 ?
              <div className='item6'>
                <span className='icon6'> {cols.col6[0]} </span>
                      <span className='text6'> {user[toShow.item6]} </span> </div> :
                      <span className='text6'> {user[toShow.item6]} </span>
                  }
                  {cols.col7.length == 2 ?
              <div className='item7'  onClick={(e)=> handleInfo(user)}>
                <span className='icon7' > {cols.col7[0]} </span>
                      <span className='text7'> {toShow.item7} </span> </div> :
                      <span className='text7'>  {toShow.item7} </span>  
                  }
                
            </div>
        )
    })
}
</Col>
          </Row>
      </Container>
  )
}

export default Transtable