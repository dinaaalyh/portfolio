"use client";
import { useState } from "react";
import diabetesClassifier from "@/assets/images/diabetes-classifier.png";
import technoIndie from "@/assets/images/techno-indie.png";
import agroVision from "@/assets/images/agro-vision.png";
import snazzyStyle from "@/assets/images/snazzy-style.png";
import medhub from "@/assets/images/medhub2.png";
import farm from "@/assets/images/farm-app2.png";
import gpApp from "@/assets/images/gpApp3.png";
import damApp from "@/assets/images/dgApp.png";
import Image from "next/image";
import CheckIcon from "@/assets/icons/check-circle.svg";
import ArrowRightIcon from "@/assets/icons/arrow-up-right.svg";
import Python from "@/assets/icons/python.svg";
import Flask from "@/assets/icons/flask.svg";
import Kaggle from "@/assets/icons/kaggle.svg";
import GoogleColab from "@/assets/icons/google-colab.svg";
import Git from "@/assets/icons/git.svg";
import Figma from "@/assets/icons/figma.svg";
import Bootstrap from "@/assets/icons/bootstrap.svg";
import Trello from "@/assets/icons/trello.svg";
import Dart from "@/assets/icons/dart.svg";
import Firebase from "@/assets/icons/firebase.svg";
import Flutter from "@/assets/icons/flutter.svg";
import AndroidStudio from "@/assets/icons/android-studio.svg";
import Laravel from "@/assets/icons/laravel.svg";
import Mysql from "@/assets/icons/mysql.svg";
import Php from "@/assets/icons/php.svg";
import FlutterBloc from "@/assets/icons/bloc.svg";
import Kotlin from "@/assets/icons/kotlin.svg";
import { SectionHeader } from "@/components/SectionHeader";
import { Card } from "@/components/Card";

const portfolioMobileProjects = [
  {
    company: "PT. Adma Digital Solusi",
    year: "2024",
    title: "G Partnership Mobile App (Confidential Project)",
    results: [
      { title: "Developed mobile application screens by converting UI/UX prototypes into functional Flutter code" },
      { title: "Implemented BLoC/Cubit state management to maintain predictable UI states, improve code scalability, and streamline data flow across application features" },
      { title: "Integrated REST APIs to enable real-time data communication and ensure seamless user experience" },
      { title: "Contributed to product development in a real-case environment with cross-functional collaboration" },
      { title: "Implemented refinement cycles based on QA findings and client feedback to enhance usability and performance" },
    ],
    link: "🔒 Private Project – No Live Link Available",
    image: gpApp,
    tech: [Dart, Flutter, FlutterBloc, Git, Trello],
  },
  {
    company: "PT. Adma Digital Solusi",
    year: "2024",
    title: "F Partnership App (Confidential Project)",
    results: [
      { title: "Translated UI designs into responsive Flutter interfaces to support intuitive user interaction" },
      { title: "Collaborated within the development team to deliver results aligned with real project requirements" },
      { title: "Executed multiple enhancement iterations based on stakeholder and QA evaluation" },
    ],
    link: "🔒 Private Project – No Live Link Available",
    image: farm,
    tech: [Dart, Flutter, FlutterBloc, Git, Trello],
  },
  {
    company: "PT. Adma Digital Solusi",
    year: "2024",
    title: "Digital Affiliate Marketing App (Maintenance & Update)",
    results: [
      { title: "Converted interface concepts into interactive Flutter screens for smoother user workflow" },
      { title: "Performed ongoing maintenance and feature updates to keep the application relevant and scalable" },
      { title: "Delivered revisions based on client direction to improve product quality and functionality" },
      { title: "Refactored sections of legacy code to reduce technical debt and enhance efficiency" },
    ],
    link: "🔒 Private Project – No Live Link Available",
    image: damApp,
    tech: [Dart, Flutter, FlutterBloc, Git, Trello],
  },
  {
    company: "Dina Aaliyah",
    year: "2024",
    title: "ADS Technical Test — Flutter UI Slicing Project",
    results: [
      { title: "Converted UI/UX design into pixel-perfect Flutter screens with consistent layout implementation" },
      { title: "Organized folder and widget structure for clear readability and scalability of code" },
      { title: "Ensured design accuracy by validating alignment, spacing, and visual elements against reference mockups" },
    ],
    link: "https://github.com/dinaaalyh/medhub-app",
    image: medhub,
    tech: [Dart, Flutter, Figma, Git],
  },
  {
    company: "College Project Assignment",
    year: "2023",
    title: "SnazzyStyle - Tailor Project App",
    results: [
      { title: "Developed the entire application interface using Flutter, focusing on precise UI slicing from the provided design" },
      { title: "Implemented interactive navigation between multiple screens such as home, order form, order history, and profile" },
      { title: "Applied clean code practices and proper folder structuring for better project organization and scalability" },
    ],
    link: "https://www.github.com/dinaaalyh/tailor-project",
    image: snazzyStyle,
    tech: [Dart, Flutter, Figma, Git],
  },
];

const portfolioAndroidProjects = [
  {
    company: "Bangkit Academy",
    year: "2024",
    title: "AgroVision - Plant Health Monitoring App",
    results: [
      { title: "Leaf Photo-Based Disease Detection" },
      { title: "Supports Rice, Corn, Sugarcane, Cassava" },
      { title: "Fast AI-Powered Diagnosis" },
      { title: "Clear Result Display & Monitoring" },
    ],
    link: "https://github.com/C241-PS206/MD-main-app",
    image: agroVision,
    tech: [AndroidStudio, Kotlin, Figma, Git],
  },
];

