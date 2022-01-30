

import EmployeesListItem from "../employees-list-item/employees-list-item";

import './employees-list.css';

// const EmployersList = ({ data, onDelete, onToggleIncrease, onToggleRise }) => {
const EmployeesList = ({data, onDelete, onToggleProp}) => {

    const elements = data.map(item => {
        const {id, ...itemProps} = item
        return (
            // <EmployeesListItem name={item.name} salary={item.salary} />
            <EmployeesListItem
                key={id}
                {...itemProps}     //Данная запись аналогична записи выше
                onDelete={() => onDelete(id)}
                // onToggleIncrease={() =>  onToggleIncrease(id)}
                // onToggleRise={() => onToggleRise(id)}
                onToggleProp={(e) => onToggleProp(id, e.currentTarget.getAttribute('data-toggle'))}/> 
        )
    })

    return (
        <ul className="app-list list-group">
            {elements}
        </ul>
    )
    
}

export default EmployeesList;