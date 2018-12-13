import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
class Landing extends Component {
    render() {
      return (
          <div style={{ width:'100%', margin:'auto'}}>
<Grid className="landing-grid">
<Cell col={12}>
<img
src={require('./gambar/DSC_0750.jpg')}
alt="avatar"
className="avatar-img"
/>
<div className="banner-text">
<h1>Electrical Fresh Grad</h1>
<hr/>
<p>HTML/CSS | Bootstrap | Material Design Lite | Javascript | React |</p>
</div>
</Cell>
</Grid>
          </div>
      );
    }
}
export default Landing;