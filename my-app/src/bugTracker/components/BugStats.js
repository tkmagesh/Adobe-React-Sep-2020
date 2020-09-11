import React from "react";

//Presentation Component / Dumb Component
//Should not communicate with the redux infrastructure
//All the needs are to be met by the parent component

const BugStats = ({bugs}) => {
    const closedCount = bugs.reduce((result, bug) => bug.isClosed ? result + 1 : result, 0);
    return(
        <section className="stats">
        <span className="closed">{closedCount}</span>
        <span> / </span>
        <span>{bugs.length}</span>
        </section>
    );
};

export default BugStats;