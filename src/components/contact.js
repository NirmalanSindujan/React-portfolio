import React,{Component} from 'react';
import {Grid, Cell,List , ListItem,ListItemContent} from 'react-mdl'


class Contact extends Component{
    render(){
        return(
           <div className="contact-body"> 
               <Grid className = "contact-grid">
                    <Cell col={6}>
                        <h2>Sindujan</h2>
                        <img
                            src="https://cdn1.iconfinder.com/data/icons/user-pictures/101/malecostume-512.png"
                            alt="avatar"
                            style = {{height:'250px'}}
                          />
                          <p style={{width:'75%' , margin:'auto' ,paddingTop:'1em '}}>
                              hello Guys, Enthusiatic tech geek
                          </p>
                    </Cell>
                    <Cell col={6}>
                       <h2>Contact Me</h2>
                       <hr/>
                        
                        <div className="contact-list">
                            <List>
                                <ListItem>
                                    <ListItemContent
                                    style={{fontSize:'25px',fontFamily:'Anton'}} icon="phone">
                                      077-222134
                                    </ListItemContent>
                                </ListItem>

                                <ListItem>
                                    <ListItemContent
                                    style={{fontSize:'25px',fontFamily:'Anton'  }} icon="email">
                                      sindujan96@gmail.com
                                    </ListItemContent>
                                </ListItem>

                                <ListItem>
                                    <ListItemContent
                                    style={{fontSize:'25px',fontFamily:'Anton'}} icon="link">
                                   lk.linkedin.com/in/nirmalan-sindujan
                                    </ListItemContent>
                                </ListItem>
                               
                            </List>
                        </div>
                    </Cell>
               </Grid>
           </div>

        )
    }
} 

export default Contact;