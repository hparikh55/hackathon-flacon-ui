import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { useEffect, useState } from "react";
import axios from "axios";

const baseURL = "http://localhost:8080";

export default function MainInteractiveComponent() {
  const [interests, setInterests] = useState([]);
  useEffect(() => {
      axios.post(`${baseURL}/api/predict`, {
        "prompt": "Give me options for career opportunity in indian education system"
      })
      .then((response) => {
          setInterests(response.data.options);
    });
  }, []);
  console.log(interests);
  return (
    <div>
      <Accordion defaultExpanded>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <Typography>Select somthing that interests you</Typography>
        </AccordionSummary>
        <AccordionDetails>
          {interests.map((interest) => (
            <Card sx={{ width: "100px" }}>
              <CardContent>
                <Typography>{interest}</Typography>
              </CardContent>
            </Card>
          ))}
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2-content"
          id="panel2-header"
        >
          <Typography>Header</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
