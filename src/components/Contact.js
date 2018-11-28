import React, { Component } from 'react';
import { Grid, Cell, List, ListItem, ListItemContent } from 'react-mdl';

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
                        <p style={{ width: '75%', margin: 'auto', paddingTop: '1em' }}>Lorem Ipsum</p>
                    </Cell>
                    <Cell col={6}>
                        <h2>Contact Me</h2>
                        <hr />
                        <div className="contact-list">
                            <List>
                                <ListItem>
                                    <ListItemContent style={{ fontSize: "25px", fontFamily: "Anton" }}>
                                        <i className="fa fa-phone-square" aria-hidden="true" />
                                        (+62)812-88527415
                                    </ListItemContent>
                                </ListItem>
                                <ListItem>
                                <ListItemContent style={{ fontSize: "25px", fontFamily: "Anton" }}>
                                        <i className="fa fa-envelope" aria-hidden="true" />
                                        achmad.fajria14@gmail.com
                                    </ListItemContent>
                                </ListItem>
                                <ListItem>
                                <ListItemContent style={{ fontSize: "25px", fontFamily: "Anton" }}>
                                        <i className="fa fa-instagram" aria-hidden="true" />
                                        @fajrirjaf14
                                    </ListItemContent>
                                </ListItem>
                            </List>
                        </div>
                    </Cell>
                </Grid>
            </div>
        );
    }
}
export default contact;