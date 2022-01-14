import React from "react";

export default class Example extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0,

            baseUrl: ''


        };
    }

    componentDidMount() {
        let baseUrl = ''
        if (process.env.NODE_ENV == 'development') {
            baseUrl = process.env.REACT_APP_DEV__BASE_URL;
        }

        if (process.env.NODE_ENV == 'test') {
            baseUrl = process.env.REACT_APP_TEST__BASE_URL;
        }

        if (process.env.NODE_ENV == 'production') {
            baseUrl = process.env.REACT_APP_PROD__BASE_URL;
        }

        this.setState({ baseUrl });
    }

    render() {
        return (
            <div>
                <h1>
                    base url : {this.state.baseUrl}
                </h1>
            </div>
        );
    }
}