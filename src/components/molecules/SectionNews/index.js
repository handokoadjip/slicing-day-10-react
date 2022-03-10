import { Img1, Img2, Img3, Img4 } from "assets/source/image";
import { Button, Image } from "components/atoms";
import React from "react";

const index = () => {
  const lists = [
    {
      image: Img1,
      title: "DROP IN AXLE ROLL-IN SLIDE NOSEBLUNT SLIDE STEVE SEVERIN.",
      subtitle: "POSTED ON JANUARY 2022",
      href: "#",
    },
    {
      image: Img2,
      title: "DROP IN AXLE ROLL-IN SLIDE NOSEBLUNT SLIDE STEVE SEVERIN.",
      subtitle: "POSTED ON JANUARY 2022",
      href: "#",
    },
    {
      image: Img3,
      title: "DROP IN AXLE ROLL-IN SLIDE NOSEBLUNT SLIDE STEVE SEVERIN.",
      subtitle: "POSTED ON JANUARY 2022",
      href: "#",
    },
    {
      image: Img4,
      title: "DROP IN AXLE ROLL-IN SLIDE NOSEBLUNT SLIDE STEVE SEVERIN.",
      subtitle: "POSTED ON JANUARY 2022",
      href: "#",
    },
  ];

  return (
    <section>
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-3">
            <div className="wrapper text-black p-5 text-uppercase d-flex flex-column justify-content-between h-100">
              <h2 className="display-4 fw-bold">latest news</h2>
              <Button href="#" isBlack>
                more
              </Button>
            </div>
          </div>
          <div className="col-lg-9">
            <div className="row">
              {lists ? (
                lists.map((list, index) => {
                  return (
                    <div className="col-lg-6 p-0" key={`image-${index}`}>
                      <Image
                        image={list.image}
                        alt={`Image ${index}`}
                        title={list.title}
                        subtitle={list.title}
                        href={list.href}
                        isPadding5
                      />
                    </div>
                  );
                })
              ) : (
                <h2 className="text-center">No List in this section</h2>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default index;
