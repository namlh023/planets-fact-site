import React from "react";

export default function useHeight() {
  const ref = React.useRef(null);
  const [height, setHeight] = React.useState(0);

  React.useEffect(() => {
    setHeight(ref?.current?.clientHeight);
  }, [ref?.current?.clientHeight]);

  return [ref, height];
}
