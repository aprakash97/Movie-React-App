const Result = (props) => {
  return (
    <div className="grid-item">
      <div>
        <h1>{props.title}</h1>
        <img src={props.poster_path} alt="" />
      </div>
    </div>
  );
};

export default Result;
