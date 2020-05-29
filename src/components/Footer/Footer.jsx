import React, { Component } from 'react';

export default class Footer extends Component {
  render() {
    return (
      <div className='footer'>
        <p className='footer__text'>@ / 2020.</p>
        <a href='http://maevawolff.com' className='footer__website'>
          maevawolff.com
        </a>
        <p className='footer__mansa'>Mansa.</p>
      </div>
    );
  }
}
