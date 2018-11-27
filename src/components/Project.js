import React, { Component } from 'react';
import { Tabs, Tab, Grid, Cell, Card, CardTitle, CardText, CardActions, Button, CardMenu, IconButton } from 'react-mdl'

class Project extends Component {
    constructor(props) {
        super(props);
        this.state = { activeTab: 0 };
    }
    toggleCategories() {
        if (this.state.activeTab === 0) {
            return (
                <div className="projects-grid">
                {/* Project 1 */}
               <Card shadow={5} style={{minWidth:'450', margin:'auto'}}>
               <CardTitle style={{color: 'black', height:'176px', background:'url(https://pluralsight.imgix.net/paths/path-icons/javascript-36f5949a45.png) center / cover'}}>Javascript</CardTitle>
               <CardText>
                   lorem ipsum anjing sia goblok
               </CardText>
               <CardActions border>
               <Button colored>Github</Button>
               <Button colored>CodePen</Button>
               <Button colored>LiveDemo</Button>
               </CardActions>
               <CardMenu style={{color: '#fff'}}>
               <IconButton name="share"/>
               </CardMenu>
               </Card>
                 {/* Project 2 */}
                <Card shadow={5} style={{minWidth:'450', margin:'auto'}}>
                <CardTitle style={{color: 'black', height:'176px', background:'url(https://pluralsight.imgix.net/paths/path-icons/javascript-36f5949a45.png) center / cover'}}>Javascript 2</CardTitle>
                <CardText>
                    lorem ipsum anjing sia goblok
                </CardText>
                <CardActions border>
                <Button colored>Github</Button>
                <Button colored>CodePen</Button>
                <Button colored>LiveDemo</Button>
                </CardActions>
                <CardMenu style={{color: '#fff'}}>
                <IconButton name="share"/>
                </CardMenu>
                </Card>
                </div>
            )
        }
        else if (this.state.activeTab === 1) {
            return (
                <div className="projects-grid">
                {/* Project 1 */}
               <Card shadow={5} style={{minWidth:'450', margin:'auto'}}>
               <CardTitle style={{color: 'black', height:'176px', background:'url(https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/1200px-HTML5_logo_and_wordmark.svg.png) center / cover'}}>HTML</CardTitle>
               <CardText>
                   lorem ipsum anjing sia goblok
               </CardText>
               <CardActions border>
               <Button colored>Github</Button>
               <Button colored>CodePen</Button>
               <Button colored>LiveDemo</Button>
               </CardActions>
               <CardMenu style={{color: '#fff'}}>
               <IconButton name="share"/>
               </CardMenu>
               </Card>
                 {/* Project 2 */}
                <Card shadow={5} style={{minWidth:'450', margin:'auto'}}>
                <CardTitle style={{color: 'black', height:'176px', background:'url(https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/1200px-HTML5_logo_and_wordmark.svg.png) center / cover'}}>HTML 2</CardTitle>
                <CardText>
                    lorem ipsum anjing sia goblok
                </CardText>
                <CardActions border>
                <Button colored>Github</Button>
                <Button colored>CodePen</Button>
                <Button colored>LiveDemo</Button>
                </CardActions>
                <CardMenu style={{color: '#fff'}}>
                <IconButton name="share"/>
                </CardMenu>
                </Card>
                </div>
            )
        }
    }

    render() {
        return (
            <div className="category-tabs">
                <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })} ripple>
                    <Tab>Javascript</Tab>
                    <Tab>HTML</Tab>
                </Tabs>
                    <Grid>
                    <Cell col={12}>
                    <div className="content">{this.toggleCategories()}</div>
                    </Cell>
                    </Grid>
            </div>
        );
    }
}
export default Project;