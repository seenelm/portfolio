import train from "/src/assets/images/train.webp";
import jcs from "/src/assets/images/jcs-desktop.webp";
import tanwir from "/src/assets/images/tanwir-square.webp";
import daddy from "/src/assets/images/godaddy-desktop.webp";
import sunnyside from "/src/assets/images/sunnyside-desktop.webp";
import Projects from "../ui/Projects";
import Heading from "../ui/Heading";

export default function Works({ forwardedRef }) {
  return (
    <section
      ref={forwardedRef}
      id="works"
      className="nav-change overflow-hidden my-[10%]"
    >
     <Heading title="Projects" />
      <div className="mt-10 grid grid-cols-1 gap-16 gap-y-10 md:grid-cols-12">
        {/* Project #1 */}
        <div className=" col-span-1 md:col-span-12">
          <Projects
            link="https://trainapp.org/"
            img={train}
            alt="Train App project mockup"
            name="train app"
            type="iOS App • App Development"
            year="2024"
            tools="React Native • Node JS • Rust • MondgoDB"

          />
        </div>
        {/* Project #2 */}
        <div className="col-span-1 pt-0 md:col-span-7 md:pt-16">
          <Projects
            link="https://jcshomesllc.com/"
            img={jcs}
            alt="jcshomesllc mockup"
            name="Jcs Homes LLC landing page"
            type="Frontend Development"
            year="2024"
            tools="HTML • CSS • JavaScript"
          />
        </div>
        <div className="col-span-1 pt-0 md:col-span-5 md:pt-80">
          <Projects
            link="https://tanwir.squarespace.com"
            img={tanwir}
            alt="Tanwir Institute Website"
            name="Tanwir Institute"
            type="Web Design • Frontend Development"
            year="2024"
            tools="HTML • CSS • JavaScript • Figma"
          />
        </div>
        <div className="col-span-1 h-fit pt-0 md:col-span-8 md:pt-20">
            {/* <Projects
              link="https://godaddyuiclone.netlify.app"
              img={daddy}
              alt="godaddy clone page mockup"
              name="GODADDY LANDING PAGE CLONE"
              type="Frontend Development"
              year="2023"
              tools="HTML • TailwindCSS • JavaScript"
          /> */}
        </div>
        <div className="col-span-1 h-fit md:col-span-4">
          {/* <Projects
            link="https://sunnysidechallenge.netlify.app"
            img={sunnyside}
            alt="sunnyside project mockup"
            name="SUNNYSIDE LANDING PAGE"
            type="Frontend Development"
            year="2022"
            tools="HTML • TailwindCSS • JavaScript"
          /> */}
         
        </div>
      </div>
    </section>
  );
}
