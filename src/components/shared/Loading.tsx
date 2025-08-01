"use client";

import Lottie from "lottie-react";
import loading from "../../../public/loading.json";

const Loading = () => {
  return (
    <div className="flex h-screen w-screen items-center justify-center">
      <div className="h-40 w-40">
        <Lottie animationData={loading} />
      </div>
    </div>
  );
};

export default Loading;
