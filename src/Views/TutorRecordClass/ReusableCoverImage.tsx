import React from 'react';
import { Typography } from '@material-ui/core';
import UploadMaxSize from '../../components/Button/UploadMaxSize';
interface props{
    imgSrc?:any;
    handleFile:(file:File)=> void;
    submit?: ()=> void;
    coverUrl?:string;
}
const ReusableCoverImage: React.FunctionComponent<props> = ({imgSrc, handleFile, submit, coverUrl}) => {
    return (
        <>
        <div className="col-md-12">
            <div className="row">
                <div className="col-md-5 p-0 ">
                    <img className="img-fluid" src={imgSrc} width="301px" height="233px" alt="" />
                </div>
                <div className="col-md-7 p-0 ">
                    <div className="upload_container">
                        <div className="upload_image_container">
                            <div className="col-md-12 p-0">
                                <Typography className="textCover">Add A Cover Image To Your Class</Typography>
                            </div>
                            <div className="upload_component">
                                <UploadMaxSize urlLink={coverUrl} onClick={handleFile}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="publish_cancel_buttons">
                    <div className="p_button" onClick={submit}>
                        <Typography className="text">Publish</Typography>
                    </div>
                    <div className="c_button">
                        <Typography className="text">Cancel</Typography>
                    </div>
                </div>
            </div>
            </div>
        </>
    );
};

export default ReusableCoverImage;
