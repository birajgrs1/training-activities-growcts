import React from "react";

const Title = () => {
  console.log("Rendering title...");
  return (
    <>
      <h2>useCallback hook</h2>
    </>
  );
};

export default React.memo(Title);
