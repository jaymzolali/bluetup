import React from 'react'
import './walletoverview.scss';

const WalletOverview = () => {
  return (
      <div className="container-fluid walletoverview">
          <div className="row">
              <div className="col row1">
                  <h1>WALLETS</h1>
              </div>
          </div>
          <div className="row">
              <div className="col row2">
                  <div className="box one">
                      <div className="line1">
                          <span>General Wallet</span>
                          <span className='hori'> <span className='icon'></span> <span>View</span> </span>
                      </div>
                      <div className="line2">
                          <div className="price">3,200,000.00 <span>NGN</span> </div>
                          <div className="percent">
                              <span className="per">+45% </span>
                              <span className="last">than last week</span>
                          </div>
                      </div>
                  </div>
                  <div className="box two">
                      <div className="line1">
                          <span>Blue Vault</span>
                          <span className='hori'> <span className='icon'></span> <span>View</span> </span>
                      </div>
                      <div className="line2">
                          <div className="price">3,200,000.00 <span>NGN</span> </div>
                          <div className="percent">
                              <span className="per">+45% </span>
                              <span className="last">than last week</span>
                          </div>
                      </div>
                  </div>
                  <div className="box three">
                      <div className="line1">
                          <span>Flexy Naira</span>
                          <span className='hori'> <span className='icon'></span> <span>View</span> </span>
                      </div>
                      <div className="line2">
                          <div className="price">3,200,000.00 <span>NGN</span> </div>
                          <div className="percent">
                              <span className="per">+45% </span>
                              <span className="last">than last week</span>
                          </div>
                      </div>
                  </div>
                  <div className="box four">
                      <div className="line1">
                          <span>Tup Dollar</span>
                          <span className='hori'> <span className='icon'></span> <span>View</span> </span>
                      </div>
                      <div className="line2">
                          <div className="price">3,200,000.00 <span>NGN</span> </div>
                          <div className="percent">
                              <span className="per">+45% </span>
                              <span className="last">than last week</span>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
          <div className="row">
              <div className="col row3">
                  <div className="box one"></div>
                  <div className="box two"></div>
              </div>
          </div>
   </div>
  )
}

export default WalletOverview