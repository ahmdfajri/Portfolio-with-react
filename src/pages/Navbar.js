import React, { Component } from 'react';
// import './App.css';
import { Layout, Header, Navigation, Content } from 'react-mdl';
import Main from './../components/Main';
import { Link } from 'react-router-dom';

class Navbar extends Component {
    render() {
        return (
            <div className="demo-big-content">
                <Layout>
                    <Header className="header-color" title={<Link style={{textDecoration: 'none', color: 'white'}} to="/">Portofolio Fajri</Link>} scroll>
                        <Navigation>
                            <Link to="/Resume">Resume</Link>
                            <Link to="/Aboutme">About Me</Link>
                            <Link to="/Project">Projects</Link>
                            <Link to="/Contact">Contact</Link>
                        </Navigation>
                    </Header>
                    <Content>
                        <div className="page-content" />
                    </Content>
                </Layout>
            </div>
        );
    }
}

export default Navbar;
