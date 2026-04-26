"use client";

import Image from "next/image";
import Button from "../../components/button/Button";
import { getImageSrc } from "@/utils/GetImage";
import { Fade } from "react-awesome-reveal";
import { forwardRef } from "react";

interface MostPicked {
  _id: string;
  name: string;
  type?: string;
  imageUrl?: string;
  country?: string;
  city?: string;
  price?: number;
  unit?: string;
}

interface MostPickedProps {
  data: MostPicked[];
  ref?: React.RefObject<HTMLDivElement | null>;
}

const MostPicked = forwardRef<HTMLElement, MostPickedProps>((props, ref) => {
  return (
    <Fade direction="up">
      <section className="container" ref={ref}>
        <h4 className="mb-4">Most Picked</h4>
        <div className="container-grid">
          {props.data.map((item, index) => {
            return (
              <div key={`mostPicked-${index}`} className="item">
                <Fade
                  direction="up"
                  delay={250 * index}
                  triggerOnce
                  fraction={0.5}
                >
                  <div className="card card-featured">
                    <div className="tag">
                      ${item.price}
                      <span> per {item.unit}</span>
                    </div>
                    <figure className="img-wrapper">
                      <Image
                        src={getImageSrc(item.imageUrl)}
                        alt={item.name}
                        className="img-cover"
                        width={361}
                        height={index === 0 ? 460 : 215}
                      />
                    </figure>
                    <div className="meta-wrapper">
                      <Button
                        type="link"
                        className="stretched-link d-block text-white"
                        href={`/properties/${item._id}`}
                      >
                        <h5 className="font-weight-regular">{item.name}</h5>
                      </Button>
                      <span className="font-weight-light">
                        {item.city}, {item.country}
                      </span>
                    </div>
                  </div>
                </Fade>
              </div>
            );
          })}
        </div>
      </section>
    </Fade>
  );
});

export default MostPicked;
