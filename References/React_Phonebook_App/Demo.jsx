import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class Demo extends Component {
    state = {  }
    render() {
        return (
            <div className="container">
                <h1>hello U are done!!</h1>
            </div>
        );
    }
}

ReactDOM.render(<Demo/>, document.getElementById('root'));

