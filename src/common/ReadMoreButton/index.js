import { useState } from "react";
import { Button } from "./styled";

const ReadMoreButton = ({ content }) => {
  const [show, setShow] = useState(false);

  return content.length > 400 ? (
    <>
      {show ? content : `${content.slice(0, 400)}...`}
      <Button onClick={() => setShow((show) => !show)}>
        {show ? "Read Less" : "Read More"}
      </Button>
    </>
  ) : (
    <>{content}</>
  );
};
export default ReadMoreButton;
