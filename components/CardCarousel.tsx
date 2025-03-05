// "use client";

// import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
// import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
// import { Button } from "@/components/ui/button";

// export default function CardCarousel() {
//   return (
//     <div className="w-full max-w-2xl mx-auto">
//       <Carousel>
//         <CarouselContent>
//           {[...Array(5)].map((_, index) => (
//             <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
//               <Card className="shadow-md">
//                 <CardHeader>
//                   <CardTitle>Card {index + 1}</CardTitle>
//                 </CardHeader>
//                 <CardContent>
//                   <p>This is a carousel card.</p>
//                   <Button className="mt-2">Learn More</Button>
//                 </CardContent>
//               </Card>
//             </CarouselItem>
//           ))}
//         </CarouselContent>
//         <CarouselPrevious />
//         <CarouselNext />
//       </Carousel>
//     </div>
//   );
// }



// "use client";

// import { useState, useEffect } from "react";
// import { motion } from "framer-motion";
// import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";

// const text = [
//   "testimony",
//   "testimony",
//   "testimony",
 
// ];

// export default function AutoCarousel() {
//   const [currentIndex, setCurrentIndex] = useState(0);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentIndex((prev) => (prev + 1) % text.length);
//     }, 3000); // Moves every 3 seconds

//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <Carousel>
//       <CarouselContent
//         style={{
//           transform: `translateX(-${currentIndex * 100}%)`,
//           transition: "transform 0.5s ease-in-out",
//         }}
//       >
//         {text.map((src, index) => (
//           <CarouselItem key={index} className="w-full h-64">
//             <motion.img
//               src={src}
//               alt={`Slide ${index + 1}`}
//               className="w-full h-full object-cover rounded-lg"
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               transition={{ duration: 0.5 }}
//             />
//           </CarouselItem>
//         ))}
//       </CarouselContent>
//     </Carousel>
//   );
// }

"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";

// Sample testimonial data
const testimonials = [
  {
    quote: "This product changed my life! Highly recommend to anyone looking to improve their health.",
    author: "John Doe",
    position: "CEO, Example Corp.",
    avatar: "/john-doe.jpg", // Optional: path to an avatar image
  },
  {
    quote: "Amazing service and great results. Would definitely buy again!",
    author: "Jane Smith",
    position: "Marketing Manager, Company XYZ",
    avatar: "/jane-smith.jpg",
  },
  {
    quote: "I saw immediate improvements. Very satisfied with the purchase.",
    author: "Mark Johnson",
    position: "Product Designer, Tech Solutions",
    avatar: "/mark-johnson.jpg",
  },
  {
    quote: "Top-notch quality. The customer support is outstanding.",
    author: "Alice Brown",
    position: "Business Owner, ABC Enterprises",
    avatar: "/alice-brown.jpg",
  },
];

export default function AutoTestimonialCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 4000); // Change slide every 4 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <Carousel>
      <CarouselContent
        style={{
          transform: `translateX(-${currentIndex * 100}%)`,
          transition: "transform 0.5s ease-in-out",
        }}
      >
        {testimonials.map((testimonial, index) => (
          <CarouselItem key={index} className="w-full h-auto p-8 bg-gray-100 flex flex-col items-center justify-center rounded-lg shadow-lg">
            <motion.div
              className="text-xl font-semibold text-center mb-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <p className="italic">"{testimonial.quote}"</p>
            </motion.div>
            <motion.div
              className="text-lg font-medium text-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <p>- {testimonial.author}, <span className="text-gray-600">{testimonial.position}</span></p>
            </motion.div>
            {testimonial.avatar && (
              <motion.img
                src={testimonial.avatar}
                alt={testimonial.author}
                className="mt-4 w-16 h-16 rounded-full border-2 border-white"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              />
            )}
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
}
