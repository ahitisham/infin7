import React from "react";
import axios from 'axios';
import { Icon, Label, Menu, Table,Button } from 'semantic-ui-react';
import EmployeeDetail from "./EmployeeDetail";


export class Employees extends React.Component{
  constructor(props) {
    super(props);
    this.state = {episodes:[],showViewDetails:false,episode:[],getEpisode:[]};
      
    this.takeAction = this.takeAction.bind(this); 
    this.fetchFromServer=this.fetchFromServer.bind(this);
  };

  takeAction(event,data){
    let empId =data.value;
    console.log("empId  "+empId);
      if (data.action === "view") {
          console.log("hello view");
          axios.get(`http://localhost:1336/search/employee/id/`+empId)
          .then(res => {  
           this.setState({getEpisode:res.data,showViewDetails: true});
           console.log("test:"+res.data);
           })

        }
  }
  //accessing data from database
  fetchFromServer(){
      axios.get(`https://api.github.com/users/ahitisham/repos`)
      .then(res => {  
        this.setState({episodes:res.data});
      })
    }
  
  

  //displaying data form database
  render(){

    if (this.state.showViewDetails) {
        return ( <div>
          <EmployeeDetail detailData={this.state.getEpisode}/></div>  );
    }else {
    return(
      <div>
    <Table celled striped>
    <Table.Header>
      <Table.Row>
        <Table.HeaderCell colSpan='3'><h3 className="panel-title">Get public repository</h3></Table.HeaderCell>
      </Table.Row>
    </Table.Header>

      <Table.Header>
        <Table.Row>
          <Table.HeaderCell>public  Repository</Table.HeaderCell>
         
        </Table.Row>
      </Table.Header>
         
      <Table.Body>
        {this.state.episodes.map(episode =>
          <Table.Row key={episode.id}>
        <Table.Cell>{episode.name}</Table.Cell>
       
          </Table.Row>
          )}  
      </Table.Body>

     
      </Table>
      <p><a className="btn btn-primary btn-lg" href="#" role="button" onClick={this.fetchFromServer} >Get public repository</a></p>
  </div>
    )};
  }
}