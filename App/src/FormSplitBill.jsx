export default function FormSplitBill() {
  return (
    <form className="form-split-bill">
      <h2>Split bill with X</h2>

      <label>1Bill value</label>
      <input type="text" />

      <label>2Your expense</label>
      <input type="text" />

      <label>3X's expense</label>
      <input type="text" disabled />

      <label>4How is paying the bill</label>
      <select>
        <option value="user">You</option>
        <option value="friend">X</option>
      </select>
    </form>
  );
}
