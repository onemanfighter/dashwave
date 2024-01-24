import { useState } from "react";

interface IInputTextProps {
  labelTitle: string;
  labelStyle?: string;
  type?: string;
  containerStyle?: string;
  defaultValue?: string;
  placeholder?: string;
  updateFormValue: (args: { updateType: string; value: string }) => void;
  updateType: string;
}

function InputText(props: IInputTextProps) {
  const [value, setValue] = useState(props.defaultValue);

  const updateInputValue = (val: any) => {
    setValue(val);
    props.updateFormValue({ updateType: props.updateType, value: val });
  };

  return (
    <div className={`form-control w-full ${props.containerStyle}`}>
      <label className="label">
        <span className={"label-text text-base-content " + props.labelStyle}>
          {props.labelTitle}
        </span>
      </label>
      <input
        type={props.type || "text"}
        value={value}
        placeholder={props.placeholder || ""}
        onChange={(e) => updateInputValue(e.target.value)}
        className="input  input-bordered w-full "
      />
    </div>
  );
}

export default InputText;
