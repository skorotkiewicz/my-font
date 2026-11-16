import * as React from "react";
import { paintPicture } from "../../lib/picture.jsx";
function PictureCanvas({
  input: argument,
  paper: argument2,
  pixels: argument3,
  label: argument4,
  className: argument5
}) {
  let value = (0, React.useRef)(null);
  (0, React.useEffect)(() => {
    let value2 = value.current;
    let value3 = true;
    let value4 = () => paintPicture(value2, argument2 ? {
      ...argument,
      style: {
        ...argument.style,
        paper: argument2
      }
    } : argument);
    value4();
    if (document.fonts.status === `loading`) {
      document.fonts.ready.then(() => value3 && value4());
    }
    return () => {
      value3 = false;
    };
  }, [argument, argument2]);
  return <canvas ref={value} width={argument3} height={argument3} role={argument4 ? `img` : undefined} aria-label={argument4} aria-hidden={!argument4 || undefined} className={argument5} />;
}
export { PictureCanvas };
