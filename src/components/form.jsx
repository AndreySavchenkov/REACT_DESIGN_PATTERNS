import { useId, useState } from "react";

export const Form = () => {
  const [email, setEmail] = useState("");

  const id = useId();

  return (
    <div>
      <label htmlFor={`${id}-email`}>Email</label>
      <input
        type="email"
        id={`${id}-email`}
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <label htmlFor={`${id}-name`}>Name</label>
      <input type="text" id={`${id}-name`} />
    </div>
  );
};
