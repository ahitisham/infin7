import React from "react";
import { Button, Form, Grid, Header, Image, Message, Segment } from 'semantic-ui-react'



export class HeaderLayout extends React.Component{
	render(){
		return(
			<div>
				
				<div className="row">
					<div className="col-md-2">
						<img src="./infinity.png" width="150"/>
					</div>
				</div>
				<br/>
				<h1 className="bt_Bdr_org"></h1>
			</div>
			);
	}
}
