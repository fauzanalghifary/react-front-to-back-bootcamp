import React from "react";
import {
  useParams,
  Navigate,
  useNavigate,
  Routes,
  Route,
} from "react-router-dom";

function Post() {
  const status = 200;
  const navigate = useNavigate();
  const params = useParams();
  const onClick = () => {
    console.log("Hello");
    navigate("/about");
  };

  if (status === 404) {
    return <Navigate to="/notfound" />;
  }

  return (
    <div>
      <h1>Post {params.id}</h1>
      <button onClick={onClick}>Click</button>
      <Routes>
        <Route path="/show" element={<h1>Hello World</h1>} />
      </Routes>
    </div>
  );
}

export default Post;
