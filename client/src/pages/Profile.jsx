import React from "react";
import { useSelector } from "react-redux";
const Profile = () => {
  const { currentUser } = useSelector((state) => state.user);
  return (
    <div className="max-w-lg p-3 mx-auto">
      <h1 className="text-3xl font-semibold text-center my-7">Profile</h1>
      <form className="flex flex-col gap-4">
        <img
          src={currentUser.avatar}
          className="rounded-full object-fill w-24 h-24 self-center mt-2 cursor-pointer"
        />
        <input
          placeholder="username"
          type="text"
          className="border p-3 rounded-lg"
          id="username"
        />
        <input
          placeholder="email"
          type="email"
          className="border p-3 rounded-lg"
          id="email"
        />
        <input
          placeholder="password"
          type="password"
          className="border p-3 rounded-lg"
          id="password"
        />
        <button className="bg-slate-700 text-white p-3 rounded-lg uppercase hover:opacity-95 disabled:opacity-80">
          Update
        </button>
      </form>
      <div className="flex justify-between mt-5">
        <span className="text-red-700 cursor-pointer">Delete Account</span>
        <span className="text-red-700 cursor-pointer">Sign Out</span>
      </div>
    </div>
  );
};

export default Profile;
