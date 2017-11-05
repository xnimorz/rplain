import React, {Component} from 'react';
import ReactDOM from 'react-dom';

import RPlain from '../index';


class Page extends Component {
    render() {
        return (
            <RPlain>
                <h1>
                    RPlain
                </h1>                
                <p>
                    It's simplest component for rendering children 
                </p>
                <p>
                    You may not return array from component's render method and use key attribute.
                </p>
                <p>
                    Just use RPlain component and put your children.
                </p>
                <p>
                    All content from this page use RPlain:
                </p>
                <div class='code'>
                    <code>
{`
class Page extends Component {
    render() {
        return ( 
            <RPlain>
                <h1>
                    RPlain
                </h1>                
                <p>
                    It's simplest component for rendering children 
                </p>
                <p>
                    You may not return array from component's render method and use key attribute.
                </p>
                <p>
                    Just use RPlain component and put your children.
                </p>
                <p>
                    All content from this page use RPlain:
                </p>
                <code>
                  //  code is here!
                </code>
                <a href='https://github.com/xnimorz/rplain'>GitHub</a>
                <span class='spacer'></span>
                /
                <span class='spacer'></span>
                <a href='https://www.npmjs.com/package/rplain'>npm</a>
                <h2>
                    Usage:
                </h2>
                <p>
                    In your project directory:
                </p>
                <code>
                    npm install --save rplain
                </code>
                <p>
                    In your component:
                </p>
                <code>                  
                  // example
                </code>
            </RPlain>
        );
    }
}
`}                
                    </code>
                </div>
                <a href='https://github.com/xnimorz/rplain'>GitHub</a>
                <span class='spacer'></span>
                /
                <span class='spacer'></span>
                <a href='https://www.npmjs.com/package/rplain'>npm</a>
                <h2>
                    Usage:
                </h2>
                <p>
                    In your project directory:
                </p>
                <div class='code'>
                    <code>                    
npm install --save rplain
                    </code>
                </div>
                <p>
                    In your component:
                </p>
                <div class='code'>
                    <code>
{`                    
import RPlain from 'rplain';

class MyComponent extends Component {
    render() {
        const {children} = this.props;
        return (
            <RPlain>
                <div>First</div>
                <div>Second</div>
                <div>Third</div>    
                {children}
            </RPlain>
        );
    }
}
`}
                    </code>
                </div>
            </RPlain>
        );
    }
}

ReactDOM.render(<Page />, document.querySelector('#root'));