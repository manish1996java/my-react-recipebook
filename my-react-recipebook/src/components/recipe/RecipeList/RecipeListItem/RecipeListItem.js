import React from 'react';
import {Card,Media} from 'react-bootstrap';
const recpieListItem = () =>{
    
    const style = {
        height: '64px',
        width:'70px'
    }

    return (
            <div class="mb-2">
                <Card className="p-3">
                    <Media>
                        <img src="" className="mr-3 " style={style} alt=""></img>
                        <Media.Body>
                            <h4 className="d-inline-block">this is a title</h4>
                            <p className="text-truncate w-50 m-0">this is a dummy paraghraph which describe the picture.</p>
                        </Media.Body>
                    </Media>
                </Card>
            </div>
    );
}

export default recpieListItem;