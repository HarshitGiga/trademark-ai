import { UserCard } from "./UserTestimonial";

const Testimonials = [
  {
    name: "Shayan Khurram",
    title: "Senior Associate",
    company: "Pornhub",
    photo: "/images/man1.jpg",
    text: "This platform has been a game-changer. The AI finds infringements I would have missed, allowing me to focus on strategic client defense.",
  },
  {
    name: "Osho Mittal",
    title: "Senior Advocate",
    company: "Supreme Court of India",
    photo: "/images/man2.jpg",
    text: "Automated reports save us countless hours. We can now inform clients faster and ensure their trademarks are well-protected.",
  },
  {
    name: "Veritas Law Group",
    photo: "/images/firm1.jpg",
    text: "We've seen a significant increase in efficiency since adopting this platform. It's a powerful tool for safeguarding our clients' brands.",
  },
  {
    name: "Sterling Shield IP",
    photo: "/images/firm2.jpg",
    text: "The customizable alerts are fantastic. We can proactively address potential threats and give our clients peace of mind.",
  },
];
export const TestimonialSection = () => {
  return (
    <div className="bg-white p-4 m-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-center">
        <div className="max-w-2xl mx-auto lg:mx-0 flex flex-col justify-center items-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Testimonials
          </h2>
          <p className="mt-4 text-lg leading-6 text-gray-500 text-center">
            Don't just take our word for it. See how our platform is helping
            individuals and IP firms like yours achieve greater efficiency and
            brand protection:
          </p>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
        {Testimonials.map((testimonial, index) => (
          <UserCard
            key={index}
            name={testimonial.name}
            role={testimonial.title}
            photo={testimonial.photo}
            company={testimonial.company}
            text={testimonial.text}
          />
        ))}
      </div>
    </div>
  );
};
