const Result = (props) => {
  // const = d.split(' ')[0];
  const IMAGE = "https://image.tmdb.org/t/p/w300";
  const default_img =
    "http://argauto.lv/application/modules/themes/views/default/assets/images/image-placeholder.png";

  let image_path = default_img;
  if (props.poster_path !== null) {
    image_path = IMAGE + props.poster_path;
  }
  return (
    <div>
      <div className="grid-item">
        <div className="content">
          <img src={image_path} alt="" />
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
//dsasad
