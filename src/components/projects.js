import React,{Component} from 'react';
import {Tabs,Tab,Grid,Cell,Card,CardTitle,CardActions,CardMenu,Button,IconButton} from 'react-mdl'
import { CardText } from 'material-ui';


class Projects extends Component{

    constructor(props){
        super(props);
        this.state={activeTab :0};
    }

   toggleCategories(){
       if(this.state.activeTab===0){
           return(
             <div className="projects-grid">
               <Card shadow={5} style={{minWidth:'450' , margin:'20px' }}>
                   <CardTitle style={{color:'#ffffff', height:'176px', background:
                   'url(https://pbs.twimg.com/profile_images/569783685491093504/YZpqrvsS.png) center / cover'  }}>
                            React Projects #1
                   </CardTitle>
                   <CardActions border>
                       <Button colored> Github</Button>
                       <Button colored> CodePen</Button>
                       <Button colored> LiveDemo</Button>
                   </CardActions>
                   <CardMenu style={{color:'#fff' }}>
                       <IconButton name="share"/>    
                   </CardMenu>
               </Card>

                <Card shadow={5} style={{minWidth:'450' , margin:'20px'}}>
                <CardTitle style={{color:'#fff', height:'176px', background:
                'url(https://pbs.twimg.com/profile_images/569783685491093504/YZpqrvsS.png) center / cover'  }}>
                        React Projects #2
                </CardTitle>
                <CardActions border>
                    <Button colored> Github</Button>
                    <Button colored> CodePen</Button>
                    <Button colored> LiveDemo</Button>
                </CardActions>
                <CardMenu style={{color:'#fff' }}>
                    <IconButton name="share"/>    
                </CardMenu>
                </Card>

                <Card shadow={5} style={{minWidth:'450' , margin:'20px'}}>
                <CardTitle style={{color:'#fff', height:'176px', background:
                'url(https://pbs.twimg.com/profile_images/569783685491093504/YZpqrvsS.png) center / cover'  }}>
                        React Projects #3
                </CardTitle>
                <CardActions border>
                    <Button colored> Github</Button>
                    <Button colored> CodePen</Button>
                    <Button colored> LiveDemo</Button>
                </CardActions>
                <CardMenu style={{color:'#fff' }}>
                    <IconButton name="share"/>    
                </CardMenu>
                </Card>

          

               

            </div>

               
           )
       }else if(this.state.activeTab===1){
        return(
            <div className="projects-grid">
            <Card shadow={5} style={{minWidth:'450' , margin:'20px' }}>
                <CardTitle style={{color:'#000000', height:'176px', background:
                'url(https://www.medicalcenter.virginia.edu/mobile-device-setup/colorsAndroidlogo.jpg/image) center / cover'  }}>
                         Android Projects #1
                </CardTitle>
                <CardActions border>
                    <Button colored> Github</Button>
                    <Button colored> CodePen</Button>
                    <Button colored> LiveDemo</Button>
                </CardActions>
                <CardMenu style={{color:'#fff' }}>
                    <IconButton name="share"/>    
                </CardMenu>
            </Card>

             <Card shadow={5} style={{minWidth:'450' , margin:'20px'}}>
             <CardTitle style={{color:'#000000', height:'176px', background:
             'url(https://www.medicalcenter.virginia.edu/mobile-device-setup/colorsAndroidlogo.jpg/image) center / cover'  }}>
                     Android Projects #2
             </CardTitle>
             <CardActions border>
                 <Button colored> Github</Button>
                 <Button colored> CodePen</Button>
                 <Button colored> LiveDemo</Button>
             </CardActions>
             <CardMenu style={{color:'#fff' }}>
                 <IconButton name="share"/>    
             </CardMenu>
             </Card>

             <Card shadow={5} style={{minWidth:'450' , margin:'20px'}}>
             <CardTitle style={{color:'#000', height:'176px', background:
             'url(https://www.medicalcenter.virginia.edu/mobile-device-setup/colorsAndroidlogo.jpg/image) center / cover'  }}>
                     Android Projects #3
             </CardTitle>
             <CardActions border>
                 <Button colored> Github</Button>
                 <Button colored> CodePen</Button>
                 <Button colored> LiveDemo</Button>
             </CardActions>
             <CardMenu style={{color:'#fff' }}>
                 <IconButton name="share"/>    
             </CardMenu>
             </Card>

       

            

         </div>
        )
        }else if(this.state.activeTab===2){
            return(
                <div>
                    <h1>
                        This is Springboot
                    </h1>
                </div>
            )
       }else if(this.state.activeTab===3){
        return(
            <div>
                <h1>
                    This is Node
                </h1>
            </div>
        )
   }
}

    render(){
        return(
           <div className= "category-tabs"> 
                <Tabs activeTab={this.state.activeTab} onChange={(tabId)=>this.setState({activeTab: tabId})} ripple>
                    <Tab> React </Tab>
                    <Tab> Android </Tab>
                    <Tab> Springboot </Tab>
                    <Tab> Node </Tab>
                </Tabs>

                <section className="projects-grid">
                    <Grid >
                        <Cell col={12}>
                            <div className = "content">
                                {this.toggleCategories()}
                            </div>
                        </Cell>
                    </Grid>
                </section>
           </div>

        )
    }
}


export default Projects;