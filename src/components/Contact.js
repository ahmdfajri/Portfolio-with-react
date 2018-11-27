import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';

class contact extends Component {
    render() {
        return (
            <div className="contact-body">
                <Grid className="contact-grid">
                    <Cell col={6}>
                        <h1>Achmad Fajriansyah Nurdin</h1>
                        <img
                            src={require('./gambar/DSC_0750.jpg')}
                            alt="avatar"
                            className="avatar-img"
                        />


                    </Cell>
                    <Cell col={6}>half page</Cell>
                </Grid>
            </div>
        );
    }
}
export default contact;