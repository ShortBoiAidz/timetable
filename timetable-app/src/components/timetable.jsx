//& =============
//* Modules
import { useState } from "react";
import { Title } from "./title.jsx";
import { EditOverlay } from "./editOverlay.jsx";
import { checkBlock } from "../scripts/checkBlock.js";
import {
  PERIODS,
  DAYS,
  BLOCK_SUBJECTS,
} from "../scripts/core/constants.js";

export function Timetable() {
  const [blockSubjects, setBlockSubjects] = useState({ ...BLOCK_SUBJECTS });

  function openEditor() {
    document.getElementById("editOverlay").style.display = "flex";
  }

  return(
    <>
    {/* SECTION - Timetable */}
      <table id="timetable" className=" bg-blue-100 ">
        <caption id="timetable-title"><Title /></caption>

        <thead>
          <tr id="day-titles" className="dayTitles bg-indigo-300">
            <th id="period-column-header"><button type="button" id="editButton" onClick={openEditor}>Edit</button></th>
            {DAYS.map((day) => (
              <th id={`day-${day.toLowerCase()}-header`} key={day}>{day}</th>
            ))}
          </tr>
        </thead>

        <tbody>

          {PERIODS.map((period) => (

            <tr id={`period-${period}-row`} className="subject" key={period}>
              <th id={`period-${period}-header`} className="bg-indigo-300">Period {period}</th>

              {DAYS.map((day) => {
                const cellId = `p${period}-${day.toLowerCase()}`;

                return (
                  <td id={cellId} key={day}>
                    {checkBlock(cellId, blockSubjects)}
                  </td>
                );
              })}

            </tr>
          ))}

        </tbody>
      </table>
    {/* !SECTION */}

    <EditOverlay subjects={blockSubjects} onSave={setBlockSubjects}/>

    </>
  );
}