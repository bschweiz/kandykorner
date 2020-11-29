import React, {useEffect, useContext} from 'react'
import {EmployeeContext} from './EmployeeProvider'
import {Employee} from './Employee'
import './Employee.css'

export const EmployeeList = (props) => {
    const {employees, getEmployees} = useContext(EmployeeContext)

    
}