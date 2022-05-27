import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { act } from 'react-dom/test-utils'
import { Employee } from './api'

export const employeesSlice = createSlice({
    name: 'employees',
    initialState: {
        employees: [] as Employee[],
        loading: false,
        error: null as string | null,
        created: false,
        employee:null as Employee | null
        
    },
    reducers: {
        fetchEmployeeStart: (state)=>{
            state.loading = true
            state.error = null            
        },
        fetchEmployeeSuccess: (state, action:PayloadAction<any>) => {
            state.loading = false
            state.error = null
            state.employees = action.payload
        },
        fetchEmployeeFailed: (state, action:PayloadAction<string>) =>{
            state.loading = false
            state.error = action.payload
        },
        deleteEmployeeSuccess: (state, action:PayloadAction<string>) => {
            state.employees = state.employees.filter(employee => employee.id !== action.payload)
        },
        deleteEmployeeStart: (state)=>{
            
            state.loading = true
            state.error = null            
        },
        createEmployeeSucess: (state, action:PayloadAction<Employee>) => {
            state.created = true
            state.employees.push(action.payload)
        },
        createEmployeeStart: (state)=>{
            state.loading = true
            state.error = null  
            state.created = false          
        },
        fecthEmployeeStart: (state)=>{
            state.loading = true
            state.error = null  
            state.employee=null         
        },
        fecthOneEmployeeSuccess:(state,action:PayloadAction<any>) => {
            state.loading = false
            state.error = null
            state.employee = action.payload
        },
        updateEmployeeSuccess: (state, action:PayloadAction<Employee>) => {
            const updatedEmployee = action.payload
            state.employees.map(employee => {
                if(employee.id === updatedEmployee.id){
                    employee = updatedEmployee
                }
            })
        },
        updateEmployeeStart: (state)=>{
            state.loading = true
            state.error = null           
        },

      
    },
  })
  
  export const { fetchEmployeeSuccess, fetchEmployeeFailed, deleteEmployeeSuccess, createEmployeeSucess ,fecthOneEmployeeSuccess,updateEmployeeSuccess} = employeesSlice.actions

  export default employeesSlice.reducer