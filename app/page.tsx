// app/page.tsx
import Hero from "../components/Hero";

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
    </>
  );
}