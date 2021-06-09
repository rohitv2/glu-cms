import React from 'react';
import TitleRow from './TitleRow';
import { QueryBuilder, EmojiEvents, PersonPin, People } from '@material-ui/icons';

interface props{
    data: any
}
const TileCard: React.FunctionComponent<props> = ({data}) => {
    return (
        <div className="tile-card">
                <TitleRow icon={<EmojiEvents className="icon" />} title={data.activity} />
                <TitleRow icon={<QueryBuilder className="icon" />} title={data.time} />
                <TitleRow icon={<PersonPin className="icon" />} title={data.teacher} />
                <TitleRow icon={<People className="icon" />} title={data.students} />
            </div>
    );
}

export default TileCard;
