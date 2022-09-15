
import "./count.css"

const Country = (res) => {
  return (
    <div className='country'>
        <p className="title">{res.area.Name}</p>
        <p className="capital">{res.area.Capital}</p>
    </div>
  )
};

export default Country;