import React from "react";

function HandelCount({ text, count }) {
  console.log(`Rendering ${text}`);
  return (
    <div>
      {text} - {count}
    </div>
  );
}

export default React.memo(HandelCount);
