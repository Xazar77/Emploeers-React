import { Component } from 'react';


import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployersList from '../employers-list/employers-list';
import EmployersAddForm from '../employers-add-form/employers-add-form';

import './app.css';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      data: [
        { name: 'Andrey P.', salary: 15000, increase: true, rise: true, id: 1},
        { name: 'John M.', salary: 3000, increase:false, rise: false, id: 2},
        { name: 'Anna R.', salary: 2700, increase:false, rise: false, id: 3} 
      ]
    }
    this.maxId = 4
  }

  deletItem = (id) => {
    this.setState(({ data }) => {
      // const index = data.findIndex(elem => elem.id === id)
      
      // const before = data.slice(0, index)    // 1 способ
      // const after = data.slice(index + 1)

      // const newArr = [...before, ...after]

      return {
        // data: newArr
        data: data.filter(item => item.id !== id)   //2 способ
      }
    })
  }
  addItem = (name, salary) => {
    const newItem = {
      name, 
      salary,
      increase: false,
      rise: false,
      id: this.maxId++
    }
    this.setState(({data}) => {
        const newArr = [...data, newItem];
        return {
            data: newArr
        }
    });
  }

  // onToggleIncrease = (id) => {
    // this.setState(({ data }) => {                 // 1 ВАРИАНТ
    //   const index = data.findIndex(elem => elem.id === id)

    //   const old = data[index]
    //   const newItem = { ...old, increase: !old.increase }
    //   const newArr = [...data.slice(0, index), newItem, ...data.slice(index + 1)]
    //   return {
    //     data: newArr
    //   }
    // })

  //   this.setState(({ data }) => ({                // 2 ВАРИАНТ
  //       data: data.map(item => {
  //            if (item.id === id) {
  //             return {...item, increase: !item.increase}
  //            }
  //         return item
  //       })
  //   }))
  // }
  // onToggleRise = (id) => {
  //   this.setState(({ data }) => ({                // 2 ВАРИАНТ
  //     data: data.map(item => {
  //          if (item.id === id) {
  //           return {...item, rise: !item.rise}
  //          }
  //       return item
  //     })
  //   }))
  // }

  // Поскольку оба метода одинаковы (выполняют одинаковый функционал) проведем оптимизацию
   
  onToggleProp = (id, prop) => {
        this.setState(({ data }) => ({               
      data: data.map(item => {
           if (item.id === id) {
            return {...item, [prop]: !item[prop]}
           }
        return item
      })
    }))
  }

  

   
  render() {
    const employees = this.state.data.length
    const increased = this.state.data.filter(item => item.increase).length
    return (
      <div className="app">
        <AppInfo
          employees={employees}
          increased={increased}/>
  
          <div className="search-panel">
              <SearchPanel/>
              <AppFilter/>
          </div>
          
        <EmployersList
          data={this.state.data}
          onDelete={this.deletItem}
          // onToggleIncrease={this.onToggleIncrease}
          // onToggleRise={this.onToggleRise}
          onToggleProp={this.onToggleProp}/>
        <EmployersAddForm
          onAdd={this.addItem}/>
      </div>
    );
  }
}

export default App;
