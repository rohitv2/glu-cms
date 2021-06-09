import React from 'react';
import TileCard from './TileCard';


interface props{
    data:any
}
const TitleCardContainer: React.FunctionComponent<props> = ({data}) => {
    return (
        <div className="title-card-container">
            <TileCard data={data}/>
        </div>
    );
};

export default TitleCardContainer;
