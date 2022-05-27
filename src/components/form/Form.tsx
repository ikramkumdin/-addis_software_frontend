import React from 'react'
import { useEffect, useState } from 'react';
import { AiOutlineUnorderedList } from 'react-icons/ai'
import { useSelector, useDispatch } from "react-redux";
import { RootState } from '../../app/store';
import { useHistory, Link } from "react-router-dom";
import { SLinklabel, SLInkContainer, SLinkIcon, Shand, FormWrapper, SForm, SInput, SFieldset, SButton, SError, SLink } from './style'
const Form = () => {
    const dispatch = useDispatch();
    const history = useHistory()
    const { created } = useSelector((state: RootState) => state.employees);
    const [employee, setEmployee] = useState({
        name: '',
        salary: 0,
        date: new Date(),
        gender: 'female'
    })
    const onChange = (e: any) => {
        e.target.name === 'date' ? setEmployee({
            ...employee,
            [e.target.name]: new Date(e.target.value),
        }) :
            setEmployee({
                ...employee,
                [e.target.name]: e.target.value,
            });
    };

    const onSubmit = (e: any) => {
        e.preventDefault()
        employee.salary = Number(employee.salary)
        dispatch({
            type: 'employees/createEmployeeStart',
            payload: employee
        })
        history.push('/list')
    }

    return (
        <>
            <FormWrapper>
                <SLInkContainer>
                    <SLink>
                        <Link to='/list' style={{ textDecoration: 'none', color: 'rgb(45,45,45)' }}>
                            <SLinkIcon><AiOutlineUnorderedList />List</SLinkIcon></Link>
                    </SLink>


                </SLInkContainer>

                <SForm onSubmit={(e) => onSubmit(e)}>
                    <Shand>ADD EMPLOYEE</Shand>
                    <label htmlFor='name'>Name</label>
                    <SInput type="text"
                        name="name"
                        value={employee.name}
                        placeholder="eg.Ekram Kumdin"
                        onChange={(e) => onChange(e)}
                        required
                    />
                    <label htmlFor='date'>Date of Birth</label>
                    <SInput type="date"
                        name="date"
                        onChange={(e) => onChange(e)}
                        required
                    />
                    <SFieldset>
                        <legend>Gender</legend>
                        <label>
                            <input type='radio'
                                value='female' name='gender'
                                checked={employee.gender === 'female'}
                                onChange={(e) => onChange(e)}
                            />
                            Female
                        </label>
                        <label>
                            <input type='radio' value='male'
                                name='gender'
                                checked={employee.gender === 'male'}
                                onChange={(e) => onChange(e)}
                            />
                            Male
                        </label>
                    </SFieldset>
                    <label htmlFor='salary'>Salary</label>
                    <SInput type="text" name="salary"
                        value={employee.salary ? employee.salary : ''}
                        onChange={(e) => onChange(e)}
                    />

                    {/* <SError><p>Error</p></SError> */}

                    <SButton type='submit'>Add</SButton>
                </SForm>
            </FormWrapper>
        </>
    )
}

export default Form