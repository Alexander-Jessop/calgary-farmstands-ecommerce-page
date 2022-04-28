import React, { useState } from "react";

const DescriptionForm = () => {
  const [text, setText] = useState("");

  return (
    <div>
      <form>
        <label htmlFor="description">Description:</label><br />
        <textarea
          id="description"
          rows="4"
          cols="40"
          placeholder="What do you want people to know about your locally grown food"
          onChange={(e) => setText(e.target.value)}
          value={text}
        /><br />
        <button type="button">Update</button>
      </form>
    </div>
  );
};

export default DescriptionForm;
