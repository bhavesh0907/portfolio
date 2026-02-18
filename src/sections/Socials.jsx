import Reveal from "../components/Reveal";
import SocialCard from "../components/SocialCard";

import { FaInstagram, FaGithub, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { SiLeetcode } from "react-icons/si";

export default function Socials() {
  return (
    <section id="socials" className="py-32 px-6 text-center">
      <Reveal>
        <h2 className="text-4xl font-bold text-accent mb-16">
          Connect With Me
        </h2>

        <div className="flex justify-center gap-10 flex-wrap">

          <SocialCard
            name="LinkedIn"
            url="https://www.linkedin.com/in/bhaveshmishra9/"
            icon={<FaLinkedin />}
          />

          <SocialCard
            name="GitHub"
            url="https://github.com/bhavesh0907"
            icon={<FaGithub />}
          />

          <SocialCard
            name="LeetCode"
            url="https://leetcode.com/u/Bhaveshmishra31/"
            icon={<SiLeetcode />}
          />

          <SocialCard
            name="Instagram"
            url="https://www.instagram.com/ayush.mishra10/"
            icon={<FaInstagram />}
          />

          <SocialCard
            name="X (Twitter)"
            url="https://x.com/Mi64120000Ayush"
            icon={<FaXTwitter />}
          />

        </div>
      </Reveal>
    </section>
  );
}
