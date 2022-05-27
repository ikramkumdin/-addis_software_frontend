import { put, takeEvery } from 'redux-saga/effects'
import { fetchEmployees, deleteEmployee, createEmployee, Employee, fetchEmployeeById, updateEmployeeById } from './api'
import { fetchEmployeeSuccess, fetchEmployeeFailed, deleteEmployeeSuccess, createEmployeeSucess,fecthOneEmployeeSuccess,updateEmployeeSuccess } from './employeeState'

export function* fetchEmployeesAction() {
    try {
        const response: Response = yield fetchEmployees()
        yield put(fetchEmployeeSuccess(response))
    } catch (error: any) {
        yield put(fetchEmployeeFailed(error.message))
    }
}

export function* deleteEmployeeAction(action: any) {
    try {
        yield deleteEmployee(action.payload.id)
        yield put(deleteEmployeeSuccess(action.payload.id))

    } catch (error: any) {
        yield put(fetchEmployeeFailed(error.message))
    }
}

export function* createEmployeeAction(action: any) {
    try {
        const response: Employee = yield createEmployee(action.payload)
        yield put(createEmployeeSucess(response))
    } catch (error: any) {
        yield put(fetchEmployeeFailed(error.message))
    }
}

export function* fetchEmployeeDetailsAction(action: any) {
    try {
        const response: Response = yield fetchEmployeeById(action.payload.id)
        yield put(fecthOneEmployeeSuccess(response))
    } catch (error: any) {
        yield put(fetchEmployeeFailed(error.message))
    }
}
export function* updateEmployeeAction(action: any) {
    try {
        const response: Employee = yield updateEmployeeById(action.payload.id, action.payload.employee)
        yield put(updateEmployeeSuccess(response))
    } catch (error: any) {
        yield put(fetchEmployeeFailed(error.message))
    }
}

export function* rootSaga() {
    yield takeEvery("employees/fetchEmployeeStart", fetchEmployeesAction)
    yield takeEvery("employees/deleteEmployeeStart", deleteEmployeeAction)
    yield takeEvery("employees/createEmployeeStart", createEmployeeAction)
    yield takeEvery("employees/fecthOneEmployeeStart",fetchEmployeeDetailsAction)
    yield takeEvery("employees/updateEmployeeStart",updateEmployeeAction)
}