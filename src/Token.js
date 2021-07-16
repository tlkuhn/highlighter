import './token.css';
import React from 'react';

class Token extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return <div
            className={this.props.transparency == 1 ? "refToken" : "token" }
            onMouseEnter={() => this.props.onMouseEnter()}
            key={this.props.transparency}
            style={{ backgroundColor: 'rgba(128, 0, 128, ' + this.props.transparency + ')' }}
        >{this.props.token}</div>;
    }
}

export default Token;