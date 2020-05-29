import React, { Component } from 'react';

export default class Simulator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loanAmount: 0,
      interestRate: 0,
      numberOfMonths: 0,

      resultAmount: 0,
      resultMonthly: 0,
      resultInterst: 0
    };
    this.handleChange = this.handleChange.bind(this);
    this.getTotalAmount = this.getTotalAmount.bind(this);
  }

  handleChange = e => {
    const { name, value } = e.target;

    this.setState({
      [name]: value
    });
    console.log(value);
  };

  getTotalAmount = () => {
    this.setState({
      resultAmount:
        parseInt(this.state.loanAmount) +
        (parseInt(this.state.loanAmount) * parseInt(this.state.interestRate)) /
          100
    });
    console.log('heyAmount');
  };

  getMonthlyPayments = () => {
    this.setState({
      resultMonthly:
        parseInt(this.state.resultAmount) / parseInt(this.state.numberOfMonths)
    });
    console.log('heyMonth');
  };

  getTotalInterest = () => {
    this.setState({
      resultInterst:
        parseInt(this.state.loanAmount) *
        (parseInt(this.state.interestRate) / 100)
    });
  };

  getResults = e => {
    e.preventDefault();
    this.getMonthlyPayments();
    this.getTotalAmount();
    this.getTotalInterest();
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
            onClick={this.getResults}
          >
            Calculate
          </button>
        </form>
        <div className='simulator__results'>
          <h3 className='results__title'>Results</h3>
          <p className='results__item'>
            Monthly payments: {this.state.resultMonthly}
          </p>
          <p className='results__item'>
            Total Amount : {this.state.resultAmount}
          </p>
          <p className='results__item'>
            Number of payments : {this.state.numberOfMonths}
          </p>
          <p className='results__item'>
            Total Interest : {this.state.resultInterst}
          </p>
        </div>
      </div>
    );
  }
}
