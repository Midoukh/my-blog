import React, { Fragment, useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";

export default function AddCommentForm() {
  const [isSending, setIsSending] = useState(false);
  const [error, setError] = useState(null);
  const { register, errors, handleSubmit, reset } = useForm();

  const onSubmit = async (data) => {
    setIsSending(true);

    try {
      const res = await axios.post("/api/addComment", data);
      console.log(res);
    } catch (err) {
      console.log(err);
      setError((prev) => err);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input
        type="text"
        placeholder="Name (Optional)"
        name="name"
        {...register({ required: false, maxLength: 80 })}
      />
      <input
        type="text"
        placeholder="Email (Optional)"
        {...register("email", { required: false, pattern: /^\S+@\S+$/i })}
      />
      {errors.email && <span>Invalid email</span>}
      <textarea
        placeholder="Your Comment"
        rows="5"
        {...register("comment", { required: true, maxLength: 5000 })}
      />
      {errors.comment && <span>You need to write something</span>}
      <input
        type="submit"
        disabled={isSending}
        value={isSending ? "Sending Comment..." : "Send Comment"}
      />
    </form>
  );
}
