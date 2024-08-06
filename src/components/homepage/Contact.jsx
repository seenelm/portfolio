import { Icon } from "@iconify/react";
import { useEffect, useState, useRef } from "react";
import { ScrollTrigger } from "gsap/all";
import { gsap } from "gsap";
import Heading from "../ui/Heading";

export default function Contact() {
  const [time, setTime] = useState(new Date().toLocaleTimeString());
  const [isSubmitted, setIsSubmitted] = useState(false);

  const heading = useRef(null)
  const body = useRef(null)
  const contactSection = useRef(null)

  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);

    const response = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      body: formData,
    });

    if (response.ok) {
      setIsSubmitted(true);
    } else {
      // Handle error
    }
  };

  useEffect(() => {
    ScrollTrigger.create({
      trigger: contactSection.current,
      start:"180px bottom",

      // markers: true,
      animation: gsap
        .timeline()
        .to(heading.current, { opacity: 1, y: 0, ease: "power4.out", duration: 1.25 }, 0)
        .to(body.current, { opacity: 1, y: 0, ease: "power4.out", duration: 1.25 }, 0.2),

      toggleActions: "play none none none",
    });
    ScrollTrigger.refresh();

  }, [contactSection])

  useEffect(() => {
    setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);
  });

  return (
    <section
      id="contact"
      className="my-[10%] overflow-hidden"
      aria-label="contact me"
    >
      <Heading title="Contact" />
      <div ref={contactSection} className="mt-10 flex flex-col gap-20 md:grid md:grid-cols-6 md:px-12"> 
        <div className="col-span-4">
          {!isSubmitted ? (
          <>
            <h3 ref={heading} className="max-w-lg 2xl:max-w-3xl text-heading-3 2xl:text-7xl font-semibold leading-tight translate-y-10 opacity-0">
              Have an awesome idea? Let's bring it to life.
            </h3>
            <p ref={body} className="mt-4 max-w-md 2xl:max-w-2xl text-body-2 2xl:text-4xl text-accent-100 translate-y-10 opacity-0">
              I am currently available for freelance work. Feel free to reach out and collaborate.
            </p>
            <form
              action="https://api.web3forms.com/submit"
              autoComplete="off"
              className="mt-10 font-grotesk"
              method="POST"
              data-netlify="true"
              onSubmit={handleSubmit}
            >
              <input type="hidden" name="access_key" value="30b5ead9-3c70-423b-b27c-f57835a25241"/>
              <input type="hidden" name="from_name" value="Folio" />

              <div className="grid grid-cols-1 gap-x-6 gap-y-12 sm:grid-cols-2">
                <div className="relative z-0">
                  <input
                    required
                    type="text"
                    id="name"
                    name="name"
                    className="peer block w-full appearance-none border-0 border-b border-accent-100 bg-transparent px-0 py-2.5 focus:outline-none focus:ring-0"
                    placeholder=" "
                  />
                  <label
                    htmlFor="name"
                    className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-body-3 2xl:text-body-2 text-secondary-600 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75"
                  >
                    Your name
                  </label>
                </div>
                <div className="relative z-0">
                  <input
                    required
                    type="text"
                    name="email"
                    id="email"
                    className="peer block w-full appearance-none border-0 border-b border-accent-100 bg-transparent px-0 py-2.5 focus:outline-none focus:ring-0"
                    placeholder=" "
                  />
                  <label
                    htmlFor="email"
                    className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-body-3 2xl:text-body-2 text-secondary-600 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75"
                  >
                    Your email
                  </label>
                </div>
                <div className="relative z-0 sm:col-span-2">
                  <textarea
                    required
                    id="message"
                    name="message"
                    rows="5"
                    className="peer block w-full appearance-none border-0 border-b border-accent-100 bg-transparent px-0 py-2.5 focus:outline-none focus:ring-0"
                    placeholder=" "
                    onInput={(event) => document.getElementById('reply_to').value = event.target.value}
                  ></textarea>
                  <label
                    htmlFor="message"
                    className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-body-3 2xl:text-body-2 text-secondary-600 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75"
                  >
                    Your message
                  </label>
                </div>
              </div>
              <button
                type="submit"
                className="button group mt-10 border duration-200 hover:border-accent-400 hover:bg-transparent"
              >
                Send Message
              </button>
            </form>
            </>
          ) : (
            <>
              <div className="mt-10 max-w-lg 2xl:max-w-3xl">
                <h3 className="text-heading-3 2xl:text-7xl font-semibold leading-tight">
                  Thank you for your submission!
                </h3>
                <p className="mt-4 max-w-md 2xl:max-w-2xl text-body-2 2xl:text-4xl text-accent-100">
                  We will get back to you as soon as possible.
                </p>
              </div>
              <div className="grid grid-cols-1 gap-x-6 gap-y-12 sm:grid-cols-2 mt-4 opacity-0">
                {/* Replicating the form's grid structure with invisible divs */}
                <div className="relative z-0">
                  <div className="peer block w-full appearance-none border-0 border-b bg-transparent px-0 py-2.5"></div>
                </div>
                <div className="relative z-0">
                  <div className="peer block w-full appearance-none border-0 border-b bg-transparent px-0 py-2.5"></div>
                </div>
                <div className="relative z-0 sm:col-span-2">
                  <div className="peer block w-full appearance-none border-0 border-b bg-transparent px-0 py-2.5" style={{ height: '80px' }}></div>
                </div>
              </div>
            </>
          )}
        </div>
        <div className="col-span-2 grid grid-cols-1 gap-x-4 gap-y-8 text-accent-300 sm:grid-cols-2 sm:gap-y-0 md:grid-cols-1">
          <div className="space-y-3 ">
            <h4 className="text-body-1 2xl:text-4xl font-semibold">Contact Details</h4>
            <div className="flex flex-col space-y-3 text-body-2 2xl:text-3xl">
              <a
                href="mailto:hello@yassinee.com"
                className="group relative w-fit cursor-pointer"
                target="_blank"
                rel="noreferrer"
              >
                <span>hello@yassinee.com</span>
                <span className="absolute bottom-0 left-0 h-[0.12em] w-0 rounded-full bg-secondary-600 duration-300 ease-in-out group-hover:w-full"></span>
              </a>
             
            </div>
          </div>
          <div className="space-y-3 ">
            <h4 className="text-body-1 2xl:text-4xl font-semibold">My Digital Spaces</h4>
            <div className="space-y-3 text-body-2 2xl:text-3xl">
              <a
                href="https://github.com/seenelm"
                className="group flex items-center space-x-2"
                target="_blank"
                rel="noreferrer"
              >
                <Icon icon="mdi:github" color="#666" />
                <div className="relative">
                  <span>Github</span>
                  <span className="absolute bottom-0 left-0 h-[0.10em] w-0 rounded-full bg-secondary-600 duration-300 ease-in-out group-hover:w-full"></span>
                </div>
              </a>
              <a
                href="https://www.linkedin.com/in/yelme/"
                className="group group flex w-fit items-center space-x-2"
                target="_blank"
                rel="noreferrer"
              >
                <Icon icon="mdi:linkedin" color="#666" />
                <div className="relative">
                  <span>LinkedIn</span>
                  <span className="absolute bottom-0 left-0 h-[0.12em] w-0 rounded-full bg-secondary-600 duration-300 ease-in-out group-hover:w-full"></span>
                </div>
              </a>
              <a
                href="https://www.facebook.com/yassine.elmellouki"
                className="group flex items-center space-x-2"
                target="_blank"
                rel="noreferrer"
              >
                <Icon icon="mdi:facebook" color="#666" />
                <div className="relative">
                  <span>Facebook</span>
                  <span className="absolute bottom-0 left-0 h-[0.10em] w-0 rounded-full bg-secondary-600 duration-300 ease-in-out group-hover:w-full"></span>
                </div>
              </a>
            </div>
          </div>
          <div className="space-y-3 ">
            <h4 className="text-body-1 font-semibold 2xl:text-4xl">Location</h4>
            <div className="space-y-2 text-body-2 2xl:text-3xl">
              <p>
                Washington, DC <br></br>
                {time}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
