import React from 'react'
import { Shand,FormWrapper,SForm,SInput,SFieldset,SButton,SError} from '../components/form/style'
import { useSelector, useDispatch } from "react-redux";
import {SLInkContainer,SLink,SLinkIcon} from '../components/form/style'
import { useEffect, useState } from 'react';
import {AiFillBackward} from 'react-icons/ai'
import { useHistory ,useParams,Link} from "react-router-dom";
import { RootState } from '../app/store';
const Update = () => {
    const dispatch = useDispatch();
    const history = useHistory()
    const { id } = useParams<any>();
    const { employee } = useSelector((state: RootState) => state.employees);
    const [employeedetial, setEmployeedetail] = useState({
        id: null,
        name: '' as string | null,
        salary: 0,
        date: new Date(),
        gender: 'female'
    })
   useEffect(()=>{
       dispatch({
           type:'employees/fecthOneEmployeeStart',
           payload:{ id }
       })
   },[])

   useEffect(()=>{
    setEmployeedetail({
        name: `${employee?.name}`,
        salary: Number(employee?.salary),
        id: null,
        gender:`${employee?.gender}` ,
        date: new Date(employee?.date ? employee?.date: '' )

    })
    
},[employee])

   const onChange = (e: any) => {
    e.target.name === 'date' ? setEmployeedetail({
        ...employeedetial,
        [e.target.name]: new Date(e.target.value),
    }):
    setEmployeedetail({
        ...employeedetial,
        [e.target.name]: e.target.value,
    });        
};

const onSubmit = (e: any)=>{
    e.preventDefault()
    employeedetial.salary = Number(employeedetial.salary)
    dispatch({
        type: 'employees/updateEmployeeStart',
        payload: { employee: employeedetial, id}
    })
    history.push('/list')
}

  return (
    <>
    <FormWrapper>
    <SLInkContainer style={{marginTop:'-100px'}}>
                    <SLink>
                        <Link to='/list' style={{ textDecoration: 'none', color: 'rgb(45,45,45)' }}>
                            <SLinkIcon><AiFillBackward/>List</SLinkIcon></Link>
                    </SLink>


                </SLInkContainer>

        <SForm onSubmit={(e)=>onSubmit(e)}>
            <Shand>UPDATE EMPLOYEE</Shand>
            <label htmlFor='name'>Name</label>
            <SInput type="text" 
            name="name" 
            value={ employeedetial ? `${employeedetial.name}` :""}
            placeholder="eg.Ekram Kumdin"
            onChange={(e)=>onChange(e)}
            required 
            />
            <label htmlFor='date'>Date of Birth</label>
            <SInput type="date" 
            name="date" 
            onChange={(e)=>onChange(e)}
            required
            />
            <SFieldset>
                <legend>Gender</legend>
                <label>
                    <input type='radio'
                     value='female' name='gender' 
                     checked={employeedetial.gender === 'female'}
                     onChange={(e)=>onChange(e)}
                     />
                    Female
                </label>
                <label>
                    <input type='radio' value='male' 
                    name='gender'
                    checked={employeedetial.gender === 'male'}
                    onChange={(e)=>onChange(e)}
                    />
                    Male
                </label>
            </SFieldset>
            <label htmlFor='salary'>Salary</label>
            <SInput type="text" name="salary"
            value={employeedetial ?`${employeedetial.salary}`:''}
            onChange={(e)=>onChange(e)}
            />
             
                 {/* <SError><p>Error</p></SError> */}
            
            <SButton type='submit'>Update</SButton>
        </SForm>
    </FormWrapper>
    </>
  )
}

export default Update