function Felix2(props) {
  return (
    <>
      <div className="container bg-danger">
        <div className="card border border-2 border-dark">
          <img
            src={props.img1}
            className="card-img-top text-center m-auto mt-3 "
            style={{ height: "250px", width: "250px" }}
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title text-center">{props.title}</h5>
            <p className="card-text">{props.text}</p>
          </div>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">{props.item1}</li>
            <li className="list-group-item">{props.item2}</li>
            <li className="list-group-item">{props.item3}</li>
          </ul>
          <div className="card-body">
            <a href="#" className="card-link text-center">
              {props.link1}
            </a>
            <a href="#" className="card-link">
              {props.link2}
            </a>
          </div>
        </div>

        {/* <div className="card mt-3 border border-2 border-dark ">
          <img
            src={props.img1}
            className="card-img-top m-auto mt-3  "
            style={{ height: "250px", width: "250px", textAlign: "center" }}
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title text-center">{props.title}</h5>
            <p className="card-text">{props.text}</p>
          </div>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">{props.item1}</li>
            <li className="list-group-item">{props.item2}</li>
            <li className="list-group-item">{props.item3}</li>
          </ul>
          <div className="card-body">
            <a href="#" className="card-link text-center">
              {props.link1}
            </a>
            <a href="#" className="card-link">
              {props.link2}
            </a>
          </div>
        </div> */}
      </div>
    </>
  );
}

export default Felix2;
