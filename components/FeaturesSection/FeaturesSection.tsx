import {
  FeatureCard1,
  FeatureCard2,
  FeatureCard3,
  FeatureCard4,
} from "./FeatureCard";

export const FeaturesSection = () => {
  return (
    <section
      className="m-8 bg-white flex flex-col md:flex-row gap-4 py-8 relative"
      id="features"
    >
      <div className="md:w-1/2">
        <div className="p-4 px-4 sm:px-6 lg:px-8 flex flex-col gap-4 sticky top-0">
          <h2 className="text-3xl font-bold">
            Discover the Power of Our Products
          </h2>
          <p>
            Empower your IP firm to fight trademark infringement with
            cutting-edge technology. Our innovative platform utilizes artificial
            intelligence to automate the detection and analysis of potential
            trademark violations, saving you time, money, and resources.
          </p>
          <p className="font-bold">
            Schedule a demo today and discover how our platform can
            revolutionize your approach to trademark protection.
          </p>
        </div>
      </div>
      <div className="flex flex-col gap-4 p-4 md:w-1/2">
        <FeatureCard1 />
        <FeatureCard2 />
        <FeatureCard3 />
        <FeatureCard4 />
      </div>
    </section>
  );
};
