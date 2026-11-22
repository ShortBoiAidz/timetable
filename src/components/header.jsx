//& =============
//* Modules
import { openSettings } from "../scripts/openOverlay.js";
import settingsIcon from "/public/settings.svg";

export function Header() {

  return(
    <>
      <button id="print" className="button headerButton left-0" onClick={() => {print()}}>Print</button>
      <button className="button headerButton right-0" onClick={() => {openSettings()}}>
        <img src={settingsIcon}/>
      </button>
    </>
  );
}