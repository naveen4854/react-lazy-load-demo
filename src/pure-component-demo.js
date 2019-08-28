import React from 'react';

class ReactClassComponent extends React.PureComponent {
    render() {
        console.log('render called', 'ReactClassComponent')
        return (
            <h1>
                Class Component props version {this.props.data.version || 0}
            </h1>
        )
    }
}

// FUNCTIONAL COMPONENT
function ReactFuncComponent(props) {
    console.log('render called', 'ReactFuncComponent')
    return (
        <h1>
            Function Component props version {props.data.version || 0}
        </h1>
    )
}

const PureFuncComponent = React.memo(ReactFuncComponent);

export default class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            test: 1,
            data: {
                version: 0
            }
        }
        this.sendNewProps = this.sendNewProps.bind(this);
        this.sendOldProps = this.sendOldProps.bind(this);
    }

    sendNewProps() {
        this.setState({
            data: { version: this.state.data.version + 1 }
        })
    }

    sendOldProps() {
        let a = this.state.data;
        a.version = a.version + 1;
        this.setState({
            test: 2,
            data: a
        })
    }

    render() {
        return (
            <React.Fragment>
                <button onClick={this.sendOldProps}>Send Old Props</button>
                <button onClick={this.sendNewProps}>Send New Props</button>
                {/* <ReactClassComponent data={this.state.data}></ReactClassComponent> */}
                 {/* <ReactFuncComponent data={this.state.data}></ReactFuncComponent> */}
                <PureFuncComponent data={this.state.data}></PureFuncComponent>
            </React.Fragment>
        );
    }
}
