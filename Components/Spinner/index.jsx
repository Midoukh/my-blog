import RingLoader from "react-spinners/RingLoader";

const Spinner = ({}) => {
  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        justifyContent: "center",
        paddingTop: "2rem",
      }}
    >
      <RingLoader size={50} color="yellow" />
    </div>
  );
};

export default Spinner;
