import React from 'react';
import './App.css';
import { Header,Layout,Drawer,Navigation,Content,HeaderRow,Textfield, } from 'react-mdl';
import Main from './components/main'
import { Link} from 'react-router-dom'



class App extends React.Component{
render() {
  return (
    <div className="demo-big-content">
    <Layout>
        <Header className="header-color" title="Title"  waterfall hideTop>
            <HeaderRow title="Title">
                <Textfield
                    value=""
                    onChange={() => {}}
                    label="Search3"
                    expandable
                    expandableIcon="search"
                />
            </HeaderRow>
            <HeaderRow>
            <Navigation>
                <Link to ="/resume"> Resume </Link>
                <Link to="/aboutme"> AboutMe </Link>
                <Link to="/projects"> Projects </Link>
                <Link to="/contact"> Contact </Link>
            </Navigation>
            </HeaderRow>
        </Header>
        <Drawer title="Title">
        <Navigation>
                <Link to ="/resume"> Resume </Link>
                <Link to="/aboutme"> AboutMe </Link>
                <Link to="/projects"> Projects </Link>
                <Link to="/contact"> Contact </Link>
            </Navigation>
        </Drawer>
        <Content>
            <div className="page-content" />
            <Main/>
        </Content>
    </Layout>
</div>
  );
}

}

export default App;
