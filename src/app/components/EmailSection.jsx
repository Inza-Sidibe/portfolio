"use client";
import emailjs from "emailjs-com";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import GithubIcon from "../../../public/github-icon.svg";
import LinkedinIcon from "../../../public/linkedin-icon.svg";



const EmailSection = () => {
  const [emailSubmitted, setEmailSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_xbk1ln2",  // Remplace par ton Service ID
        "template_pmxt2nm", // Remplace par ton Template ID
        e.target,
        "_UPl4SB25CzjgPAa6"  // Remplace par ton User ID (ou Public Key)
      )
      .then(
        (result) => {
          console.log("Message envoyé", result.text);
          setEmailSubmitted(true);
        },
        (error) => {
          console.error("Erreur lors de l'envoi", error.text);
        }
      );
    
    e.target.reset(); // Réinitialise le formulaire après l'envoi
  };

  return (
    <section
      id="contact"
      className="grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4 relative"
    >
      <div className="z-10">
        <h5 className="text-xl font-bold text-white my-2">Restons en contact</h5>
        <p className="text-[#ADB7BE] mb-4 max-w-md">
          Je suis actuellement à la recherche de nouvelles opportunités, ma boîte de réception est toujours ouverte...
        </p>
        <div className="socials flex flex-row gap-2">
          <Link href="http://github.com/Inza-Sidibe/Inza-Sidibe.github.io/">
            <Image src={GithubIcon} alt="Github Icon" />
          </Link>
          <Link href="http://www.linkedin.com/in/inza-sidibe-a09913200">
            <Image src={LinkedinIcon} alt="Linkedin Icon" />
          </Link>
        </div>
      </div>
      <div>
        {emailSubmitted ? (
          <p className="text-green-500 text-sm mt-2">Envoyé avec succès !</p>
        ) : (
          <form className="flex flex-col" onSubmit={handleSubmit}>
            <div className="mb-6">
              <label htmlFor="email" className="text-white block mb-2 text-sm font-medium">
                Votre email
              </label>
              <input
                name="email"
                type="email"
                id="email"
                required
                className="bg-[#18191E] border border-[#3f3733] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                placeholder="votremail@.com"
              />
            </div>
            <div className="mb-6">
              <label htmlFor="subject" className="text-white block text-sm mb-2 font-medium">
                Objet du message
              </label>
              <input
                name="subject"
                type="text"
                id="subject"
                required
                className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                placeholder="votre objet ici"
              />
            </div>
            <div className="mb-6">
              <label htmlFor="message" className="text-white block text-sm mb-2 font-medium">
                Message
              </label>
              <textarea
                name="message"
                id="message"
                required
                className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                placeholder="votre message ici"
              />
            </div>
            <button
              type="submit"
              className="bg-primary-500 hover:bg-primary-600 text-white font-medium py-2.5 px-5 rounded-lg w-full"
            >
              Envoyer
            </button>
          </form>
        )}
      </div>
    </section>
  );
};

export default EmailSection;
