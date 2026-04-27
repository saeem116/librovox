import Image from "next/image";
import Link from "next/link";

const HeroSection = () => {
  return (
    <section className="wrapper md:mb-16">
      <div className="library-hero-card">
        <div className="library-hero-content">
          {/* Left Part */}
          <div className="library-hero-text">
            <h2 className="library-hero-title text-4xl font-serif font-bold">
              Bring Your Books to Life
            </h2>
            <p className="library-hero-description">
              Your books aren’t static anymore. Talk with them,
              <br className="hidden md:block" />
              Listen, learn, from them, go deeper.
            </p>
            <Link
              href="/books/new"
              className="library-cta-primary mt-4 flex items-center justify-center"
            >
              <span className="text-3xl text-[#000000] font-light mb-1 mr-2">
                +
              </span>
              <span className="text-[#000000]">Add new book</span>
            </Link>
          </div>

          {/* Center Part - Desktop */}
          <div className="library-hero-illustration-desktop">
            <Image
              src="/assets/hero-illustration.png"
              alt="the book speaks"
              width={400}
              height={400}
              className="object-contain"
            />
          </div>

          {/* Center Part - Mobile (Hidden on Desktop) */}
          <div className="library-hero-illustration">
            <Image
              src="/assets/hero-illustration.png"
              alt="the book speaks"
              width={300}
              height={300}
              className="object-contain"
            />
          </div>

          {/* Right Part */}
          <div className="library-steps-card min-h-[270px] min-w-[260px] max-w-[280px] z-10 shadow-soft-md items-center justify-center">
            <ul className="space-y-6 pt-7.5">
              <li className="library-step-item">
                <div className="w-10 h-10 min-w-10 min-h-10 rounded-full border border-gray-300 flex items-center justify-center font-medium text-lg">
                  1
                </div>
                <div className="flex flex-col">
                  <h3 className="library-step-title text-lg font-bold">
                    Drop Your Book
                  </h3>
                  <p className="library-step-description text-gray-500">
                    Upload your PDF
                  </p>
                </div>
              </li>
              <li className="library-step-item">
                <div className="w-10 h-10 min-w-10 min-h-10 rounded-full border border-gray-300 flex items-center justify-center font-medium text-lg">
                  2
                </div>
                <div className="flex flex-col">
                  <h3 className="library-step-title text-lg font-bold">
                    AI Reads It
                  </h3>
                  <p className="library-step-description text-gray-500">
                    Instant understanding
                  </p>
                </div>
              </li>
              <li className="library-step-item">
                <div className="w-10 h-10 min-w-10 min-h-10 rounded-full border border-gray-300 flex items-center justify-center font-medium text-lg">
                  3
                </div>
                <div className="flex flex-col">
                  <h3 className="library-step-title text-lg font-bold">
                    Voice Chat
                  </h3>
                  <p className="library-step-description text-gray-500">
                    Speak and learn
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
