import React, { Component } from 'react';
import './Header.css';
import Button from '@material-ui/core/Button';
import './Header.css';
import logo from '../../assets/logo.svg';

class Header extends Component {
    render() {
        return (
            <header className="app-header">
                <img src={logo} className="app-logo" alt="logo" />git
                <div className="login-button">
                    <Button variant="contained" color="default">
                        Login
                    </Button>
                </div>
            </header>
        )
    }
}

export default Header;