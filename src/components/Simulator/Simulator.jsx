import React, { Component } from 'react';

export default class Simulator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loanAmount: 0,
      interestRate: 0,
      numberOfMonths: 0,

      resultMonthly: 0,
      resultAmount: 0,
      resultInterst: 0
    };
    this.handleChange = this.handleChange.bind(this);
    this.addResult = this.addResult.bind(this);
  }

  handleChange = e => {
    const { name, value } = e.target;

    this.setState({
      [name]: value
    });
    console.log(value);
  };

  addResult = e => {
    e.preventDefault();
    this.setState({
      resultAmount:
        parseInt(this.state.loanAmount) +
        parseInt(this.state.interestRate) +
        parseInt(this.state.numberOfMonths)
    });
  };

  render() {
    return (
      <div className='simulator'>
        <form action='#' className='simulator__form'>
          <div className='simulator__item'>
            <label className='simulator__label'>Loan amount</label>
            <input
              type='number'
              name='loanAmount'
              className='simulator__input'
              placeholder='3000'
              onChange={this.handleChange}
            />
          </div>
          <div className='simulator__item'>
            <label className='simulator__label'>Interst rate</label>
            <input
              type='number'
              name='interestRate'
              className='simulator__input'
              placeholder='8'
              onChange={this.handleChange}
            />
          </div>
          <div className='simulator__item'>
            <label className='simulator__label'>Number of months</label>
            <input
              type='number'
              name='numberOfMonths'
              className='simulator__input'
              placeholder='6'
              onChange={this.handleChange}
            />
          </div>
          <button
            className='simulator__submit'
            value='Calculate'
            onClick={this.addResult}
          >
            Calculate
          </button>
        </form>
        <div className='simulator__results'>
          <p> Total Amount : {this.state.resultAmount}</p>
        </div>
      </div>
    );
  }
}
