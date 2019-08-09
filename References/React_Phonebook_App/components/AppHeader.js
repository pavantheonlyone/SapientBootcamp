import React from 'react';

//a new component called AppHeader
/*export*/ const AppHeader = function (props) {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a className="navbar-brand" href="/">PhoneBook App</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item active">
                        <a className="nav-link" href="/">Home <span className="sr-only">(current)</span></a>
                    </li>
                   
                    
                </ul>
            </div>
        </nav>
    );
}
export default AppHeader;
 //arguments are flexible here
//  function sayHello()
//  {
//      console.log('hello');
//  }
//     sayHello();
//     sayHello('a');
//     sayHello('a','b');