import { useEffect } from "react";

const MountLogger = () => {
  useEffect(() => {
    console.log("MountLogger mounted");
    return () => {
      console.log("MountLogger unmounted");
    };
  }, []);

  return <div className="text-green-600  text-[32px]">MountLogger is active</div>;
};

export default MountLogger;
