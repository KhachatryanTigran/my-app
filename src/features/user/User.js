import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeUserName, selectUserName } from "./userSlice";

const User = () => {
  const userName = useSelector(selectUserName);
  //   console.log(userName);
  const dispatch = useDispatch();
  return (
    <div>
      <h1>{userName}</h1>
      <input
        type="text"
        value={userName}
        onChange={(e) => dispatch(changeUserName({ userName: e.target.value }))}
      />
    </div>
  );
};

export default User;
