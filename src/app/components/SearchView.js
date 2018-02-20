import React from "react";
import { Icon, Label, Menu, Table,Button } from 'semantic-ui-react';


export default class  SearchView  extends React.Component {
    constructor(props) {
    super(props);
    this.state={showViewDetails:false}
            console.log("hello props view");  


  }
EditChange(event){
  this.setState({showViewDetails:true})
}

    render(){ 
    

        return (
            <div className="panel-group ">
            <div className="panel panel-default bt_Bdr_org">
                <div className="panel-heading"><h3 className="panel-title">public {this.props.empId} Repository</h3></div>
              <div className="panel-body">

  




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
        {this.props.detailData.map(episode =>
          <Table.Row key={episode.id}>
        <Table.Cell>{episode.name}</Table.Cell>
       
          </Table.Row>
          )}  
      </Table.Body>

     
      </Table>
      <p><a className="btn btn-primary btn-lg" href="#" role="button" onClick={this.fetchFromServer} >Get public repository</a></p>
  </div>


  </div>
  </div>
  </div>


            );
    };
}
