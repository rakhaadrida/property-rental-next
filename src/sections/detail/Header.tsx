import Breadcrumb from "@/components/breadcrumb/Breadcrumb";
import Image from "next/image";
import { Fade } from "react-awesome-reveal";

interface GalleryProps {
  name: string;
  city: string;
  country: string;
  images: string[];
}

const Header = ({ name, city, country, images }: GalleryProps) => {
  const [main, secondTop, secondBottom] = images;

  return (
    <section className="container detail-header">
      <div className="detail-header-top">
        <Breadcrumb
          items={[{ label: "Home", to: "/" }, { label: "House Details" }]}
        />
        <div className="detail-header-title-block">
          <h1 className="detail-header-title">{name}</h1>
          <p className="detail-header-location">
            {city}, {country}
          </p>
        </div>
        <span className="detail-header-spacer" aria-hidden="true" />
      </div>

      <Fade direction="up" triggerOnce>
        <div className="detail-header-gallery row">
          <figure className="detail-header-main-image col-lg-7 col-md-12">
            <Image
              src={main}
              alt={`${name} exterior`}
              className="img-cover detail-header-main-image-hero"
              width={643}
              height={500}
            />
          </figure>
          <div className="detail-header-side-images col-lg-5 col-md-12">
            <figure className="detail-header-side-image">
              <Image
                src={secondTop}
                alt={`${name} living room`}
                className="img-cover"
                width={487}
                height={245}
              />
            </figure>
            <figure className="detail-header-side-image">
              <Image
                src={secondBottom}
                alt={`${name} bedroom`}
                className="img-cover"
                width={487}
                height={245}
              />
            </figure>
          </div>
        </div>
      </Fade>
    </section>
  );
};

export default Header;
