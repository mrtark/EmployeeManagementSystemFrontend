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
    this.onChangeDepartment = this.onChangeDepartment.bind(this);
    this.onChangeGender = this.onChangeGender.bind(this);
    this.onChangeUsername = this.onChangeUsername.bind(this);
    this.onChangeSurname = this.onChangeSurname.bind(this);
    this.onChangeTelephone = this.onChangeTelephone.bind(this);
    this.onChangeEmail = this.onChangeEmail.bind(this);
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

  onChangeDepartment() {

  }
  onChangeGender() {

  }
  onChangeUsername() {

  }
  onChangeSurname() {

  }
  onChangeTelephone() {

  }
  onChangeEmail() {

  }
  createOrUpdate(event) {
    event.preventDefault();

    const eDto = {
      department: this.state.department,
      gender: this.state.gender,
      username: this.state.username,
      surname: this.state.surname,
      telephoneNumber: this.state.telephoneNumber,
      emailAdress: this.state.emailAdress,
    }

    if (this.state.id === "/employee-create") {
      EmployeeService.employeeCreateApi(eDto).then(
        response => {
          if (response.status === 200) {
            this.props.history.push("/employee-list")
          }
        }
      ).catch(error => {
        console.log("Create Eror Note: " + error.response.data)
      }
      )
    } else {
      EmployeeService.employeeUpdateApi(this.state.id, eDto).then(
        response => {
          if (response.status === 200) {
            this.props.history.push("/employee-list")
          }
        }
      ).catch(error => {
        console.log("Update Error Note: " + error.response.data)
      })
    }
  }



  render() {
    return (
      <>
        {this.dynamicHeaderCU()}
        <div className="card w-50 center shadow">
          <div className="card-body">
            <h1 className='text-center fs-4'>Update</h1>
            <div className="row m-2">
              <div className="col">
                <div className="input-group mb-3">
                  <span htmlFor="department" className="input-group-text" id="basic-addon1">Department</span>
                  <input type="text" className="form-control" id="department" name="department"
                    onChange={this.onChangeDepartment} value={this.state.department} />
                </div>
              </div>
            </div>
            <div className="row m-2">
              <div className="col">
                <div className="input-group mb-3">
                  <span htmlFor="gender" className="input-group-text" id="basic-addon1">Gender</span>
                  <input type="text" className="form-control" id="gender" name="gender"
                    onChange={this.onChangeGender} value={this.state.gender} />
                </div>
              </div>
            </div>
            <div className="row m-2">
              <div className="col">
                <div className="input-group mb-3">
                  <span htmlFor="username" className="input-group-text" id="basic-addon1">Username</span>
                  <input type="text" className="form-control" id="username" name="username"
                    onChange={this.onChangeUsername} value={this.state.username} />
                </div>
              </div>
            </div>
            <div className="row m-2">
              <div className="col">
                <div className="input-group mb-3">
                  <span htmlFor="surname" className="input-group-text" id="basic-addon1">Surname</span>
                  <input type="text" className="form-control" id="surname" name="surname"
                    onChange={this.onChangeSurname} value={this.state.surname} />
                </div>
              </div>
            </div>
            <div className="row m-2">
              <div className="col">
                <div className="input-group mb-3">
                  <span htmlFor="telephoneNumber" className="input-group-text" id="basic-addon1">Telephone</span>
                  <input type="text" className="form-control" id="telephoneNumber" name="telephoneNumber"
                    onChange={this.onChangeTelephone} value={this.state.telephoneNumber} />
                </div>
              </div>
            </div>
            <div className="row m-2">
              <div className="col">
                <div className="input-group mb-3">
                  <span htmlFor="emailAdress" className="input-group-text" id="basic-addon1">E-mail</span>
                  <input type="text" className="form-control" id="emailAdress" name="emailAdress"
                    onChange={this.onChangeEmail} value={this.state.emailAdress} />
                </div>
              </div>
            </div>
          </div>
          <div className="card-footer text-center">
            <input type="submit" className="shadow btn btn-outline-success w-25"
              onClick={this.createOrUpdate} value="Kaydet" />
          </div>
        </div>

      </>
    )
  }
}
