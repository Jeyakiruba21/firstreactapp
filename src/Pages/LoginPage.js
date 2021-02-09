
import React, {Component} from 'react';
import {Menu} from 'antd';
import {Link} from 'react-router-dom';
import 'antd/dist/antd.css';
import './home.css'

class LoginPage extends Component{
    render(){
        return(
            <div className="container">
<div className="Header">
    <h1>Department of IT</h1>
</div>

<div className="NavBar">
<Menu theme="dark" mode="horizontal">
        <Menu.Item key="1"><Link to = {"/"}/>Home</Menu.Item>
        <Menu.Item key="2"><Link to = {"/About"}/>About</Menu.Item>
        <Menu.Item key="3"><Link to = {"/Login"}/>Login</Menu.Item>
      </Menu>
</div>

<div className="Content">
    <h3>Login</h3>
</div>

<div className="Footer">
<p>Copyright 2021-2022</p>
</div>

</div>
        );
    }
}
export default LoginPage;