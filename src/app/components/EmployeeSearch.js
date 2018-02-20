import React from "react";
import { Button, Checkbox, Form, Input, Radio, Select, TextArea, Segment, Dropdown,Icon } from 'semantic-ui-react';

import DatePicker from 'react-datepicker';
import moment from 'moment';
import axios from 'axios';
import SearchView from "./SearchView";





const empType = [
  { key: 'm', text: 'Full-time', value: 'Full-time' },
  { key: 'f', text: 'Part-time', value: 'Part-time' },
]

export class EmployeeSearch extends React.Component{
	constructor(){
		super();
		//define state
		this.state={empCode:'',empName:'',empType:'',customer:[],showViewDetails:false}

			//binding 'this' to access this state
			 this.takeAction = this.takeAction.bind(this);

	  		this.empCodeHandleChange=this.empCodeHandleChange.bind(this);
	  		this.empNameHandleChange=this.empNameHandleChange.bind(this);
	  		this.empTypeHandleChange=this.empTypeHandleChange.bind(this);
	  		
	}
	//handle all event and set state


	empTypeHandleChange(event,data){
		this.setState({empType:data.value})
	}
	empNameHandleChange(event){
		this.setState({empName:event.target.value});
	}
	empCodeHandleChange(event){
		this.setState({empCode:event.target.value});
	}

	takeAction(event,data){
    let empId =data.value;
    console.log("name  "+empId);
      
          console.log("hello view");

          axios.get(`https://api.github.com/users/`+empId+'/repos')
          .then(res => {  
        	this.setState({customer:res.data,showViewDetails: true});
           	console.log("test:"+res.data.empName+"   "+res.data.empType);
           })

       	
  }
  //accessing data from database
  /*fetchFromServer(){
      axios.get(`http://localhost:1336/search/employee`)
      .then(res => {  
        this.setState({episodes:res.data});

      })

    }*/


	
	//rendring the EmployeeSnap page to bundle.js using webpack
	render(){
		const { value } = this.state
		if (this.state.showViewDetails) {
        return ( <div>
         <SearchView detailData={this.state.customer} empId={this.state.empCode}/></div>  );
    	}else {
		return(

			<div className="panel-group ">
			    <div className="panel panel-default bt_Bdr_org">
			      	<div className="panel-heading"><h3 className="panel-title">SearchPublicRepository      {this.state.empCode}</h3></div>
			      <div className="panel-body">
			      	 <Segment>
					   <Form >
						<Form.Group widths='equal'>
						<Form.Field control={Input} label='Enter the github name' placeholder='Enter the github name' value={this.state.empCode} onChange={this.empCodeHandleChange}/>
						</Form.Group>

						<Form.Group widths='equal'>
						<Form.Field control={Button} onClick={this.takeAction}  value={ this.state.empCode} >Search</Form.Field>
						</Form.Group>
					  </Form>
					</Segment>
				  </div>
				</div>
				<hr/>

				
			</div>
			);}
	}
} 	

