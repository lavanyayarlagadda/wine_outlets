import React from "react";
import { Newsletter, ProfileTabs } from "../../molecules";
import UseProfile from "./UseProfile.hook";

const Profile = () => {
  const id = localStorage.getItem("userId");
  const { profile, loading, error } = UseProfile(id || "");

  if (loading) return <p>Loading profile...</p>;
  if (error) return <p>{error}</p>;
  return (
    <>
      {profile && <ProfileTabs profileData={profile} />}
      <Newsletter />
    </>
  );
};

export default Profile;