const portfolioWebsiteProjects = [
  {
    company: "Final Year Project",
    year: "2025",
    title: "Diabetes Classifier",
    results: [
      { title: "Diabetes Risk Prediction from Health Data" },
      { title: "Percentage-Based Result Display" },
      { title: "Fast ML-Powered Analysis" },
      { title: "Saved Prediction History" },
    ],
    link: "https://github.com/dinaaalyh/skripsi-dm-classifier",
    image: diabetesClassifier,
    tech: [Python, Flask, Flutter, Kaggle, GoogleColab, Git, Figma],
  },
  {
    company: "College Project Assignment",
    year: "2024",
    title: "Techno Indie - PC Assembly & Maintenance Service",
    results: [
      { title: "Easy Online Booking for PC Assembly" },
      { title: "Computer Maintenance Service Requests" },
      { title: "Clear Service Status & Updates" },
    ],
    link: "https://github.com/dinaaalyh/techno_indie_website",
    image: technoIndie,
    tech: [Php, Laravel, Bootstrap, Mysql, Git],
  },
  {
    company: "College Project Assignment",
    year: "2023",
    title: "Registration at The Community Health Center",
    results: [
      { title: "Enables patients to register for healthcare services online" },
      { title: "Real-time access and retrieval of patient records" },
      { title: "Equipped with an admin/staff dashboard to monitoring data" },
    ],
    link: "https://github.com/dinaaalyh/puskesmas-website",
    image: technoIndie,
    tech: [Php, Laravel, Bootstrap, Mysql, Git],
  },
];

export const ProjectsSection = () => {
  const [activeTab, setActiveTab] = useState("mobile");

  const getProjects = () => {
    if (activeTab === "mobile") return portfolioMobileProjects;
    if (activeTab === "android") return portfolioAndroidProjects;
    if (activeTab === "website") return portfolioWebsiteProjects;
  };

  return (
    <section className="pb-16 py-32 lg:py-24 sm:py-32" id="project-section">
      <div className="container">
        <SectionHeader
          eyebrow="My Portfolio"
          title="Featured Projects"
          description="See how I transformed concepts into engaging digital experiences."
        />
        <div className="flex flex-row gap-2 md:gap-10 justify-center mt-6 md:mt-10">
          <button
            className={`h-10 md:h-12 w-full md:w-auto px-4 md:px-6 rounded-xl font-semibold ${
              activeTab === "mobile"
                ? "bg-gradient-to-r from-emerald-300 to-sky-400 text-gray-900"
                : ""
            }`}
            onClick={() => setActiveTab("mobile")}>
            Mobile
          </button>
          <button
            className={`h-10 md:h-12 w-full md:w-auto px-4 md:px-6 rounded-xl font-semibold ${
              activeTab === "android"
                ? "bg-gradient-to-r from-emerald-300 to-sky-400 text-gray-900"
                : ""
            }`}
            onClick={() => setActiveTab("android")}>
            Android
          </button>
          <button
            className={`h-10 md:h-12 w-full md:w-auto px-4 md:px-6 rounded-xl font-semibold ${
              activeTab === "website"
                ? "bg-gradient-to-r from-emerald-300 to-sky-400 text-gray-900"
                : ""
            }`}
            onClick={() => setActiveTab("website")}>
            Website
          </button>
        </div>

        <div className="mt-8 md:mt-10 flex flex-col gap-20">
          {getProjects()?.map((project, projectIndex) => (
            <Card
              key={project.title}
              className="px-8 pt-8 pb-0 md:pt-12 md:px-10 lg:pt-16 lg:px-20 sticky"
              style={{
                top: `calc(64px + ${projectIndex * 40}px)`,
              }}>
              <div className="bg-gradient-to-r from-emerald-300 to-sky-400 inline-flex gap-2 font-bold uppercase tracking-widest text-sm text-transparent bg-clip-text">
                <span>{project.company}</span>
                <span>&bull;</span>
                <span>{project.year}</span>
              </div>
              <div className="lg:grid lg:grid-cols-2 lg:gap-16">
                <div className="lg:pb-16">
                  <h3 className="font-serif text-2xl mt-2 md:mt-5 md:text-4xl">
                    {project.title}
                  </h3>
                  <hr className="border-t-2 border-white/5 mt-4 md:mt-5" />
                  <ul className="flex flex-col gap-4 mt-4 md:mt-5">
                    {project.results.map((result) => (
                      <li
                        key={result.title}
                        className="flex gap-2 text-sm md:text-base text-white/50">
                        <CheckIcon className="size-5 md:size-6" />
                        <span className="whitespace-pre-line">
                          {result.title}
                        </span>
                      </li>
                    ))}
                  </ul>
                  <ul className="flex flex-row gap-2 mt-3 md:mt-3">
                    {project.tech.map((TechIcon, index) => (
                      <li key={index}>
                        <TechIcon className="w-6 h-6" alt="Tech Icon" />
                      </li>
                    ))}
                  </ul>
                  <a href={project.link}>
                    <button className="bg-white text-gray-950 h-12 w-full md:w-auto px-6 rounded-xl font-semibold inline-flex items-center justify-center gap-2 mt-8">
                      <span>Visit Live Site</span>
                      <ArrowRightIcon className="size-4" />
                    </button>
                  </a>
                </div>
                <div>
                  <Image
                    src={project.image}
                    alt={project.title}
                    className="mt-8 -mb-4 md:-mb-0 lg:mt-0 lg:py-2 lg:absolute lg:h-4/6 lg:w-auto lg:max-w-none"
                  />
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
