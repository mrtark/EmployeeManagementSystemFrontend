import React, { Component } from 'react'
import EmployeeService from '../../service/EmployeeService';

export default class EmployeeList extends Component {

  constructor(props) {
    super(props);
    this.state = {
      employeeList: [],
    }
  }

  componentDidMount() {
    EmployeeService.employeeListApi().then(
      (response) => {
      this.setState(
        {
          employeeList:response.data
        }
      )
    }

    )
  }

  render() {
    return (
      <>
        EmployeeListPage
      </>
    )
  }
}
