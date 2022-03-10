import {
  Img1,
  Img10,
  Img11,
  Img12,
  Img2,
  Img3,
  Img4,
  Img5,
  Img6,
  Img7,
  Img8,
  Img9,
} from "assets/source/image";
import { Image } from "components/atoms";
import React from "react";

const index = () => {
  const lists = [
    {
      image: Img1,
      title: "BROWN BEAST",
      subtitle: "CARS PHOTO",
      to: "#",
    },
    {
      image: Img2,
      title: "BROWN BEAST",
      subtitle: "CARS PHOTO",
      to: "#",
    },
    {
      image: Img3,
      title: "BROWN BEAST",
      subtitle: "CARS PHOTO",
      to: "#",
    },
    {
      image: Img4,
      title: "BROWN BEAST",
      subtitle: "CARS PHOTO",
      to: "#",
    },
    {
      image: Img5,
      title: "BROWN BEAST",
      subtitle: "CARS PHOTO",
      to: "#",
    },
    {
      image: Img6,
      title: "BROWN BEAST",
      subtitle: "CARS PHOTO",
      to: "#",
    },
    {
      image: Img7,
      title: "BROWN BEAST",
      subtitle: "CARS PHOTO",
      to: "#",
    },
    {
      image: Img8,
      title: "BROWN BEAST",
      subtitle: "CARS PHOTO",
      to: "#",
    },
    {
      image: Img9,
      title: "BROWN BEAST",
      subtitle: "CARS PHOTO",
      to: "#",
    },
    {
      image: Img10,
      title: "BROWN BEAST",
      subtitle: "CARS PHOTO",
      to: "#",
    },
    {
      image: Img11,
      title: "BROWN BEAST",
      subtitle: "CARS PHOTO",
      to: "#",
    },
    {
      image: Img12,
      title: "BROWN BEAST",
      subtitle: "CARS PHOTO",
      to: "#",
    },
  ];

  return (
    <section>
      <div className="container-fluid">
        <div className="row">
          {lists ? (
            lists.map((list, index) => {
              return (
                <div className="col-6 col-lg-3 p-0" key={`image-${index}`}>
                  <Image
                    image={list.image}
                    alt={`image-${index}`}
                    title={list.title}
                    subtitle={list.title}
                    href={list.to}
                    isCenter
                    isHover
                  />
                </div>
              );
            })
          ) : (
            <h2 className="text-center">No List in this section</h2>
          )}
        </div>
      </div>
    </section>
  );
};

export default index;
