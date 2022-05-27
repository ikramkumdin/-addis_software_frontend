const BASE_URL = "http://localhost:4000/employee"

export interface Employee {
    id: string | null,
    name: string | null,
    salary: number | null,
    date: Date | null,
    gender: string | null,
}

export const fetchEmployees = async (): Promise<Employee[]> => {
    const response = await fetch(BASE_URL)
    const data = await response.json()
    const employees = data.data
    employees.map((employee: any) => {
        employee.id = employee._id
        employee.date = new Date(employee.date)
        delete employee._id
        delete employee.__v
    })
    return employees
}

export const deleteEmployee = async (id: string) => {
    const respnse = await fetch(`${BASE_URL}/${id}`, { method: 'DELETE' })
    await respnse.json()
    console.log('Deleted', id);

}

export const createEmployee = async (employee: Employee) => {
    const response = await fetch(BASE_URL, {
        method: 'POST',
        body: JSON.stringify(employee), 
        headers: {
            "Content-Type": "application/json"
        },
    })
    const newEmployee = await response.json()
    newEmployee.data.id = newEmployee.data._id
    delete newEmployee.data._id
    delete newEmployee.data.__v
    console.log('Succesfully Created', newEmployee);

    return newEmployee.data
}


export const fetchEmployeeById = async (id: string) => {
    const response = await fetch(`${BASE_URL}/${id}`)
    const employee = await response.json()
    employee.data.id = employee.data._id
    delete employee.data._id
    delete employee.data.__v
    return employee.data
}

export const updateEmployeeById = async (id: string, employee: Employee) => {

    const response = await fetch(`${BASE_URL}/${id}`, {
        method: 'PUT',
        body: JSON.stringify(employee),
        headers: {
            "Content-Type": "application/json"
        },
    })
    const employeeUp = await response.json()
    employeeUp.data.id = employeeUp.data._id
    delete employeeUp.data._id
    delete employeeUp.data.__v
    return employeeUp.data
}