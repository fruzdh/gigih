import { useState } from "react";

const sendFormNetworkCall = (data) => {
  console.log(data);
};

const FormExample = () => {
  const [form, setForm] = useState({
    myText1: "",
    myText2: "",
    myText3: "",
    myText4: "",
  });

  const handleForm = (e) => {
    e.preventDefault();
    sendFormNetworkCall(form);
  };

  const handleMyText = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  return (
    <div>
      <form onSubmit={handleForm}>
        <label htmlFor="myText1">Text1</label>
        <input
          id="myText1"
          name="myText1"
          type="text"
          value={form.myText1}
          onChange={handleMyText}
          required
        />
        <label htmlFor="myText2">Text2</label>
        <input
          id="myText2"
          name="myText2"
          type="text"
          value={form.myText2}
          onChange={handleMyText}
          required
        />
        <label htmlFor="myText3">Text3</label>
        <input
          id="myText3"
          name="myText3"
          type="text"
          value={form.myText3}
          onChange={handleMyText}
          required
        />
        <label htmlFor="myText4">Text4</label>
        <input
          id="myText4"
          name="myText4"
          type="text"
          value={form.myText4}
          onChange={handleMyText}
          required
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default FormExample;
