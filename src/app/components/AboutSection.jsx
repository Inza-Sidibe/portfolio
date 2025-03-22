"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-2">
        <li>Python | R |SQL</li>
        <li>Power BI |Tableau |Qlick|Google Analytics </li>
        <li>PostgreSQL|MySQL|Excel</li>
        <li>Conception et modélisation de base de données </li>
        <li>React |Streamlit|Ollama|Elasticsearch </li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <ul>
        <li> 2024 - 2026 : Master Data Analytics et Stratégie de l&apos;Information (DASI)</li>
        <li>Université de Toulon,Toulon , Provence-Alpes-Côte d&apos;Azur, France</li>
        </ul>
        <ul>
      <li> 2021 - 2024 : Licence Informatique (UT)</li>
      <li>Université de Tours ,Blois, Centre Val de Loire, France</li>
      </ul>
      <ul>
      <li> 2018 - 2021 : Licence Informatique et Sciences du Numérique (ISN),Développement d&apos;Application et E-Services(DAS)  </li>
      <li>Université Virtuelle de Cote d&apos;Ivoire(UVCI) ,Abidjan,Cote d&apos;Ivoire </li>
      </ul>
     </ul> 
    ),
  },
  {
    title: "Certifications",
    id: "certifications",
    content: (
      <ul className="list-disc pl-2">
        <li>Introduction Power Bi </li>
        <li>Introduction formule DAX </li>
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image src="/images/about-image.png" width={500} height={500} alt="About me image" />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">A propos de moi </h2>
          <p className="text-base lg:text-lg">
          Actuellement en Master Data Analytics et systèmes d&apos;informations à l&apos;Université de Toulon, je maîtrise SQL et les méthodes agiles. J&apos;ai effectué un stage chez INRAE, où j&apos;ai développé un système d&apos;information agronomique avec Python et Django. Passionné par la transformation des données en informations stratégiques, je vise à innover et optimiser la prise de décision à travers l&apos;analyse de données, me préparant ainsi à relever des défis dans un environnement professionnel dynamique. </p>
          <div className="flex flex-row justify-start mt-8">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              {" "}
              Compétences{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              {" "}
              Formations{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("certifications")}
              active={tab === "certifications"}
            >
              {" "}
              Certifications{" "}
            </TabButton>
          </div>
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
