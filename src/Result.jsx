const Result = (props) => {
  // const = d.split(' ')[0];
  return (
    <div>
      <div className="grid-item">
        <div className="content">
          <img src={props.poster_path} alt="" />
        </div>
      </div>
      <div className="details">
        <h3>{props.title}</h3>
        <h4>{props.first_air_date.split("-")[0]}</h4>
      </div>
    </div>
  );
};

export default Result;
