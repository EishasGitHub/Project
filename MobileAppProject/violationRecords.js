import { useState } from "react";

export var violations = [
    { violationID: 1, Rollno: "251685973", Detail: "Smoking", Fine: "1000", Date: "09/12/23", Time: "15:33" },
    { violationID: 2, Rollno: "251714206", Detail: "Stealing", Fine: "2000", Date: "12/01/24", Time: "11:09" },
    { violationID: 3, Rollno: "251685973", Detail: "Smoking", Fine: "5000", Date: "09/12/23", Time: "16:04" },
    { violationID: 4, Rollno: "251685973", Detail: "Smoking", Fine: "10000", Date: "09/12/23", Time: "18:01" },
    { violationID: 5, Rollno: "251685973", Detail: "No ID Card", Fine: "500", Date: "09/12/23", Time: "8:30" },
    { violationID: 6, Rollno: "251685973", Detail: "No ID Card", Fine: "1000", Date: "09/12/23", Time: "9:00" },

];

// const [count, setCount] = useState(6)

export function addViolation(newViolation) {
    const maxID = violations.reduce((max, violation) => (violation.violationID > max ? violation.violationID : max), 0);
    // setCount(prevCount => prevCount + 1)
    const newViolationWithID = { violationID: maxID + 1, Rollno: newViolation.Rollno, Detail: newViolation.Detail, Fine: newViolation.Fine, Date: newViolation.Date, Time: newViolation.Time };
    // violations.push(newViolationWithID);
    violations = [...violations, newViolationWithID];
}

export function removeViolation(violationID) {
    violations = violations.filter(violation => violation.violationID !== violationID);
}


