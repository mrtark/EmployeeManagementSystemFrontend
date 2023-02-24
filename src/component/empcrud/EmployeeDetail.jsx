import React, { Component } from 'react'
import EmployeeService from '../../service/EmployeeService';

export default class EmployeeDetail extends Component {

  constructor(props) {
    super(props);
    this.state = {
      id:this.props.match.params.id,
      employeeDto: {

      }
    }
  }
  componentDidMount() {
    EmployeeService.employeeFindApi(this.state.id).then(
      show => this.setState({
        employeeDto: show.data
      })
    )
  }
  render() {
    return (
      <>
        <div className="card mt-2 w-75 shadow border-primary">
          <div className='card-header text-primary'>Employee ID: {this.state.employeeDto.id}</div>      
            <div className="card-body">
              <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum dolor saepe velit quod ad, unde soluta nihil nulla consequatur nostrum?</p>
            </div>
            <ul className="list-group list-group-flush">
              <li className="list-group-item list-group-item-action">Department: {this.state.employeeDto.department}</li>
              <li className="list-group-item list-group-item-action">Gender: {this.state.employeeDto.gender}</li>
              <li className="list-group-item list-group-item-action">Username: {this.state.employeeDto.username}</li>
              <li className="list-group-item list-group-item-action">Surname: {this.state.employeeDto.surname}</li>
              <li className="list-group-item list-group-item-action">Email: {this.state.employeeDto.emailAdress}</li>
              <li className="list-group-item list-group-item-action">Telephone: {this.state.employeeDto.telephoneNumber}</li>
            </ul>
            <div class="card-footer text-muted text-center">
            Employee Creation Date : {this.state.employeeDto.createdDate}
          </div>
        </div>
      </>
    )
  }
}
