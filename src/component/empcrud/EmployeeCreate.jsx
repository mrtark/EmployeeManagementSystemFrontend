import React, { Component } from 'react'
import EmployeeService from '../../service/EmployeeService';

export default class EmployeeCreate extends Component {

  constructor(props) {
    super(props);
    this.state = {
      id: this.props.match.params.id,
      department: "",
      gender: "",
      username: "",
      surname: "",
      telephoneNumber: "",
      emailAdress: "",
    }
  }

  componentDidMount() {
    if (this.state.id === "/employee-create") {
      return;
    } else {
      EmployeeService.employeeFindApi(this.state.id).then(
        getData => {
          const employeeDto = getData.data;
          console.log("Update detData: " + employeeDto)
          this.setState({
            department: employeeDto.department,
            gender: employeeDto.gender,
            username: employeeDto.username,
            surname: employeeDto.surname,
            telephoneNumber: employeeDto.telephoneNumber,
            emailAdress: employeeDto.emailAdress,
            department: employeeDto
          })
        }
      )
    }
  }

  dynamicHeaderCU() {
    if (this.state.id === "/employee-create") {
      return <h1>Employe Create</h1>
    } else {
      return <h1>Employe Update</h1>
    }
  }

  render() {
    return (
      <>
        {this.dynamicHeaderCU()}
      </>
    )
  }
}
