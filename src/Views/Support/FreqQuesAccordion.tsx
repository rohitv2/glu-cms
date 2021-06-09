import React from 'react';
import Accordion from '@material-ui/core/Accordion';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import Typography from '@material-ui/core/Typography';
import { v4 as uuidv4 } from 'uuid';
import AddIcon from '@material-ui/icons/Add';

const quesAns = [
    { ques: 'Do I have to pay for subscription?' },
    { ques: 'Can I create an account for my kid?' },
    { ques: 'Are the classes interactive?' },
    { ques: 'How do I signup to become a tutor?' },
    { ques: 'Can I create an account for my kid?' },
    { ques: 'Are the classes interactive?' },
    { ques: 'How do I signup to become a tutor?' },
];
const FreqQuesAccordion: React.FunctionComponent = () => {
    return (
        <div className="accord-container">
            {quesAns.map((item) => (
                <Accordion className="accord" key={uuidv4()}>
                    <AccordionSummary expandIcon={<AddIcon fontSize="large" className="icon" />}>
                        <Typography className="ques">{item.ques}</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography className="ans">
                            Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer sit amet egestas eros,
                            vitae egestas augue. Duis vel est augue.
                        </Typography>
                    </AccordionDetails>
                </Accordion>
            ))}
        </div>
    );
};

export default FreqQuesAccordion;
