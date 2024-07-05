import { useState } from "react";
import { MAX_LENGTH } from "../utils/constants/constants";

type FeedbackFormProps = {
  onAddToList: (text: string) => void;
};

export const FeedbackForm = ({ onAddToList }: FeedbackFormProps) => {
  const [text, setText] = useState("");
  const [isValidInput, setIsValidInput] = useState(false);
  const [isInvalidInput, setIsInvalidInput] = useState(false);
  const charCount = MAX_LENGTH - text.length;

  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    const newText = event.target.value;
    if (newText.length <= MAX_LENGTH) {
      setText(newText);
    }
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    //basic validation

    if (text.includes("#") && text.length >= 10) {
      setIsValidInput(true);
      setTimeout(() => setIsValidInput(false), 2000);
    } else {
      setIsInvalidInput(true);
      setTimeout(() => setIsInvalidInput(false), 2000);
      return;
    }
    onAddToList(text);
    setText("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className={`form 
        ${isValidInput ? "form--valid" : ""} 
        ${isInvalidInput ? "form--invalid" : ""}`}
    >
      <textarea
        value={text}
        onChange={handleChange}
        id="feedback-textarea"
        placeholder="Escreva aqui"
        spellCheck={false}
        maxLength={MAX_LENGTH}
      />
      <label htmlFor="feedback-textarea">
        <p> Tell us about your experience.</p>
        <p style={{ backgroundColor: "blue" }}>
          {" "}
          Don't forget to add # to the place you're refering to.
        </p>
      </label>
      <div>
        <p className="u-italic">{charCount}</p>
        <button type="submit">
          <span>Enviar</span>
        </button>
      </div>
    </form>
  );
};
