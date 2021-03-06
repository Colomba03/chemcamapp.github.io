import React from "react";
import { Container, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@material-ui/core";
import "./views.css";

function ScopeSpan() {

  const tableData = [
    { phaseNum: 1, 
      startDate: "Feb 28, 2022", 
      endDate: "Mar 16, 2022", 
      tasks: "Design mockups for admin console and frontend, plan backend infrastructure." },
    { phaseNum: 2, 
      startDate: "Mar 17, 2022", 
      endDate: "Mar 23, 2022", 
      tasks: "Implement initial functions for frontend and backend." },
    { phaseNum: 3, 
      startDate: "Mar 24, 2022", 
      endDate: "Mar 29, 2022", 
      tasks: "Implement main functions (Lexer and OCR) for frontend and backend." },
    { phaseNum: 4, 
      startDate: "Mar 30, 2022", 
      endDate: "Apr 6, 2022", 
      tasks: "Wireframe connection between frontend, backend and admin console." },
      { phaseNum: 5, 
        startDate: "Apr 7, 2022", 
        endDate: "Apr 20, 2022", 
        tasks: "Deployment and Testing." },
        { phaseNum: 6, 
          startDate: "Apr 21, 2022", 
          endDate: "Apr 29, 2022", 
          tasks: "Production Rollout." }];


  return (
    <Container className="mainFont" style={{textAlign:"justify"}}>
      <h2>Scope</h2>
      <p>
      The primary goal of the application is to help users solve their chemistry problems in a fast and
      easy way. When the user photographs or scans the problem, it will show the step-by-step process
      and solution.
      </p>
      <br />

      <h2>Span</h2>
      <b>Time Frame</b>
      <li>The project will be submitted on April 29, 2022</li>
      <li>Work will begin on February 28, 2022 and end on April 29, 2022</li>
      <br />

      <h2>Methodology</h2>
      <li>The project will be handled using Agile methodology. The team will use Trello to manage each sprint.</li>
      <li>Meetings will be held weekly to report on progress and adjust the schedule if necessary.</li>
      <br /> <br />

      <TableContainer component={Paper}>
        <Table size="small">
          <TableHead>
            <TableRow>
              <TableCell align="center">Phase</TableCell>
              <TableCell align="center">Start Date</TableCell>
              <TableCell align="center">End Date</TableCell>
              <TableCell align="center">Tasks</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {tableData.map((row) => (
              <TableRow key={row.phaseNum}>
                <TableCell component="th" scope="row" align="center">{row.phaseNum}</TableCell>
                <TableCell align="center">{row.startDate}</TableCell>
                <TableCell align="center">{row.endDate}</TableCell>
                <TableCell align="center">{row.tasks}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <br /> <br />
    </Container>
  );
}

export default ScopeSpan;