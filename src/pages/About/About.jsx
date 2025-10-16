import HeroImg from "@/assets/images/hero.jpg";
import OlovaLogo from "@/assets/images/olova.png";

export default function About() {
  return (
    <>
      <section id="about" className="py-16 md:py-32 text-white bg-[#04081A]">
        <div className="mx-auto max-w-5xl space-y-8 px-6 md:space-y-16">
          <h2 className="relative z-10 max-w-xl text-4xl font-medium lg:text-5xl text-white">
            Learner, Thinker, Explorer, Creator
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 md:gap-12 lg:gap-24">
            <div className="relative mb-6 sm:mb-0">
              <div className="bg-linear-to-b aspect-76/59 relative rounded-2xl p-px from-zinc-300 to-transparent">
                <img
                  src={HeroImg}
                  className="rounded-[15px] shadow block"
                  alt="profile illustration"
                  width={1207}
                  height={929}
                />
              </div>
            </div>

            <div className="relative space-y-4">
              <p className="text-white">
                Hi, I'm <span className="font-bold text-white">Amrit Khanal</span>. 
                I'm passionate about learning, exploring new ideas, and creating solutions that matter. 
                I enjoy tackling challenges that help me grow and make a positive impact.
              </p>
              <p className="text-white">
                I thrive on curiosity, creativity, and continuous self-improvement. 
                Whether it's a personal project or collaboration, I aim to contribute meaningfully and stay adaptable in any situation.
              </p>

              <div className="pt-6">
                <blockquote className="border-l-4 border-gray-300 pl-4">
                  <p className="text-white">
                    A lifelong learner and problem solver, I enjoy turning ideas into reality. 
                    My goal is to stay curious, grow constantly, and work on projects that inspire and make a difference.
                  </p>

                  <div className="mt-6 space-y-3">
                    <cite className="block font-medium text-white">
                      Amrit Khanal, Student & Developer
                    </cite>
                    <div className="flex items-center gap-2">
                      <img
                        className="h-5 w-fit"
                        src={OlovaLogo}
                        alt="Logo"
                        height="20"
                        width="auto"
                      />
                      <span className="text-white">Personal Portfolio</span>
                    </div>
                  </div>
                </blockquote>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
