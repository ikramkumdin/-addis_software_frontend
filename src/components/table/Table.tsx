import React from 'react'
import { TContainer,SFTable, SThead, STheadTR, STH, STBody, STD, STBodyTR, SLink, SLinkIcon,SLinkT, SLinkIconT  } from './style'
import {SLInkContainer} from '../form/style'
import {AiOutlineUserAdd} from 'react-icons/ai'
import { useEffect } from 'react';
import { BsPencilSquare } from 'react-icons/bs'
import { MdDelete } from 'react-icons/md'
import { RiCodeView } from 'react-icons/ri'
import { useSelector, useDispatch } from "react-redux";
import { RootState } from '../../app/store';
import { Link } from 'react-router-dom'

const Table = () => {
 const dispatch = useDispatch();
const { employees, loading, error } = useSelector((state: RootState) => state.employees);
useEffect(() => {
    dispatch({ type: "employees/fetchEmployeeStart" })

}, [])

const deleteEmplyee = (id: string) => {
    if (id === '') return
    dispatch({ type: "employees/deleteEmployeeStart", payload: { id } })
}
    return (
        <>
        <TContainer >
        <SLInkContainer>
                    <SLinkT>
                        <Link to='/create' style={{ textDecoration: 'none', color: 'rgb(45,45,45)' }}>
                            <SLinkIconT><AiOutlineUserAdd />New</SLinkIconT></Link>
                    </SLinkT>
                </SLInkContainer>
            <SFTable>
            <SThead>
                <STheadTR>
                    <STH>ID</STH>
                    <STH>Full Name</STH>
                    <STH>BirthDate</STH>
                    <STH>Gender</STH>
                    <STH>Salary</STH>
                    <STH>Action</STH>
                </STheadTR>
            </SThead>
            {
                employees ? (

                    <STBody>
                        {
                            employees.map((employee) => (
                                <STBodyTR key={employee.id}>
                                    <STD>{employee.id}</STD>
                                    <STD>{employee.name}</STD>
                                    <STD>{employee.date?.toString()}</STD>
                                    <STD>{employee.gender}</STD>
                                    <STD>{employee.salary}</STD>
                                    <STD>
                                        <SLink>
        
                                            <SLinkIcon ><Link to={`update/${employee.id}`}><BsPencilSquare /></Link> </SLinkIcon>
                                        
                                            <SLinkIcon 
                                            onClick={() => {deleteEmplyee(employee.id ? employee.id : '')}}
                                            style={{ color: "red" }}><MdDelete /></SLinkIcon>
                                        </SLink>

                                    </STD>
                                </STBodyTR>
                            ))}
                    </STBody>
                )
                    : 'No DAta'
            }
        </SFTable>
            
        </TContainer>
       
        </>
        
        
    )
}


export default Table