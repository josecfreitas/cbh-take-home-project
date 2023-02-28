# Ticket Breakdown

We are a staffing company whose primary purpose is to book Agents at Shifts posted by Facilities on our platform. We're working on a new feature which will generate reports for our client Facilities containing info on how many hours each Agent worked in a given quarter by summing up every Shift they worked. Currently, this is how the process works:

- Data is saved in the database in the Facilities, Agents, and Shifts tables
- A function `getShiftsByFacility` is called with the Facility's id, returning all Shifts worked that quarter, including some metadata about the Agent assigned to each
- A function `generateReport` is then called with the list of Shifts. It converts them into a PDF which can be submitted by the Facility for compliance.

## You've been asked to work on a ticket. It reads:

**Currently, the id of each Agent on the reports we generate is their internal database id. We'd like to add the ability for Facilities to save their own custom ids for each Agent they work with and use that id when generating reports for them.**

Based on the information given, break this ticket down into 2-5 individual tickets to perform. Provide as much detail for each ticket as you can, including acceptance criteria, time/effort estimates, and implementation details. Feel free to make informed guesses about any unknown details - you can't guess "wrong".

You will be graded on the level of detail in each ticket, the clarity of the execution plan within and between tickets, and the intelligibility of your language. You don't need to be a native English speaker, but please proof-read your work.

## Your Breakdown Here

Currently, the id of each Agent on the reports we generate is their internal database id. We'd like to add the ability for Facilities to save their own custom ids for each Agent they work with and use that id when generating reports for them.

### Ticket 1: Story: Facilities can add a custom id for their Agents

As a facility, I want to be able to add custom ids for my agents so that I am able to see these IDs in my worked-hours reports.

AC: A facility is able to add a custom ID to their agents

SME: PRODUCT_PERSON_NAME_HERE will be the first contact in order to solve any doubts. We may need assistance from UX_DESIGN_PERSON_NAME_HERE to answer how the interface for this will look like.

### Ticket 1.1: Technical Task: UX/Designs for "Facilities can add a custom id for their Agents"

Create the UX/designs for the story (ticket 1)

AC: Designs are created on "FIGMA?"

SME: PRODUCT_PERSON_NAME_HERE will be the first contact in order to solve any doubts.

### Ticket 1.2: Technical Task: Develop "Facilities can add a custom id for their Agents"

Based on the designs created on ticket 1.1, develop the Front-end and Back-end for the story (ticket 1)

AC: A facility can add a custom ID to their Agents

SME: PRODUCT_PERSON_NAME_HERE will be the first contact in order to solve any doubts. Reach out to UX_DESIGN_PERSON_NAME_HERE to ask any questions related to the UX/design.

### Ticket 2: Story: Show Agent custom ID on the worked-hours report

As a facility, I want to see my agent's custom ids in my worked-hours reports so that it is easier for me to understand them.

AC: A facility is able to see their agents' custom id on the worked-hours reports

SME: PRODUCT_PERSON_NAME_HERE will be the first contact in order to solve any doubts. We may need assistance from UX_DESIGN_PERSON_NAME_HERE to answer how the reports will look like.

### Ticket 2.1: Technical Task: UX/Designs for "Show Agent custom ID on the worked-hours report"

Update worked-hours UX/designs to attend to the request of the story (ticket 2)

AC: Worked-hours reports UX/Designs are updated on "FIGMA?" including the agents' custom ID

SME: PRODUCT_PERSON_NAME_HERE will be the first contact in order to solve any doubts.

### Ticket 2.2: Technical Task: Develop "Show Agent custom ID on the worked-hours report"

Based on the designs created on ticket 2.1, develop the Front-end and Back-end for the story (ticket 2)

AC: A facility can see their Agents' custom IDs in the worked-hour reports.

SME: PRODUCT_PERSON_NAME_HERE will be the first contact in order to solve any doubts. Reach out to UX_DESIGN_PERSON_NAME_HERE to ask any questions related to the UX/design.
