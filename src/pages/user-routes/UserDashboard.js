import React from "react";
import CustomNavbar from "../../components/CustomNavbar";
import AddPost from "../../components/AddPost";

function UserDashboard() {
  // const [user, setUser] = useState(null);

  return (
    <>
      <CustomNavbar />
      <AddPost />
    </>
  );
}

export default UserDashboard;
