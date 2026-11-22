//& =============
//* Modules
import { useEffect, useState } from "react";
import { Title } from "./title.jsx";
import { Header } from "./header.jsx";
import { EditOverlay } from "./editOverlay.jsx";
import { SettingsOverlay } from "./settingsOverlay.jsx";
import { checkBlock } from "../scripts/checkBlock.js";
import { changeColours } from "../scripts/changeColours.js";
import { openEditor } from "../scripts/openOverlay.js";
import {
  PERIODS,
  DAYS,
  BLOCK_CELLS,
  BLOCK_COLORS,
  BLOCK_SUBJECTS,
  THEME_DEFAULTS,
} from "../scripts/core/constants.js";

export function Timetable() {
  const [blockSubjects, setBlockSubjects] = useState({ ...BLOCK_SUBJECTS });
  const [blockColors, setBlockColors] = useState({ ...BLOCK_COLORS });
  const [settings, setSettings] = useState({ ...THEME_DEFAULTS });

  useEffect(() => {
    changeColours(settings);
  }, [settings]);

  function saveEditChoices({ subjects, colors }) {
    setBlockSubjects(subjects);
    setBlockColors(colors);
  }

  return(
    <>
    <Header/>
    {/* SECTION - Timetable */}
    <div className="timetableViewport">
      <table id="timetable" className=" bg-blue-100 ">
        <caption id="timetable-title"><Title /></caption>

        <thead>
          <tr id="day-titles" className="dayTitles bg-indigo-300">
            <th id="period-column-header"><button className="button" type="button" id="editButton" onClick={openEditor}>Edit</button></th>
            {DAYS.map((day) => (
              <th id={`day-${day.toLowerCase()}-header`} key={day} style={{ backgroundColor: settings.headerColor }}>{day}</th>
            ))}
          </tr>
        </thead>

        <tbody>

          {PERIODS.map((period) => (

            <tr id={`period-${period}-row`} className="subject" key={period}>
              <th id={`period-${period}-header`} className="bg-indigo-300" style={{ backgroundColor: settings.headerColor }}>Period {period}</th>

              {DAYS.map((day) => {
                const cellId = `p${period}-${day.toLowerCase()}`;
                const block = Object.keys(BLOCK_CELLS).find((key) => BLOCK_CELLS[key].includes(cellId));

                return (
                  <td id={cellId} key={day} style={block ? { backgroundColor: blockColors[block] } : undefined}>
                    {checkBlock(cellId, blockSubjects)}
                  </td>
                );
              })}

            </tr>
          ))}

        </tbody>
      </table>
    </div>
    {/* !SECTION */}

    <EditOverlay subjects={blockSubjects} colors={blockColors} onSave={saveEditChoices}/>
    <SettingsOverlay settings={settings} onSave={setSettings}/>

    </>
  );
}