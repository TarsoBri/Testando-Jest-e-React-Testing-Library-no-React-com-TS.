import { useState } from "react";
import Button from "../Button/Button";

const Test = () => {
  const [disabled, setDisabled] = useState<boolean>(false);
  return (
    <div>
      <h1>Testando com Jest</h1>

      <h2>{disabled ? "Habilitado" : "Desabilitado"}</h2>

      <Button disabled={disabled} onClick={() => setDisabled((prev) => !prev)}>
        Clique Aqui!
      </Button>
    </div>
  );
};

export default Test;
