import React from "react";
import { Container,Segment } from 'semantic-ui-react';


export default class  EmployeeDetail  extends React.Component {
    constructor(props) {
    super(props);
            console.log("hello props view");  


  }
    render(){ 
        return (
            <div className="panel-group ">
            <div className="panel panel-default bt_Bdr_org">
                <div className="panel-heading"><h3 className="panel-title">Employee {this.props.detailData.empName} Info</h3></div>
              <div className="panel-body">

              <Segment.Group horizontal>
                 <Segment> <lable>Emp Code  :  </lable> {this.props.detailData.empCode}</Segment>
                <Segment><lable>Emp Name:  </lable>{this.props.detailData.empName}</Segment>
                <Segment><lable>Emp Type:  </lable>{this.props.detailData.empType}</Segment>
              </Segment.Group>
               <Segment.Group horizontal>
                 <Segment> <lable>Emp Role:  </lable>{this.props.detailData.empRole}</Segment>
                <Segment><lable>Emp ExpYear:  </lable>{this.props.detailData.empExpYear}</Segment>
                <Segment><lable>JoinDate:  </lable>{this.props.detailData.joinDate}</Segment>
              </Segment.Group>
               <Segment.Group horizontal>
                 <Segment> <lable>Mobile:  </lable>{this.props.detailData.mobile}</Segment>
                <Segment><lable>Email:  </lable>{this.props.detailData.email}</Segment>
                <Segment><lable>Gender:  </lable>{this.props.detailData.gender}</Segment>
              </Segment.Group>
               <Segment.Group horizontal>
                 <Segment> <lable>KeySkills:  </lable>{this.props.detailData.KeySkills}</Segment>
              </Segment.Group>
           </div>
           </div>
           </div>
            );
    };
}
