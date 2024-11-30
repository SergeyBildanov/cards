export default function Card({img, children}){
    return img?(
        <div className="card">
            <img src={img} alt="card-image" className="card-image"/>
            {children}
        </div>
    ):(
        <div className="card">
            {children}
        </div>
    )
}