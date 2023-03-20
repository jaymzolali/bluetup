import React from 'react'
import './transdetails.scss'
import { Col, Container, Row } from 'react-bootstrap'



const TransDetails = ({setDetails}) => {
  return (
    <Container fluid className='veriDetails'>
      <Row>
        <Col className="row">
          <form>
          <div className="box">
            <div className="line1">
                <div className="transhead">
                    <div className="transhead1">
                        <div className="transtnx">Transaction <span>#TNX47131263</span></div>
                        <div className="transclose"><button onClick={(e)=> setDetails(false) } ><div className="svgg"></div></button></div>
                    </div>
                    <div className="transhead2">
                    <div className="receive">
                    <div className="icon"></div>
                    <div className="amount">
                        <h4>20,000.00 NGN</h4>
                        <small>24 oct, 2022 06:07PM</small>
                    </div>
                    </div>
                        <div className="btn"><button>COMPLETED</button></div>
                    </div>
                </div>
        </div>
        <hr />
        <div className="transaccount">
            <div className="account">
                <h5>IN ACCOUNT</h5>
                <div>
                    <h6>Amount</h6>
                    <p>20,000.00 NGN</p>
                </div>
                <div>
                    <h6>Fees</h6>
                    <p>0.00 NGN</p>
                </div>
                <div>
                    <h6>Total Deposit</h6>
                    <p>20,000.00 NGN</p>
                </div>
                <div>
                    <h6>User Account/ID</h6>
                    <p>UIDD0193</p>
                </div>
            </div>
            <div className="transactionin">
                <h5>IN TRANSACTION</h5>
            <div>
                    <h6>Amount</h6>
                    <p>20,000.00 NGN</p>
                </div>
                <div>
                    <h6>Fees</h6>
                    <p>0.00 NGN</p>
                </div>
                <div>
                    <h6>Total Payment</h6>
                    <p>20,000.00 NGN</p>
                </div>
                <div>
                    <h6>User Email</h6>
                    <p>Godwin.ojeiwa@gmail.com</p>
                </div>
            </div>
        </div>
        <hr />
            <h3>Order Details</h3>
        <div className="transorder">
            <div className="orderdate">
                <div>
                    <h6>Order Date</h6>
                    <p>24 Oct, 2022</p>
                </div>
                <div>
                    <h6>Completed At</h6>
                    <p>24 Oct, 2022 06:07PM</p>
                </div>
            </div>
            <div className="placed">
                <div>
                    <h6>Placed By</h6>
                    <p>Admin</p>
                </div>
                <div>
                    <h6>Completed By</h6>
                    <p>Super Admin</p>
                </div>
            </div>
        </div>
        <hr />
        <h3>Additional Details</h3>
        <div className="transaddi">
            <div className="transtype">
                <div>
                    <h6>Transation Type</h6>
                    <p>Deposit</p>
                </div>
                <div>
                    <h6>Transation Details</h6>
                    <p>Credited Balance</p>
                </div>
                <div>
                    <h6>Updated Balance</h6>
                    <p>20,000.00 NGN</p>
                </div>
            </div>
            <div className="gateway">
                <div>
                    <h6>Payment Gateway</h6>
                    <p>Unknown</p>
                </div>
                <div>
                    <h6>Payment Method</h6>
                    <p>Unknown</p>
                </div>
            </div>
        </div>
          </div>
            {/*
              <div className="btns">
                <button className='accept'>Accept</button>
                <button className='reject'>Reject</button>
              </div>
          </di
          </div> */}
          </form>
        </Col>
      </Row>
      
      </Container>
 
  )
}

export default TransDetails