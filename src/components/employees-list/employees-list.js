

import EmployeesListItem from "../employees-list-item/employees-list-item";

import './employees-list.css';

const EmployeesList = () => {
    return (
        <ul className="app-list list-group">
            <EmployeesListItem name="Andrey P." salary={5000}/>
            <EmployeesListItem name="John M." salary={2000}/>
            <EmployeesListItem name="Anna R." salary={2700}/>
        </ul>
    )
    
}

export default EmployeesList;