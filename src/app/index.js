// console.log('it works!');

import React from 'react';
import { render } from 'react-dom'; //allows us to render to the dom

import { Header } from './components/Header';
import { Home } from './components/Home';

// create a component

class App extends React.Component{
    render() {//called when React thinks it needs to call a component
        //what to do when rendering this component.
        //html code and js, elements that get added to the dom, buttons, divs
        var user = {
            name:'Glen',
            hobbies:['Programming', 'Reading']
        }
        //return what should be rendered
        return(
            //we can have html in our js.
            //you can only return one root element.
            <div className = 'container'>
                <div className = 'row'>
                    <div className='col-xs-10 col-xs-offset-1'>
                        <Header />
                    </div>
                </div>
                <div className = 'row'>
                    <div className='col-xs-10 col-xs-offset-1'>
                        {/* <Home name={'Max'} age={27} user={user}/> */}
                        {/* if you want to pass some html */}
                        <Home name = {'Max'} age = {27} user = {user}>
                            <p>This is a paragraph</p>
                        </Home>
                    </div>
                </div>
            </div>
            
        );
    }
}

//render the App component in the app div in the index.html page.
render(<App/>, window.document.getElementById("app"));
