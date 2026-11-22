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
  BLOCK_CLASSES,
  THEME_DEFAULTS,
} from "../scripts/core/constants.js";

function loadStoredObject(key, fallback) {
  try {
    const stored = localStorage.getItem(key);
    return stored ? { ...fallback, ...JSON.parse(stored) } : { ...fallback };
  } catch {
    return { ...fallback };
  }
}

export function Timetable() {
  const [blockSubjects, setBlockSubjects] = useState(() =>
    loadStoredObject("timetableSubjects", BLOCK_SUBJECTS)
  );
  const [blockClasses, setBlockClasses] = useState(() => {
    const storedClasses = loadStoredObject("timetableClasses", BLOCK_CLASSES);

    return Object.fromEntries(
      Object.entries(storedClasses).map(([block, classrooms]) => [
        block,
        Array.isArray(classrooms)
          ? classrooms
          : String(classrooms || "")
              .split(",")
              .map((classroom) => classroom.trim())
              .filter(Boolean),
      ])
    );
  });
  const [blockColors, setBlockColors] = useState(() =>
    loadStoredObject("timetableColors", BLOCK_COLORS)
  );
  const [settings, setSettings] = useState(() =>
    loadStoredObject("timetableSettings", THEME_DEFAULTS)
  );

  useEffect(() => {
    changeColours(settings);
  }, [settings]);

  function saveEditChoices({ subjects, colors, classes }) {
    setBlockSubjects(subjects);
    setBlockColors(colors);
    setBlockClasses(classes);
    localStorage.setItem("timetableSubjects", JSON.stringify(subjects));
    localStorage.setItem("timetableColors", JSON.stringify(colors));
    localStorage.setItem("timetableClasses", JSON.stringify(classes));
  }

  function saveThemeChoices(theme) {
    setSettings(theme);
    localStorage.setItem("timetableSettings", JSON.stringify(theme));
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

                const blockDetails = checkBlock(cellId, blockSubjects, blockClasses);

                return (
                  <td id={cellId} key={day} style={block ? { backgroundColor: blockColors[block] } : undefined}>
                    <span className="blockSubject">{blockDetails.subject}</span>
                    {blockDetails.classroom && (
                      <span className="blockClassroom">{blockDetails.classroom}</span>
                    )}
                  </td>
                );
              })}

            </tr>
          ))}

        </tbody>
      </table>
    </div>
    {/* !SECTION */}

    <EditOverlay subjects={blockSubjects} colors={blockColors} classes={blockClasses} onSave={saveEditChoices}/>
    <SettingsOverlay settings={settings} onSave={saveThemeChoices}/>

    </>
  );
}