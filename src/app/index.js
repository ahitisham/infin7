import React from 'react';
import {render} from 'react-dom';
import {BrowserRouter as Router,Route } from'react-router-dom';

//import { EmployeeSearch } from './components/EmployeeSearch';
import { Employees } from './components/Employees';


import { SideMenu } from './components/SideMenu';
import { HeaderLayout } from './components/HeaderLayout';
import { EmployeeSearch } from './components/EmployeeSearch';

import  About  from './components/About';





class App extends React.Component{
		
	render(){

		return(
				  <Router>
         <div>


				  		<HeaderLayout/>

				  		<div className="container-fluid section_area">	
						<div className="row">
							<div className="col-md-3">
							  <SideMenu/>
							</div>
							<div className="col-md-9">
					  		  <Route exact path="/" component={EmployeeSearch}/>
					  		  <Route  path="/employeeSearch" component={EmployeeSearch}/>
          					  <Route path="/employees" component={Employees}/>
          					  <Route path="/about" component={About}/>
							</div>
						</div>
						
						</div>

				  	
				  		
				 </div>
     </Router>
			);
	}
}

render(<App/>, window.document.getElementById("app"));

