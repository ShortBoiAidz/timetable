//& =============
//* Modules
import { SaveButton } from "./saveButton.jsx";
import { saveBlockSubjects } from "../scripts/checkChange.js";

export function EditOverlay({ subjects, colors, classes, onSave }) {
  const classroomValue = (block) => {
    const classrooms = classes[block];
    return Array.isArray(classrooms) ? classrooms.join(", ") : (classrooms || "");
  };

  return(
    <>
    {/* SECTION - Edit overlay */}
      <div id="editOverlay" className="editOverlay">

        <h1 className="text-4xl top-0 absolute">Edit Timetable</h1>

        <div className="editBlockContainer bg-linear-145 from-purple-300 to-blue-400 rounded-2xl p-8">
          <div className="editBlockInput">
            <label htmlFor="block1_colourPicker">Block 1</label>
            <input type="color" name="block1_colourPicker" id="block1_colourPicker" defaultValue={colors["BLOCK-1"]} className="rounded-full w-8 h-8"/>
            <input defaultValue={subjects["BLOCK-1"]} placeholder="Enter subject..." type="text" name="block1_textInput" id="block1_textInput" className="bg-red-50 rounded-3xl"/>
            <input defaultValue={classroomValue("BLOCK-1")} placeholder="Enter classroom..." type="text" name="block1_classInput" id="block1_classInput" className="bg-red-50 rounded-3xl"/>
          </div>

          <div className="editBlockInput">
            <label htmlFor="block2_colourPicker">Block 2</label>
            <input type="color" name="block2_colourPicker" id="block2_colourPicker" defaultValue={colors["BLOCK-2"]} className="rounded-full w-8 h-8"/>
            <input defaultValue={subjects["BLOCK-2"]} placeholder="Enter subject..." type="text" name="block2_textInput" id="block2_textInput" className="bg-red-50 rounded-3xl"/>
            <input defaultValue={classroomValue("BLOCK-2")} placeholder="Enter classroom..." type="text" name="block2_classInput" id="block2_classInput" className="bg-red-50 rounded-3xl"/>
          </div>

          <div className="editBlockInput">
            <label htmlFor="block3_colourPicker">Block 3</label>
            <input type="color" name="block3_colourPicker" id="block3_colourPicker" defaultValue={colors["BLOCK-3"]} className="rounded-full w-8 h-8"/>
            <input defaultValue={subjects["BLOCK-3"]} placeholder="Enter subject..." type="text" name="block3_textInput" id="block3_textInput" className="bg-red-50 rounded-3xl"/>
            <input defaultValue={classroomValue("BLOCK-3")} placeholder="Enter classroom..." type="text" name="block3_classInput" id="block3_classInput" className="bg-red-50 rounded-3xl"/>
          </div>

          <div className="editBlockInput">
            <label htmlFor="block4_colourPicker">Block 4</label>
            <input type="color" name="block4_colourPicker" id="block4_colourPicker" defaultValue={colors["BLOCK-4"]} className="rounded-full w-8 h-8"/>
            <input defaultValue={subjects["BLOCK-4"]} placeholder="Enter subject..." type="text" name="block4_textInput" id="block4_textInput" className="bg-red-50 rounded-3xl"/>
            <input defaultValue={classroomValue("BLOCK-4")} placeholder="Enter classroom..." type="text" name="block4_classInput" id="block4_classInput" className="bg-red-50 rounded-3xl"/>
          </div>

          <div className="editBlockInput">
            <label htmlFor="block5_colourPicker">Block 5</label>
            <input type="color" name="block5_colourPicker" id="block5_colourPicker" defaultValue={colors["BLOCK-5"]} className="rounded-full w-8 h-8"/>
            <input defaultValue={subjects["BLOCK-5"]} placeholder="Enter subject..." type="text" name="block5_textInput" id="block5_textInput" className="bg-red-50 rounded-3xl"/>
            <input defaultValue={classroomValue("BLOCK-5")} placeholder="Enter classroom..." type="text" name="block5_classInput" id="block5_classInput" className="bg-red-50 rounded-3xl"/>
          </div>

          <div className="editBlockInput">
            <label htmlFor="block6_colourPicker">Block 6</label>
            <input type="color" name="block6_colourPicker" id="block6_colourPicker" defaultValue={colors["BLOCK-6"]} className="rounded-full w-8 h-8"/>
            <input defaultValue={subjects["BLOCK-6"]} placeholder="Enter subject..." type="text" name="block6_textInput" id="block6_textInput" className="bg-red-50 rounded-3xl"/>
            <input defaultValue={classroomValue("BLOCK-6")} placeholder="Enter classroom..." type="text" name="block6_classInput" id="block6_classInput" className="bg-red-50 rounded-3xl"/>
          </div>

          <div className="editBlockInput">
            <label htmlFor="block7_colourPicker">Block 7</label>
            <input type="color" name="block7_colourPicker" id="block7_colourPicker" defaultValue={colors["BLOCK-7"]} className="rounded-full w-8 h-8"/>
            <input defaultValue={subjects["BLOCK-7"]} placeholder="Enter subject..." type="text" name="block7_textInput" id="block7_textInput" className="bg-red-50 rounded-3xl"/>
            <input defaultValue={classroomValue("BLOCK-7")} placeholder="Enter classroom..." type="text" name="block7_classInput" id="block7_classInput" className="bg-red-50 rounded-3xl"/>
          </div>
        </div>

        <SaveButton onSave={() => saveBlockSubjects(onSave)}/>

      </div>
    {/* !SECTION */}
    </>
  );
}