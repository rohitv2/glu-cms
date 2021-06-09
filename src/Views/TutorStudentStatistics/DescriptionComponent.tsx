import React from 'react'
import {Typography} from '@material-ui/core';

const DescriptionComponent = React.memo((data: any) => {
    return (
        <Typography className="tutor-exam-statistics-description">
            {data.data}
        </Typography>
    )
})

export default DescriptionComponent
