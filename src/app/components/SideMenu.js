import React from 'react'
import { Dropdown, Icon, Input, Menu } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

export  class SideMenu extends React.Component {
  state = {}

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <Menu vertical>
      

        <Menu.Item>
       
              <Menu.Menu>
                  <Menu.Item name='search' active={activeItem === 'search'} onClick={this.handleItemClick}>
                      <Link to="/employeeSearch">Search public repository</Link>
                    </Menu.Item>
                 
                   <Menu.Item name='employees' active={activeItem === 'employees'} onClick={this.handleItemClick}>
                      <Link   to="/employees">public repository</Link>
                    </Menu.Item>
                    <Menu.Item name='about' active={activeItem === 'about'} onClick={this.handleItemClick}>
                         <Link   to="/about">About</Link>
                    </Menu.Item>
                  
             </Menu.Menu>
        </Menu.Item>

        <Menu.Item name='browse' active={activeItem === 'browse'} onClick={this.handleItemClick}>
          <Icon name='grid layout' />
         </Menu.Item>
        <Menu.Item name='messages' active={activeItem === 'messages'} onClick={this.handleItemClick}>
          Messages
        </Menu.Item>

        <Dropdown item text='More'>
          <Dropdown.Menu>
            <Dropdown.Item icon='edit' text='Edit Profile' />
            <Dropdown.Item icon='globe' text='Choose Language' />
            <Dropdown.Item icon='settings' text='Account Settings' />
          </Dropdown.Menu>
        </Dropdown>
      </Menu>
    )
  }
}
