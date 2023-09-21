type TGreet = {
  name?: string;
}

const Greet = ({ name }: TGreet) => {
  return (
    <>
      <h1>Hello  {name}</h1>
    </>
  )
}

export default Greet;
