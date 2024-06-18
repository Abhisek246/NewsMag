import img from "../assets/news.jpg";

const NewsItem=({title, description, src, url})=>{
    return (
        <div className="card bg-dark text-light mb-3 d-inline-block my-3 mx-3 px-2 py-2" style={{maxWidth: "345px"}}>
            <img src={src ? src : img} style={{height:"200px", width: "325px"}}className="card-img-top" alt="..."/>
            <div className="card-body">
                <h5 className="card-title">{title ? title.slice(0,50) : null}</h5>
                <p className="card-text">{description ? description.slice(0,90) : "News of the current event is not available. It will be available soon"}</p>
                <a href={url} className="btn btn-primary">Read More</a>
            </div>
      </div>
    );
};

export default NewsItem;