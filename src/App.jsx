import React from "react";
import { useSelector } from "react-redux";
import { useForm } from "react-hook-form";

const App = () => {
  const { register, handleSubmit } = useForm();
  const state = useSelector((state) => state);

  const { virginitate } = state;

  const answ = virginitate[0].answers.map((el) => (
    <div>
      <input type="radio" {...register("first")} value={el} />
      <label>{el}</label>
    </div>
  ));

  const onSubmit = (data) => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <p>{virginitate[0].question}</p>
      {answ}
      <button type="submit">Submit</button>
    </form>
  );
};

export default App;
