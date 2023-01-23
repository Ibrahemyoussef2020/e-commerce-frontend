
const Slider = ({loading,id,img,title,desc}) => {
    
  return (
    <div className='MainSlider Slider row px-sm-4 mt-md-5 w-100'>
        <section className="col col-12 col-md-7">
          <h1 className="mt-3">{title}</h1>
          <p className="mt-3">{desc}</p>
          <button className="btn btn-danger mt-3">visit colloction</button>
        </section>

        <section className="col col-12 col-md-5 d-flex justify-content-end">
          <img src={img} className={id}/>
        </section>
    </div>
  )
}

export default Slider