import React from 'react';
import { Typography } from '@material-ui/core';
interface props {
    heading?: string;
    tagsArray?:string[];
}
const TagsContainer: React.FunctionComponent<props> = ({ heading, tagsArray }) => {
    return (
        <>
            <div className="reusable_skills_container">
                <Typography className="skillTag_text">{heading}</Typography>

                <div className="row skills">
                    {tagsArray.map((val:string,index:any)=>(
                            <Typography key={index} className="skillset">{val}</Typography>
                    ))} 
                </div>
            </div>
        </>
    );
};
export default TagsContainer;
