import { TGreet } from "./Greet.types";

const Greet = ({ name }: TGreet) => {
  return (
    <>
      <h1>Hello {name ? name : "Guest"}</h1>
    </>
  );
};

export default Greet;
