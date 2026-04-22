"use client";

import Button from "../../components/button/Button";
import { numberFormat } from "../../utils/NumberFormat";
import Image from "next/image";

interface HeroProps {
  travelers: number;
  treasures: number;
  cities: number;
  refMostPicked?: React.RefObject<HTMLDivElement>;
}

const Hero = (props: HeroProps) => {
  function showMostPicked() {
    window.scrollTo({
      top: props.refMostPicked
        ? props.refMostPicked?.current?.offsetTop - 30
        : 0,
      behavior: "smooth",
    });
  }

  return (
    <section className="container">
      <div className="row align-items-center">
        <div className="col-auto pr-5 hero-title-section">
          <h1 className="font-weight-bold line-height-1 hero-title">
            Forget Busy Work, <br />
            Start Next Vacation
          </h1>
          <p className="font-weight-light text-gray-500 hero-subtitle">
            We provide what you need to enjoy your holiday with family. Time to
            make another memorable moments.
          </p>
          <Button
            className="btn px-5 hero-button"
            hasShadow
            isPrimary
            onClick={showMostPicked}
            href=""
          >
            Show Me Now
          </Button>

          <div className="row mt-5">
            <div className="col-auto hero-icon">
              <img
                src="/assets/icons/icon_travelers.svg"
                alt={`${props.travelers} Travelers`}
                width={36}
                height={36}
              />
              <h6 className="mt-3">
                {numberFormat(props.travelers)}{" "}
                <span className="text-gray-500 font-weight-light">
                  Travelers
                </span>
              </h6>
            </div>
            <div className="col-auto hero-icon">
              <img
                src="/assets/icons/icon_treasures.svg"
                alt={`${props.treasures} Treasures`}
                width={36}
                height={36}
              />
              <h6 className="mt-3">
                {numberFormat(props.treasures)}{" "}
                <span className="text-gray-500 font-weight-light">
                  Treasures
                </span>
              </h6>
            </div>
            <div className="col-auto">
              <img
                src="/assets/icons/icon_cities.svg"
                alt={`${props.cities} Cities`}
                width={36}
                height={36}
              />
              <h6 className="mt-3">
                {numberFormat(props.cities)}{" "}
                <span className="text-gray-500 font-weight-light">Cities</span>
              </h6>
            </div>
          </div>
        </div>

        <div className="col-6 pl-5">
          <div className="hero-image ms-2">
            <Image
              src="/assets/images/landing-page/hero.jpg"
              alt="Room with couches"
              className="img-fluid position-absolute main-image"
              fill
            />
            <Image
              src="/assets/images/landing-page/hero-frame.jpg"
              alt="Room with couches frame"
              className="img-fluid position-absolute main-frame"
              fill
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
