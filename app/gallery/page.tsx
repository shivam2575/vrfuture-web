import Gallery from "../components/gallery/Gallery";
import { GALLERYSECTION } from "../constants";

export const metadata = {
  title: "Gallery",
  description:
    "See VR-powered learning in action at VRFuture Coaching Institute, Daman — students exploring concepts through immersive virtual reality.",
};

const GalleryPage = () => {
  return <Gallery sections={GALLERYSECTION} />;
};

export default GalleryPage;
