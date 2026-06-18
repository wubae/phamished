// app/page.tsx
import Image from "next/image";
import Hero from "../components/Hero";
import Masonry from "../components/Masonry";
import PurpleButton from "../components/PurpleButton";
import GreenButton from "../components/GreenButton";

const masonryItems = [
  {
    id: "1",
    img: "/mason/1.png",
    url: "https://example.com/",
    height: 800,
  },
  {
    id: "2",
    img: "/mason/2.jpg",
    url: "https://example.com/",
    height: 1000,
  },
  {
    id: "3",
    img: "/mason/3.png",
    url: "https://example.com/",
    height: 700,
  },
  {
    id: "4",
    img: "/mason/4.png",
    url: "https://example.com/",
    height: 800,
  },
  {
    id: "5",
    img: "/mason/5.jpeg",
    url: "https://example.com/",
    height: 1000,
  },
  {
    id: "6",
    img: "/mason/6.jpg",
    url: "https://example.com/",
    height: 600,
  },
  // add more items if you want
]

export default function HomePage() {
  return (
    <>
      <Hero />

      <section className="w-full bg-[#141414] px-8 sm:px-16 lg:px-[250px] py-20 sm:py-28">
        <div className="w-full text-left">
          <h2 className="text-white text-4xl sm:text-5xl font-bold mb-8">
            About Me
          </h2>

          <p className="text-white text-lg sm:text-xl lg:text-2xl leading-relaxed">
            My name is Steven Pham but I go by “Pham.” By trade, I am a
            Registered Dietitian Nutritionist (RDN) with a Master’s degree in
            nutrition and I work as a full-time performance nutrition coach. In
            addition to being a healthcare professional, I am a national level
            powerlifter in the 74kg open class with 12 meets worth of experience
            across four different powerlifting federations.

            <br />
            <br />

            In 2019, I realized there was a need for nutrition services in the
            powerlifting/fitness space so I started a nutrition coaching
            business and quickly became passionate about working with committed
            clients who have a foundation in strength training. Due to the power
            of social media and referrals, I have the honor and privilege of
            working with some of the best strength athletes in powerlifting,
            including national and international champions across multiple
            federations (USAPL, Powerlifting America, IPF, USPA, and PLU). I
            have also helped secure multiple gold medals at the national and
            international stage for Americans as well as clients abroad.

            <br />
            <br />

            My philosophy is simple: nutrition is a key component of recovery
            for strength athletes and optimal recovery over time leads to
            enhanced athletic performance and body composition improvement. I
            coach my clients on flexible dieting principles backed with nutrition
            science to aid in recovery, body composition improvement and
            athletic performance based on their individual goals, while being
            mindful of their individual timelines.

            <br />
            <br />

            I am hoping that if we have the opportunity to work together, I can
            help you secure personal records, improve your health markers,
            enhance your body composition and improve your relationship with
            food! Please contact me if you are needing professional help!
          </p>
        </div>
      </section>

      {/* Masonry Section */}
      <section className="w-full bg-[#141414] px-4 sm:px-16 lg:px-[250px] py-20 sm:py-28">
        <div className="w-full text-left">
          <h2 className="text-white text-4xl sm:text-5xl font-bold mb-8">
            Testimonials
          </h2>
        </div>

        {/* Mobile fallback grid */}
        <div className="grid grid-cols-1 gap-4 md:hidden">
          {masonryItems.map((item) => (
            <div
              key={item.id}
              className="relative block w-full h-[420px] overflow-hidden rounded-xl cursor-default"
            >
              <Image
                src={item.img}
                alt={`Testimonial ${item.id}`}
                fill
                className="object-cover"
                sizes="100vw"
              />
            </div>
          ))}
        </div>

        {/* Desktop / tablet React Bits Masonry */}
        <div className="relative hidden md:block w-full h-[900px] lg:h-[800px] overflow-visible">
          <Masonry
            items={masonryItems}
            ease="power3.out"
            duration={0.6}
            stagger={0.05}
            animateFrom="bottom"
            scaleOnHover={true}
            hoverScale={0.95}
            blurToFocus={true}
            colorShiftOnHover={false}
          />
        </div>
      </section>

      <section className="w-full bg-[#141414] px-8 sm:px-16 lg:px-[250px] py-20 sm:py-28">
        <div className="w-full text-left">
          <h2 className="text-white text-4xl sm:text-5xl font-bold mb-8">
            Services
          </h2>
          <h3 className="text-white text-2xl sm:text-2xl font-bold mb-8">
            My standard individual adult nutrition coaching rate is $499 USD upfront for the first three months and $164 per month thereafter.
          </h3>
          <h4 className="text-white text2xl sm:text-2xl font-bold mb-8 underline">
            Discount for qualified students, educators, military, first responders, and healthcare workers: 
            $469 USD upfront for the first three months and $150/mo thereafter***
          </h4>

          <p className="text-white text-lg sm:text-xl lg:text-2xl leading-relaxed">
            This is a fixed rate and will not change as long as we continue working together. Preferred payment methods are Venmo, Stripe 
            (accepts credit card and international), and Zelle. Services provided include (and are not limited to): nutrition goal setting, 
            prescribed calories & macronutrients, meal planning, weight monitoring, nutrition interventions, dietary intake log assessments, 
            competition preparation, weight cut protocols, hydration techniques, gameday nutrition, grocery recommendations, cooking 
            technique/equipment recommendations, progress photo assessments, sleep monitoring, cardio recommendations, nutrition tips for 
            traveling and supplementation protocols.
            
          </p>

          <br></br>

          <PurpleButton href="https://www.instagram.com/phamishedcoach/">
          DM me on Instagram to get the conversation started!
          </PurpleButton>

          <br></br>
          <br></br>

          <GreenButton href="https://forms.gle/uR9ZQ8sAPUZk6UH4A">
          New Client Questionaire
          </GreenButton>
        </div>
      </section>
    </>
  );
}