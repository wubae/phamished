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
    img: "/mason/2.png",
    url: "https://example.com/",
    height: 1000,
  },
  {
    id: "3",
    img: "/mason/3.png",
    url: "https://example.com/",
    height: 900,
  },
  {
    id: "4",
    img: "/mason/4.png",
    url: "https://example.com/",
    height: 900,
  },
  {
    id: "5",
    img: "/mason/5.png",
    url: "https://example.com/",
    height: 1000,
  },
  {
    id: "6",
    img: "/mason/6.png",
    url: "https://example.com/",
    height: 1000,
  },
    {
    id: "7",
    img: "/mason/7.png",
    url: "https://example.com/",
    height: 900,
  },
    {
    id: "8",
    img: "/mason/8.png",
    url: "https://example.com/",
    height: 900,
  },
    {
    id: "9",
    img: "/mason/9.png",
    url: "https://example.com/",
    height: 900,
  },
    {
    id: "10",
    img: "/mason/10.png",
    url: "https://example.com/",
    height: 800,
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
            My name is Steven Pham but I go by “Pham.” I am a Registered Dietitian Nutritionist (RDN) with a Master’s degree 
            in Nutrition Sciences and a full-time performance nutrition coach. In today's world, anyone can claim to be a 
            nutritionist even without any credentials, but the dietitian title is nationally certified and protected while 
            also requiring dietitians to log 15 hours of continuing education yearly. In addition to being a healthcare professional, 
            I am a national level powerlifter in the 74kg open class with 12 meets worth of experience across multiple powerlifting 
            federations. My most recent competition was at Powerlifting America Nationals 2025 in my hometown of Atlanta where I was 
            able to secure a perfect 9 for 9 day (27 white lights) while also handling 20 athletes who competed in the same tournament! 
            I am currently balancing strength training in addition to competitive pickleball and HYROX training to incorporate more 
            cardio and competitions into my lifestyle.

            <br/><br/>

            Back in 2019, I realized there was a need for nutrition services in the strength sport space so I started a nutrition coaching 
            business and quickly became passionate about working with committed clients who have a foundation in strength training. 
            Due to the power of social media and referrals, I have the honor and privilege of working with some of the best strength 
            athletes in powerlifting, including national and international champions across multiple federations (IPF, Powerlifting America, 
            USAPL, USPA, & PLU). I have also helped secure multiple gold medals at the national and international stage for both American 
            and international clients! I currently live in Las Vegas where my mission is to provide sustainable and science based approaches 
            to dieting to help people get closer to their competitive or body composition goals.
          </p>
        </div>
      </section>

      <section className="w-full bg-[#141414] px-8 sm:px-16 lg:px-[250px] py-20 sm:py-28">
        <div className="w-full text-left">
          <h2 className="text-white text-4xl sm:text-5xl font-bold mb-8">
            Philosophy & Coaching Strategy
          </h2>

          <p className="text-white text-lg sm:text-xl lg:text-2xl leading-relaxed">
            Nutrition is a key component of recovery for athletes and optimal recovery over time leads to 
            enhanced athletic performance and body composition improvement. I coach my clients on flexible 
            dieting principles backed with nutrition science to aid in recovery, body composition improvement 
            and athletic performance all based on their individual goals and timelines.
          </p>
        </div>
      </section>

      <section className="w-full bg-[#141414] px-8 sm:px-16 lg:px-[250px] py-20 sm:py-28">
        <div className="w-full text-left">
          <h2 className="text-white text-4xl sm:text-5xl font-bold mb-8">
            Services
          </h2>

          <p className="text-white text-lg sm:text-xl lg:text-2xl leading-relaxed">
            Services provided include (and are not limited to).. <br/> <br/>
            • Nutrition Goal Setting <br/>
            • Prescribed Calories & Macronutrients <br/>
            • Meal Planning <br/>
            • Weight Monitoring <br/>
            • Nutrition Interventions <br/>
            • Dietary Intake Log Assessments <br/>
            • Competition Preparation & Weight Cut Protocols <br/>
            • Hydration Techniques <br/>
            • Gameday Nutrition <br/>
            • Grocery Recommendations <br/>
            • Cooking Technique/Equipment Recommendations <br/>
            • Progress Photo Assessments <br/>
            • Sleep Monitoring <br/>
            • Cardio Recommendations <br/>
            • Nutrition Tips for Traveling <br/>
            • Supplementation Protocols <br/>
          </p>
        </div>
      </section>

      <section className="w-full bg-[#141414] px-8 sm:px-16 lg:px-[250px] py-20 sm:py-28">
        <div className="w-full text-left">
          <h2 className="text-white text-4xl sm:text-5xl font-bold mb-8">
            Rates
          </h2>

          <p className="text-white text-lg sm:text-xl lg:text-2xl leading-relaxed">
            My standard individual adult nutrition coaching rate is $524 USD upfront for the first three months and $169 per month thereafter.
            
            <br/><br/>

            Discount for qualified students, educators, military, first responders, and healthcare workers:  $474 USD upfront for the first 
            three months and $159/mo thereafter. 
            
            <br/><br/>

            This is a fixed rate and will not change as long as we continue working together. 
            Accepted payment methods are Stripe (accepts credit card and international payments), Venmo, and Zelle.
          </p>

          <br/><br/>

          <PurpleButton href="https://www.instagram.com/phamishedcoach/">
            DM me on Instagram to get the conversation started!
          </PurpleButton>

           <br/><br/>

          <GreenButton href="https://forms.gle/uR9ZQ8sAPUZk6UH4A">
            New Client Questionaire
          </GreenButton>
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
            duration={0}
            stagger={0}
            animateFrom="center"
            scaleOnHover={false}
            hoverScale={1}
            blurToFocus={false}
            colorShiftOnHover={false}
          />
        </div>
      </section>
    </>
  );
}