export function SaveButton({ onSave, id = "saveChanges" }) {
  return(
    <button className="button" type="button" id={id} onClick={onSave}>Save</button>
  );
}