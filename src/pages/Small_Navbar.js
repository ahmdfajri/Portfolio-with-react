import React, { Component } from 'react';
import { Header, HeaderRow, Textfield, Navigation, Content, Layout } from 'react-mdl'
import Main from './../components/Main';
import { Link } from 'react-router-dom';
class Small_Navbar extends Component {
    render() {
        return (
            <div className="demo-big-content">
    <Layout>
        <Header waterfall hideTop>
            <HeaderRow>
            <Navigation>
                            <Link to="/Resume">Resume</Link>
                            <Link to="/Aboutme">About Me</Link>
                            <Link to="/Project">Projects</Link>
                            <Link to="/Contact">Contact</Link>
                        </Navigation>
            </HeaderRow>
        </Header>
        <Content>
            <div className="page-content" />
        </Content>
        <Main/>
    </Layout>
</div>
        );
    }
}
export default Small_Navbar;