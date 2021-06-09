import React from 'react'
import { Typography } from '@material-ui/core';

const CommentComponent = (data:any) => {
    return (
        <div className="comments-block">
            <div className="comment-header">Comments</div>
            <div className="comments-text">
                    {data.data}
            </div>
            <Typography className="total_recommend_greysmalltext">
                <span className="edit">Reply</span>
            </Typography>
        </div>
    )
}

export default CommentComponent
