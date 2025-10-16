import { useState } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      quote:
        "I invested in a villa plot near ECR through Sadhisha in 2021. The appreciation has been phenomenal—and the legal clarity gave me peace of mind.",
      author: "Arun Venkatesh",
      role: "NRI Investor, Dubai",
      rating: 5,
      date: "1 Month Ago",
    },
    {
      quote:
        "Sadhisha Homes delivered exactly what they promised. The location near Auroville is perfect for my retirement home. Highly recommended!",
      author: "Priya Sharma",
      role: "Retired Teacher, Chennai",
      rating: 5,
      date: "2 Months Ago",
    },
    {
      quote:
        "Professional service from start to finish. The team helped us through every step of the documentation process. Very satisfied with our beachfront plot.",
      author: "Rajesh Kumar",
      role: "Business Owner, Bangalore",
      rating: 5,
      date: "3 Months Ago",
    },
  ];

  const next = () =>
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  const prev = () =>
    setCurrentIndex(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
            What Our Clients Say
          </h2>
          <p className="text-xl text-gray-600">Real Stories. Real Trust.</p>
          <p className="mt-4 text-gray-700 max-w-3xl mx-auto">
            At Sadhisha, our clients aren’t just buyers — they’re part of a
            growing family built on trust, transparency, and timeless value.
            Here’s what some of them have to say:
          </p>
        </div>

        {/* Testimonial Card */}
        <div className="max-w-4xl mx-auto relative">
          <div className="bg-white rounded-2xl p-10 shadow-lg text-center">
            <p className="text-lg md:text-xl text-gray-700 italic mb-6">
              “{testimonials[currentIndex].quote}”
            </p>

            <div className="flex justify-center gap-1 mb-4">
              {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                <Star
                  key={i}
                  className="w-6 h-6 text-yellow-500 fill-yellow-500"
                />
              ))}
            </div>

            <p className="text-sm text-gray-500 mb-2">
              {testimonials[currentIndex].date}
            </p>
            <p className="text-xl font-bold text-gray-900">
              — {testimonials[currentIndex].author}
            </p>
            <p className="text-gray-600">{testimonials[currentIndex].role}</p>

            {/* Dots Navigation */}
            <div className="flex justify-center gap-2 mt-8">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all ${
                    index === currentIndex
                      ? "bg-yellow-500 scale-110"
                      : "bg-gray-300 hover:bg-gray-400"
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={prev}
            aria-label="Previous testimonial"
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-6 bg-white border border-gray-300 rounded-full p-3 shadow-md hover:bg-gray-100 transition"
          >
            <ChevronLeft className="w-6 h-6 text-gray-700" />
          </button>

          <button
            onClick={next}
            aria-label="Next testimonial"
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-6 bg-white border border-gray-300 rounded-full p-3 shadow-md hover:bg-gray-100 transition"
          >
            <ChevronRight className="w-6 h-6 text-gray-700" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
