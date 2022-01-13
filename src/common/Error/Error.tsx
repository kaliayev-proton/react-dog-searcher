import { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import "./error.css";

export interface ErrorProps {
  data: any;
}

export const Error = ({ data }: ErrorProps) => {
  const [isShowed, setIsShowed] = useState<boolean>(!!data);
  const [mountpoint, setMountpoint] = useState<HTMLDivElement>();

  useEffect(() => {
    if (data) {
      setIsShowed(true);
      setTimeout(() => setIsShowed(false), 3000);
    }
  }, [data]);

  useEffect(() => {
    const mountpoint = document.createElement("div");
    document.body.appendChild(mountpoint);
    setMountpoint(mountpoint);
    return () => void document.body.removeChild(mountpoint);
  }, []);

  return isShowed && mountpoint
    ? ReactDOM.createPortal(
        <div className={`snackbar ${isShowed ? "snackbar-show" : ""}`}>
          Error
          {data.status}
        </div>,
        mountpoint
      )
    : null;
};
