import React from 'react'
import { useState } from 'react';
import { Form } from 'react-bootstrap';
import { svgs } from '../../nav/svgIcons';
import TransNumSelect from './TransNumSelect';
import ReactDatepickers from '../../users/ReactDatepicker';
import './transfilter.scss'

const TransFilter = ({toggle,setToggle}) => {
    let [email, setEmail] = useState(true);
  let [balance, setBalance] = useState(false);
  let [referral, setReferral] = useState(false);
  let [reset, setReset] = useState(false);
  let [filter, setFilter] = useState({
  hasBalance: false,
  emailVerified: true,
  referralJoin: false,
  date: new Date().toDateString(),
  role: 'anyRole',
  status: 'anyStatus'
  });
    
    const currencyOptions = [
  {
    label: 'Any Currency',
    value: "anyCurrency",
    selected: true
  },
  {
    label: "Nigerian Naira",
    value: "naira"
  },
  {
    label: "US Dollar",
    value: "dollar"
  }
];
    const typeOptions = [
  {
    label: 'Any Type',
    value: "anyType",
    selected: true
  },
  {
    label: "Deposit",
    value: "deposit"
  },
  {
    label: "Withdraws",
    value: "withdraws"
  }
];
    const methodOptions = [
  {
    label: 'Any Method',
    value: "anyMethod",
    selected: true
  },
  {
    label: "Deposit/Bank Transfer",
    value: "deposit"
  },
  {
    label: "Card",
    value: "card"
  }
];
  const statusOptions = [
  {
    label: 'Any Status',
    value: "AnyStatus",
    selected: true
  },
  {
    label: "None",
    value: "none"
  },
  {
    label: "Pending",
    value: "pending"
  },
  {
    label: "Confirmed",
    value: "confirmed"
  },
  {
    label: "Failed",
    value: "failed"
  }
];
    
function handleReset(e) {
    e.preventDefault(e);
    setFilter(Object.assign(filter, {
      hasBalance: false,
    emailVerified: true,
    referralJoin: false,
    date: new Date().toDateString(),
    role: 'anyRole',
    status: 'anyStatus'
    }))
    setToggle('flex');
    setReset(true);
    setEmail(true);
    setBalance(false);
    setReferral(false);
    }

      function handleSubmit(e) {
      e.preventDefault(e);
      setToggle('none');
  }
  return (
    <div style={{display: toggle}} className="filter-diag w-50 container-fluid">
            <div className="row">
            <div className="row11 col">
              <h1>Advance Filter</h1>
            </div>
            </div>
            <div className="row">
              <div className='col'>
              <Form className='forms' onSubmit={(e)=> handleSubmit(e)}>

                <div className="tyda">
                  <div className="type">
                  <label htmlFor="role">TYPE</label>
                    <div className="selectRole">
                      <TransNumSelect
                        opt={typeOptions}
                        icon={svgs.normalSelectIcon}
                        state={filter}
                        setState={setFilter}
                        reset={reset}
                        setReset={setReset}
                      />
                  </div>
                  </div>
                  <div className="date">
                  <label htmlFor="date" className='date'>DATE</label>
                    <div className="picker">
                      <ReactDatepickers state={filter} setState={setFilter}
                        reset={reset} setReset={setReset} />

                    </div>
                  </div>
                </div>

                <div className="paystat">
                  <div className="pay">
                  <label htmlFor="role">PAY CURRENCY</label>
                    <div className="selectRole">
                      <TransNumSelect
                        opt={currencyOptions}
                        icon={svgs.normalSelectIcon}
                        state={filter}
                        setState={setFilter}
                        reset={reset}
                        setReset={setReset}
                      />

                    </div>
                  </div>
                  <div className="status">
                  <label htmlFor="status">STATUS</label>
                    <div className="selectRole">
                      <TransNumSelect
                        opt={statusOptions}
                        icon={svgs.normalSelectIcon}
                        state={filter}
                        setState={setFilter}
                        reset={reset}
                        setReset={setReset}
                      />
                    </div>
                  </div>
                </div>

                <div className="met">
                  <div className="empty"></div>
                  <div className="method">
                  <label htmlFor="role">METHOD</label>
                    <div className="selectRole">
                      <TransNumSelect
                        opt={methodOptions}
                        icon={svgs.normalSelectIcon}
                        state={filter}
                        setState={setFilter}
                        reset={reset}
                        setReset={setReset}
                      />

                    </div>
                  </div>
                </div>


                <div className="forms-row4">
                  <div className="row4-boxa">
                     Check Box: To select different filter options via checkbox. 
                      </div>
                  <div className="row4-boxb">
                     Drop down: To select different filter options via dropdown.
                      </div>
                    </div>
                    <div className="btns">
                    <button className='filter'>filter</button>
                    <button className='reset' onClick={(e)=> handleReset(e)} >Reset Filter</button>
                    </div>


                    </Form>
                {/* <Form className='forms' onSubmit={(e)=> handleSubmit(e)}>
                  <div className="forms-row2">
                    
                  <div className="row2-boxb">
                    <label htmlFor="date" className='date'>DATE</label>
                    <div className="picker">
                      <ReactDatepickers state={filter} setState={setFilter}
                        reset={reset} setReset={setReset} />

                    </div>
                    </div>
                </div>
                <div className="forms-row3">
                <div className="row3-boxa">
                    <label htmlFor="role">TYPE</label>
                    <div className="selectRole">
                      <TransNumSelect
                        opt={typeOptions}
                        icon={svgs.normalSelectIcon}
                        state={filter}
                        setState={setFilter}
                        reset={reset}
                        setReset={setReset}
                      />

                    </div>
                  </div>

                  <div className="row3-boxa">
                    <label htmlFor="role">METHOD</label>
                    <div className="selectRole">
                      <TransNumSelect
                        opt={methodOptions}
                        icon={svgs.normalSelectIcon}
                        state={filter}
                        setState={setFilter}
                        reset={reset}
                        setReset={setReset}
                      />

                    </div>
                  </div>
                  <div className="row3-boxa">
                    <label htmlFor="role">PAY CURRENCY</label>
                    <div className="selectRole">
                      <TransNumSelect
                        opt={currencyOptions}
                        icon={svgs.normalSelectIcon}
                        state={filter}
                        setState={setFilter}
                        reset={reset}
                        setReset={setReset}
                      />

                    </div>
                  </div>
                  <div className="row3-boxb">
                    <label htmlFor="status">STATUS</label>
                    <div className="selectRole">
                      <TransNumSelect
                        opt={statusOptions}
                        icon={svgs.normalSelectIcon}
                        state={filter}
                        setState={setFilter}
                        reset={reset}
                        setReset={setReset}
                      />
                    </div>
                  </div>
                </div>
                <div className="forms-row4">
                  <div className="row4-boxa">
                     Check Box: To select different filter options via checkbox. 
                      </div>
                  <div className="row4-boxb">
                     Drop down: To select different filter options via dropdown.
                      </div>
                    </div>
                    <div className="btns">
                    <button className='filter'>filter</button>
                    <button className='reset' onClick={(e)=> handleReset(e)} >Reset Filter</button>
                    </div>
                </Form> */}

              </div>

            </div>
        </div>
  )
}

export default TransFilter