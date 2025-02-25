import React, { useEffect, useState } from "react";
import axios from "axios";

const Profile = () => {
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    axios.get("http://localhost:5000/api/user/profile", { withCredentials: true })
      .then(response => setProfile(response.data))
      .catch(error => console.error("Error fetching profile:", error));
  }, []);

  return (
    <div>
      <h1>Instagram Profile</h1>
      {profile && (
        <div>
          <img src={profile.profile_picture_url} alt="Profile" width="100" />
          <p><strong>Username:</strong> {profile.username}</p>
          <p><strong>Account Type:</strong> {profile.account_type}</p>
        </div>
      )}
    </div>
  );
};

export default Profile;
