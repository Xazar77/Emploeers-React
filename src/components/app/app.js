import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployersList from '../employers-list/employers-list';
import EmployersAddForm from '../employers-add-form/employers-add-form';

import './app.css';

function App() {

  const data = [
    { name: 'Andrey P.', salary: 15000, increase: true, id: 1},
    { name: 'John M.', salary: 3000, increase:false, id: 2},
    { name: 'Anna R.', salary: 2700, increase:false, id: 3} 
  ]
  return (
    <div className="app">
        <AppInfo />

        <div className="search-panel">
            <SearchPanel/>
            <AppFilter/>
        </div>
        
        <EmployersList data={data}/>
        <EmployersAddForm/>
    </div>
  );
}

export default App;
