import { render } from '@testing-library/react';
import React, { Component } from 'react';

class CampsiteInfo extends Component{
    constructor(props){
        super(props)
    }
    render(){
        if(this.props.campsite){
            return(
                <div className="row"></div>
            );
        }
        return <div/>;
    }
}



export default CampsiteInfo;