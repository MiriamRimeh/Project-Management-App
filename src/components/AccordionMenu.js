import React from "react";
import {
    Accordion,
    AccordionItem,
    AccordionItemButton,
    AccordionItemHeading,
    AccordionItemPanel
} from 'react-accessible-accordion';
import '../style/AccordionMenu.css';
import { Link } from "react-router-dom";

export default function AccordionMenu({item, id}){
    return(
        <Accordion allowMultipleExpanded={false} allowZeroExpanded={true}>
            <AccordionItem>
                <AccordionItemHeading>
                    <AccordionItemButton className="accordion__button">
                        {item.icon}
                        <span className="span-accordion-menu">{item.title}</span>
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel className="accordion__panel">
                    <ul>
                        {item.type?.map((item_type, index) => {
                            return (
                                <li key={index} className={item.cName}>
                                    <Link to={item_type.path} className={item_type.cName}>
                                        {item_type.icon}
                                        <span className="span-accordion-menu">{item_type.title}</span>
                                    </Link>
                                </li>
                            )
                        })}
                    </ul>
                </AccordionItemPanel>
            </AccordionItem>
        </Accordion>
    )
}