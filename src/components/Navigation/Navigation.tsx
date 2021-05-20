import React from 'react';
import './Navigation.css';

type CounterProps = {
  handleSwitchDisplay: (value: string) => void;
};

export default class Navigation extends React.Component<CounterProps> {
  handleMenuActive = (link: any) => {
    const menuNav = document.querySelectorAll('.navigation .btn-menu');
    menuNav.forEach((menu, index) => {
      menu.classList.remove('active');
    });
    link.currentTarget.classList.add('active');
  };

  handleChange = (event: any) => {
    const target = event.currentTarget;
    const name: string = target.name;

    this.handleMenuActive(event);
    this.props.handleSwitchDisplay(name);
  };

  render() {
    return (
      <div className="navigation">
        <button name="Dashboard" className="btn-menu active" onClick={(e) => this.handleChange(e)}>
          <i className="fas fa-th-large"></i>
          <span>Dashboard</span>
        </button>
        <button name="Post" className="btn-menu" onClick={(e) => this.handleChange(e)}>
          <i className="fal fa-newspaper"></i>
          <span>Post</span>
        </button>
        <button name="Account" className="btn-menu" onClick={(e) => this.handleChange(e)}>
          <i className="far fa-user-circle"></i>
          <span>Account</span>
        </button>
      </div>
    );
  }
}
