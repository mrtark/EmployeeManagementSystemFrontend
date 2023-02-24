import React, { Component } from 'react'
import EmployeeService from '../../service/EmployeeService';

export default class EmployeeList extends Component {

  constructor(props) {
    super(props);
    this.state = {
      employeeList: [],
    }
    this.employeeCreate = this.employeeCreate.bind(this);
    this.employeeUpdate = this.employeeUpdate.bind(this);
    this.employeeDetail = this.employeeDetail.bind(this);
    this.employeeDelete = this.employeeDelete.bind(this);
  }

  componentDidMount() {
    EmployeeService.employeeListApi().then(
      (response) => {
        this.setState(
          {
            employeeList: response.data
          }
        )
      }

    )
  }

  employeeCreate() {
    this.props.history.push("/employee-create");
  }

  employeeUpdate(id) {
    this.props.history.push("/employee-create/" + id);
  }

  employeeDetail(id) {
    this.props.history.push(`/employee-detail/${id}`);
  }

  employeeDelete(id) {
    EmployeeService.employeeDeleteApi(id).then(
      toDelete => {
        this.setState({
          employeeList: this.state.employeeList.filter(
            employeeList => employeeList.id != id
          )
        })
      }
    )
  }

  render() {
    return (
      <>
        <section className='mt-3 ms-2'>
          <button type="button" className="btn btn-dark" onClick={this.employeeCreate} >Create</button>
        </section>

        <section className="mt-4 shadow" style={{ "fontFamily": "Fira Code" }}>
          <div className="">
            <div className="">
              <div className="">
                <div className="">
                  <div className="">
                    <div className="card bg-dark">
                      <div className="card-header text-light text-center ">
                        <h4 className='mt-2'>Employee List</h4>
                        <div className="card-body">
                          <div className="table-responsive">
                            <table className="table table-secondary  mb-0 -4">
                              <thead>
                                <tr>
                                  <th scope="col">ID</th>
                                  <th scope="col">DEPARTMENT</th>
                                  <th scope="col">GENDER</th>
                                  <th scope="col">USERNAME</th>
                                  <th scope="col">SURNAME</th>
                                  <th scope="col">EMAİL</th>
                                  <th scope="col">TELEPHONE</th>
                                  <th scope="col">UPDATE</th>
                                  <th scope="col">DETAİL</th>
                                  <th scope="col">DELETE</th>
                                </tr>
                              </thead>
                              <tbody style={{ "height": "60px" }}>
                                {
                                  this.state.employeeList.map((emply) =>
                                    <tr key={emply}>
                                      <td>{emply.id}</td>
                                      <td>{emply.department}</td>
                                      <td>{emply.gender}</td>
                                      <td>{emply.username}</td>
                                      <td>{emply.surname}</td>
                                      <td>{emply.emailAdress}</td>
                                      <td>{emply.telephoneNumber}</td>
                                      <td><i className="fa-solid fa-file-pen cursor fs-4" onClick={() => this.employeeUpdate(emply.id)}></i></td>
                                      <td><i className="fa-solid fa-circle-info cursor fs-4" onClick={() => this.employeeDetail(emply.id)}></i></td>
                                      <td><i className="fa-solid fa-trash cursor fs-4" onClick={() => {
                                        if (window.confirm("Delete employee information?")) {
                                          this.employeeDelete(emply.id)
                                        }
                                      }
                                      }></i></td>
                                    </tr>
                                  )
                                }
                              </tbody>
                            </table>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </>
    )
  }
}
