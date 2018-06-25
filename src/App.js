import React, {Component} from 'react';
import {Tab, Tabs, TabList, TabPanel} from 'react-tabs';
import './App.css';

class App extends Component {
    render() {
        return (
            <div>
                <div sytle={{width: '10px'}}>
                    <img src={require('./logo.svg')}/>
                </div>
                <Tabs>
                    <TabList style={{
                        display: 'flex', flexDirection: 'row',
                        justifyContent: 'space-around'
                    }}>
                        <Tab>题目 1</Tab>
                        <Tab>题目 2</Tab>
                        <Tab>题目 3</Tab>
                    </TabList>
                    <TabPanel>
                        <h2>详情 1</h2>
                    </TabPanel>
                    <TabPanel>
                        <h2>详情 2</h2>
                    </TabPanel>
                    <TabPanel>
                        <h2>详情 3</h2>
                    </TabPanel>
                </Tabs>
            </div>
        );
    }
}

export default App;
