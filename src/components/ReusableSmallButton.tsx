import React from 'react';
import {Link} from 'react-router-dom';
import { Typography, makeStyles } from '@material-ui/core';
interface props{
    heading?:string;
    linkurl?:string;
}
const ReusableSmallButton: React.FunctionComponent <props>= ({heading,linkurl}) => {
    return (
        <>
            <div className="reusable_smallbutton">
              <Link to={linkurl} style={{textDecoration:'none',color:'black'}} > <Typography className="small_button_text">{heading}</Typography></Link> 
            </div>
        </>
    );
};

export default ReusableSmallButton;
