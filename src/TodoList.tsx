import React from "react";

import {useForm} from "react-hook-form";


interface IForm {
  email: String;
  firstName?: String;
  lastName: String;
  password: String;
  password1: String;
  extraError?: String;
}

function TodoList() {
  const {
    register,
    handleSubmit,
    formState: {errors},
    setError
  } = useForm<IForm>({
    defaultValues: {
      email: "@naver.com"
    }
  });
  const onValid = (data: IForm) => {
    if (data.password !== data.password1) {
      setError(
        "password1",
        {message: "패스워드가 같지 않습니다."},
        {shouldFocus: true}
      );
    }
  }
  return (
    <div>
      <form
        style={{display: "flex", flexDirection: "column"}}
        onSubmit={handleSubmit(onValid)}
      >
        <input
          {...register("email", {
            required: true,
            pattern: {
              value: /^[A-Za-z0-9._%+-]+@naver.com$/,
              message: "naver 메일만 사용가능합니다.",
            },
          })}
          placeholder="Email"/>
        <span style={{color: "red"}}>{errors?.email?.message}</span>
        <input
          {...register("firstName", {})} placeholder="firstName"/>
        <input
          {...register("password", {
            required: "필수값입니다.",
          })}
          placeholder="passWord"/>
        <input
          {...register("password1", {
            required: "필수값입니다.",
          })}
          placeholder="passWord1"/>
        <button>Add</button>
        <span style={{color: "red"}}>{errors?.extraError?.message}</span>
      </form>
    </div>
  )

}

export default TodoList
