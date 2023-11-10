import Button from "./Button";

export default function FormAddFriend() {
  return (
    <form className="form-add-friend">
      <label>1Friend name</label>
      <input type="text" />

      <label>2Image URL</label>
      <input type="text" />

      <Button>Submit</Button>
    </form>
  );
}
