import React from 'react';
import { Card, CardImg, CardImgOverlay, CardTitle } from 'reactstrap';


// This component will be responisble for rendering the
// Cards with the campsite details
// we will destructure the props as parameters 


//no longer using onClick --> so remove from params 
function RenderDirectoryItem({campsite}){
    return(
        <Card>
        <CardImg width="100%" src={campsite.image} alt={campsite.name} />
        <CardImgOverlay>
            <CardTitle>{campsite.name}</CardTitle>
        </CardImgOverlay>
        </Card>
    );
}

function Directory(props) {
    const directory = props.campsites.map(campsite => {
        return (
            <div key={campsite.id} className="col-md-5 m-1">
                <RenderDirectoryItem campsite={campsite} />
                {/* <RenderDirectoryItem campsite={campsite} onClick={props.onClick} /> */}
            </div>
        );
    });

    return (
        <div className="container">
            <div className="row">
                {directory}
            </div>
        </div>
    );
}

export default Directory;