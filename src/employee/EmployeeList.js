import React, {useEffect, useContext} from 'react'
import {EmployeeContext} from './EmployeeProvider'
import {LocationContext} from "../location/LocationProvider"
import {Employee} from './Employee'
import './Employee.css'

export const EmployeeList = (props) => {
    const {employees, getEmployees} = useContext(EmployeeContext)
    const {locations, getLocations} = useContext(LocationContext)


    useEffect(() => {
        console.log("EmployeeList: Initial render before data")
        getEmployees()
        .then(getLocations)
    }, [])
    useEffect(() => {
        console.log("EmployeeList: Employee state changed")
        console.log(employees)
    }, [employees])

    return (
        <div className="employees">
            <h1>Employees</h1>
            <button onClick={() => props.history.push("/employees/create")}>
                Add Employee
            </button>
            <article className="employeeList">

                {employees.map(employee => {
                    const locale = locations.find(lo => lo.id === employee.locationId)
                    
                    return <Employee key={employee.id}
                                    employee={employee}
                                    location={locale}/>
                                }) 
                }
            
            </article>
        </div>
    )
}