import React from 'react'


const Carousel = () => {
  return (
<div id="carouselExampleIndicators" className=" max-h-96 carousel slide relative" data-bs-ride="carousel">
  <div className="carousel-indicators absolute right-0 bottom-0 left-0 flex justify-center p-0 mb-4">
    <button
      type="button"
      data-bs-target="#carouselExampleIndicators"
      data-bs-slide-to="0"
      className="active"
      aria-current="true"
      aria-label="Slide 1"
    ></button>
    <button
      type="button"
      data-bs-target="#carouselExampleIndicators"
      data-bs-slide-to="1"
      aria-label="Slide 2"
    ></button>
    <button
      type="button"
      data-bs-target="#carouselExampleIndicators"
      data-bs-slide-to="2"
      aria-label="Slide 3"
    ></button>
  </div>
  <div className="carousel-inner relative w-full overflow-hidden">
    <div className="carousel-item active float-left w-full">
      <img
        src="https://islam.ru/sites/default/files/img/2017/obshestvo/6361154207434358392124375070_mosque.jpg"
        className="block max-h-96  w-full"
        alt="Wild Landscape"
      />
    </div>
    <div className="carousel-item float-left w-full">
      <img
        src="https://avatars.dzeninfra.ru/get-zen_doc/1654267/pub_5caf5671db481700b3e2c242_5caf57b44ef90600b4910569/scale_1200"
        className="block max-h-96  w-full"
        alt="Camera"
      />
    </div>
    <div className="carousel-item float-left w-full">
      <img
        src="https://wallup.net/wp-content/uploads/2017/11/17/227388-books-Islam-Quran.jpg"
        className="block max-h-96  w-full"
        alt="Exotic Fruits"
      />
    </div>
  </div>
  <button
    className="carousel-control-prev absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline left-0"
    type="button"
    data-bs-target="#carouselExampleIndicators"
    data-bs-slide="prev"
  >
    <span className="carousel-control-prev-icon inline-block bg-no-repeat" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button
    className="carousel-control-next absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline right-0"
    type="button"
    data-bs-target="#carouselExampleIndicators"
    data-bs-slide="next"
  >
    <span className="carousel-control-next-icon inline-block bg-no-repeat" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
  )
}

export default Carousel
