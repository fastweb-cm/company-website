import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import { faqs } from "../utils/data";
import SectionHeaderText from "./SectionHeaderText";

export default function Faq() {
  const [expanded, setExpanded] = React.useState(0); // first FAQ open by default

  const handleChange = (panel) => (_, isExpanded) => {
    // If trying to close the currently opened panel, do nothing (keep it open)
    if (!isExpanded && expanded === panel) {
        return;
    }

    // Otherwise update to new expanded panel
    setExpanded(isExpanded ? panel : expanded);

  };

  return (
    <div className="px-4 md:px-8">
      <SectionHeaderText title="QUESTIONS & ANSWERS" />
      <h2 className="text-3xl md:text-5xl capitalize md:leading-16 mb-6">
        see frequently asked questions
      </h2>

      {faqs.map((faq, index) => {
        const isActive = expanded === index;

        return (
          <Accordion
            key={index}
            expanded={isActive}
            onChange={handleChange(index)}
            className="rounded-none! mb-4!"
            sx={{ "&:before": { display: "none" } }}
          >
            <AccordionSummary
              className={`rounded-none! flex! items-center justify-between 
                ${isActive ? "bg-primary! text-white! font-extrabold!" : "text-text! font-extrabold!"}
              `}
              expandIcon={
                <span className={`text-2xl font-bold ${isActive ? "text-white":"text-text"}`}>
                  {isActive ? "−" : "+"}
                </span>
              }
            >
              <Typography className={`text-lg! font-extrabold!`}>
                {faq.question}
              </Typography>
            </AccordionSummary>

            <AccordionDetails className="bg-white rounded-none! py-8! px-6!">
              <Typography className="text-header-text leading-relaxed">
                {faq.answer}
              </Typography>
            </AccordionDetails>
          </Accordion>
        );
      })}
    </div>
  );
}
