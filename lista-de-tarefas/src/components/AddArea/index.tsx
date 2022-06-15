import { KeyboardEvent, useState } from "react";
import * as S from "./styles";

type Props = {
  onEnter: (taskName: string) => void;
};

const AddArea = ({ onEnter }: Props) => {
  const [inputText, setInputText] = useState("");

  const handleKeyUp = (e: KeyboardEvent) => {
    if (e.code === "Enter" && inputText !== "") {
      onEnter(inputText);
      setInputText("");
    }
  };

  return (
    <S.Container>
      <div className="image">+</div>
      <input
        type="text"
        placeholder="Adicione uma tarefa"
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
        onKeyUp={handleKeyUp}
      />
    </S.Container>
  );
};

export default AddArea;
