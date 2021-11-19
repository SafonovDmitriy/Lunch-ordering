import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { timeNow } from "../../helpers/timeNow";
const WatchBox = styled.h2`
  margin: 0;
  font-weight: 500;
`;
const Watch = () => {
  const [time, setTime] = useState(timeNow());
  const watchRef = useRef();

  useEffect(() => {
    watchRef.current = setInterval(() => setTime(timeNow()), 1000);
    return () => {
      clearInterval(watchRef.current);
    };
  }, []);

  return <WatchBox children={<>Time: {time}</>} />;
};

export default Watch;
