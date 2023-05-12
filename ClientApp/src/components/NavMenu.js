import React, { Component } from 'react';
import { Collapse, Navbar, NavbarBrand, NavbarToggler, NavItem, NavLink } from 'reactstrap';
import { Link } from 'react-router-dom';
import './NavMenu.css';

export class NavMenu extends Component {
  static displayName = NavMenu.name;

  constructor (props) {
    super(props);

    this.toggleNavbar = this.toggleNavbar.bind(this);
    this.state = {
      collapsed: true
    };
  }

  toggleNavbar () {
    this.setState({
      collapsed: !this.state.collapsed
    });
  }

  render() {
    return (
      <header>
          <nav class="fixed w-100 bg-gray-900 shadow">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div class="flex justify-between h-16">
                <div class="flex">
                  <a href="#" class="flex-shrink-0 flex items-center">
                    <img class="h-8 w-auto" src="https://tailwindui.com/img/logos/workflow-mark-indigo-500.svg" alt="Workflow"/>
                    </a>
                  <div class="hidden md:ml-6 md:flex md:items-center">
                    <a href="#" class="px-3 py-2 rounded-md text-sm font-medium text-white bg-gray-800 focus:outline-none focus:text-white focus:bg-gray-700">หน้าแรก</a>

                    <a href="#" class="ml-4 px-3 py-2 rounded-md text-sm font-medium text-white bg-gray-800 focus:outline-none focus:text-white focus:bg-gray-700">คุณสมบัติ</a>

                    <a href="#" class="ml-4 px-3 py-2 rounded-md text-sm font-medium text-white bg-gray-800 focus:outline-none focus:text-white focus:bg-gray-700">รายละเอียดการสอบ</a>

                    <a href="#" class="ml-4 px-3 py-2 rounded-md text-sm font-medium text-white bg-gray-800 focus:outline-none focus:text-white focus:bg-gray-700">ตรวจสอบรายชื่อ</a>
                    <a href="#" class="ml-4 px-3 py-2 rounded-md text-sm font-medium text-white bg-gray-800 focus:outline-none focus:text-white focus:bg-gray-700">ติดต่อเรา</a>
                  </div>
                  </div>
                  <div class="flex items-center">
                    <a href="#" class="px-3 py-2 rounded-md text-sm font-medium text-white bg-gray-800 focus:outline-none focus:text-white focus:bg-gray-700">ลงชื่อเข้าใช้งาน</a>
                  </div>
                </div>
              </div>
            </nav>
        </header>
    );
  }

  old_render() {
    return (
          <Navbar className="bg-gray-900 shadow" container light>
            <NavbarBrand tag={Link} to="/">posn</NavbarBrand>
            <NavbarToggler onClick={this.toggleNavbar} className="" />
            <Collapse className="" isOpen={!this.state.collapsed} navbar>
              <ul className="">
                <NavItem>
                  <NavLink tag={Link} className="text-dark" to="/">Home</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink tag={Link} className="text-dark" to="/counter">Counter</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink tag={Link} className="text-dark" to="/fetch-data">Fetch data</NavLink>
                </NavItem>
              </ul>
            </Collapse>
          </Navbar>
    );
  }
}
