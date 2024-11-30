import './App.css'
import Card from './components/card'

function App() {
  return (
    <div className="card-wrapper">
      <Card img={'https://as2.ftcdn.net/v2/jpg/04/15/31/79/1000_F_415317980_or3t3loJGxdXQrSvybkF995wx6YIrHVV.jpg'}>
        <div className="card-body">
          <h5 className="card-title">Card title</h5>
          <p className="card-text">{"Some quick example text to build on the card title and make up the bulk of the card's content."}</p>
          <a href="#" className="btn btn-primary">Go somewhere</a>
        </div>
      </Card>
      <Card>
        <div className="card-body">
          <h5 className="card-title">Another Card title</h5>
          <p className="card-text">{"Some quick example text to build on the card title and make up the bulk of the card's content."}</p>
          <a href="#" className="btn btn-primary">Go somewhere</a>
        </div>
      </Card>
    </div>
  )
}

export default App
