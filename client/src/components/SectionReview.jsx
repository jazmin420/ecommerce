import { Card, CardBody, IconButton, Rating, Typography } from "@material-tailwind/react";
import React, { useRef } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const reviews = [
  {
    id: 1,
    text: "This product is amazing! Highly recommend it.",
    customer: "John Doe",
    rating: 5
  },
  {
    id: 2,
    text: "Great service and quality. Will buy again.",
    customer: "Jane Smith",
    rating: 4
  },
  {
    id: 3,
    text: "Fantastic experience. Five stars!",
    customer: "Emily Johnson",
    rating: 3
  },
  {
    id: 4,
    text: "Fantastic experience. Five stars!",
    customer: "Emily Johnson",
    rating: 4
  },
  { id: 5, text: "Fantastic experience. Five stars!", customer: "Chris Evans",
    rating: 5
   },
  { id: 6, text: "Fantastic experience. Five stars!", customer: "Alex",
    rating: 5
   },
  { id: 7, text: "Fantastic experience. Five stars!", customer: "Mike Ross",
    rating: 3
   },
  {
    id: 8,
    text: "Fantastic experience. Five stars!",
    customer: "Sarah Connor",
    rating: 3
  },
  {
    id: 9,
    text: "Fantastic experience. Five stars!",
    customer: "Alice Johnson",
    rating: 5
  },
];

function SectionReview() {

  let sliderRef = useRef(null);
  const next = () => {
    sliderRef.slickNext();
  };
  const previous = () => {
    sliderRef.slickPrev();
  };

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear",
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
        }
      }
    ]
  }

  return (
    <>
      <section id="review">
        <div className="m-12">
          <div className="flex justify-between items-center">
            <h1 className="text-center text-4xl font-bold my-6">
              OUR HAPPY CUSTOMERS
            </h1>
            <div>
            <IconButton variant="outlined" className="mr-3" onClick={previous}>
              <FaArrowLeft className="w-6 h-6 text-gray-700" />
            </IconButton>
            <IconButton variant="outlined" onClick={next}>
              <FaArrowRight className="w-6 h-6 text-gray-700" />
            </IconButton>
          </div>
          </div>

          <div className="mb-20">
          <Slider
        ref={slider => {
          sliderRef = slider;
        }}
        {...settings}
      >
            {reviews.map((review, index) => (     
                  <Card
                    key={review.id}
                    className="card border-2 w-[350px] h-[300px] p-1 text-center shadow-lg bg-white rounded-3xl"
                  >
                    <CardBody>
                      <Rating value={review.rating} readonly />
                      <Typography variant="h5" color="blue-gray" className="mb-2">
                        {review.customer}
                      </Typography>
                      <Typography className="text-ellipsis overflow-hidden line-clamp-4">
                        {review.text}
                      </Typography>
                    </CardBody>
                  </Card>
              ))}
          </Slider>
          </div>
        </div>
      </section>
    </>
  );
}

export default SectionReview;
