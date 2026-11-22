//& =============
//* Modules
import { SaveButton } from "./saveButton.jsx";
import { saveSettings } from "../scripts/checkChange.js";

export function SettingsOverlay({ settings, onSave }) {
  return(
    <>

      <div id="settingsOverlay">

        <h1>Timetable theme</h1>

        <div className="themeGrid">
          <fieldset className="themeGroup">
            <legend>Background gradient</legend>
            <label htmlFor="backgroundStart">Center
              <input id="backgroundStart" type="color" defaultValue={settings.backgroundStart}/>
            </label>
            <label htmlFor="backgroundEnd">Edge
              <input id="backgroundEnd" type="color" defaultValue={settings.backgroundEnd}/>
            </label>
          </fieldset>

          <fieldset className="themeGroup">
            <legend>Button gradient</legend>
            <label htmlFor="buttonStart">Start
              <input id="buttonStart" type="color" defaultValue={settings.buttonStart}/>
            </label>
            <label htmlFor="buttonEnd">End
              <input id="buttonEnd" type="color" defaultValue={settings.buttonEnd}/>
            </label>
            <label htmlFor="buttonBorder">Button border
              <input id="buttonBorder" type="color" defaultValue={settings.buttonBorder}/>
            </label>
          </fieldset>

          <fieldset className="themeGroup">
            <legend>Overlay gradient</legend>
            <label htmlFor="overlayStart">Center
              <input id="overlayStart" type="color" defaultValue={settings.overlayStart}/>
            </label>
            <label htmlFor="overlayEnd">Edge
              <input id="overlayEnd" type="color" defaultValue={settings.overlayEnd}/>
            </label>
          </fieldset>

          <fieldset className="themeGroup">
            <legend>Timetable</legend>
            <label htmlFor="borderColor">Grid border
              <input id="borderColor" type="color" defaultValue={settings.borderColor}/>
            </label>
            <label htmlFor="headerColor">Header
              <input id="headerColor" type="color" defaultValue={settings.headerColor}/>
            </label>
          </fieldset>
        </div>

        <SaveButton id="saveSettings" onSave={() => saveSettings(onSave)}/>
      </div>
    </>

  );
}