// @Override
// @DeleteMapping({"", "/{id}"})
// public ResponseEntity<Map<String, Boolean>> apiEmployeeDelete(@PathVariable Long id) {
//     if (id == null) {
//         log.error("404 Not Found!");
//         return ResponseEntity.notFound().build();
//     } else if (id == 0) {
//         log.error("400 Bad Request!");
//         return ResponseEntity.badRequest().build();
//     }
//     log.info("Deleted Found Data: " + iEmployeeService.employeeFind(id));
//     iEmployeeService.employeeDelete(id);
//     Map<String, Boolean> response = new LinkedHashMap<>();
//     response.put("Deleted", Boolean.TRUE);
//     return ResponseEntity.ok(response);
// }
// http://localhost:5555/employee/apiEmployeeCreate
// http://localhost:5555/employee/apiEmployeeList
import axios from "axios";

const employeeUrl = "/employee";

class EmployeeService {

    employeeCreateApi(employeeDto) {
        return axios.post(employeeUrl + "/apiEmployeeCreate", employeeDto);
    }

    employeeListApi() {
        return axios.get(employeeUrl + "/apiEmployeeList");
    }

    employeeFindApi(id) {
        return axios.get(employeeUrl + "/" + id)
    }

    employeeUpdateApi(id, employeeDto) {
        return axios.put(employeeUrl + "/" + id, employeeDto)
    }

    employeeDeleteApi(id) {
        return axios.delete(employeeUrl + "/" + id)
    }
}

export default new EmployeeService();