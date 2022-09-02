import { FC, useState } from "react";
import { LoginPayload } from "../../../types";

type Props = {
  onSubmit: (formData: LoginPayload) => void;
};

const initialData = { email: "", pass: "" };

const Form: FC<Props> = ({ onSubmit }) => {
  const [formData, setFormData] = useState(initialData);

  return (
    <form
      action="submit"
      onSubmit={(e) => {
        e.preventDefault();
        onSubmit(formData);
      }}
    >
      <div className="input-group">
        <label htmlFor="email"> Email</label>
        <input
          type="email"
          name="email"
          id="email"
          value={formData.email}
          onChange={(e) =>
            setFormData((prevState) => ({
              ...prevState,
              email: e.target.value,
            }))
          }
        />
      </div>
      <div className="input-group">
        <label htmlFor="password"> Password</label>
        <input
          type="password"
          name="password"
          id="password"
          value={formData.pass}
          onChange={(e) =>
            setFormData((prevState) => ({ ...prevState, pass: e.target.value }))
          }
        />
      </div>
      <button type="submit"> Log in </button>
    </form>
  );
};

export { Form as LoginForm };
