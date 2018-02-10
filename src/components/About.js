import React, { Component } from 'react';
import Icon from 'react-icons-kit';
import { ic_add_a_photo } from 'react-icons-kit/md/ic_add_a_photo';
import { lock } from 'react-icons-kit/fa/lock';

class About extends Component {
  render() {
    return (
      <div>
          <div><Icon icon={ic_add_a_photo}/></div>
          <div><Icon icon={lock}/></div>
      </div>
    )
  }
}

export default About;
