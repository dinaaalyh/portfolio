"use client";
import { Card } from "@/components/Card";
import { SectionHeader } from "@/components/SectionHeader";
import Image from "next/image";
import Bootstrap from "@/assets/icons/bootstrap.svg";
import Dart from "@/assets/icons/dart.svg";
import Firebase from "@/assets/icons/firebase.svg";
import Flutter from "@/assets/icons/flutter.svg";
import Github from "@/assets/icons/github.svg";
import Git from "@/assets/icons/git.svg";
import Laravel from "@/assets/icons/laravel.svg";
import Mysql from "@/assets/icons/mysql.svg";
import Php from "@/assets/icons/php.svg";
import FlutterBloc from "@/assets/icons/bloc.svg";
import Kotlin from "@/assets/icons/kotlin.svg";
import React from "@/assets/icons/react.svg";
import mapImage from "@/assets/images/map3.png";
import myPhoto from "@/assets/images/dina.jpg";
import { CardHeader } from "@/components/CardHeader";
import { ToolboxItem } from "@/components/ToolboxItem";
import { motion } from "framer-motion";
import { useRef } from "react";

const toolboxItems = [
  {
    title: "Dart",
    iconType: Dart,
  },
  {
    title: "Flutter",
    iconType: Flutter,
  },
  {
    title: "Flutter Bloc",
    iconType: FlutterBloc,
  },
  {
    title: "Git",
    iconType: Git,
  },
  {
    title: "Github",
    iconType: Github,
  },
  {
    title: "Bootstrap",
    iconType: Bootstrap,
  },
  {
    title: "PHP",
    iconType: Php,
  },
  {
    title: "Laravel",
    iconType: Laravel,
  },
  {
    title: "Firebase",
    iconType: Firebase,
  },
  {
    title: "Kotlin",
    iconType: Kotlin,
  },
  {
    title: "MySQL",
    iconType: Mysql,
  },
];

const hobbies = [
  {
    title: "Travel",
    emoji: "🌍",
    left: "5%",
    top: "5%",
  },
  {
    title: "Music",
    emoji: "🎵",
    left: "50%",
    top: "5%",
  },
  {
    title: "Movies",
    emoji: "🎥",
    left: "10%",
    top: "35%",
  },
  {
    title: "Reading",
    emoji: "📘",
    left: "35%",
    top: "40%",
  },
  {
    title: "Sleeping",
    emoji: "💤",
    left: "5%",
    top: "65%",
  },
  {
    title: "Gaming",
    emoji: "🎮",
    left: "45%",
    top: "70%",
  },
];

export const AboutSection = () => {
  const constraintRef = useRef(null);
  return (
    <div className="py-20 lg:py-28" id="about-section">
      <div className="container">
        <SectionHeader
          eyebrow="About Me"
          title="A Glimpse Into My World"
          description="I'm a mobile developer with a passion for building beautiful and intuitive user interfaces. I specialize in Flutter"
        />
        <div className="mt-20 flex flex-col gap-8">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-5 lg:grid-cols-3">
            <Card className="h-[320px] md:col-span-3 lg:col-span-3">
              <CardHeader
                title="My Toolbox"
                description="Explore the technologies and tools I use to craft exceptional
                digital experiences."
                className=""
              />
              <ToolboxItem
                items={toolboxItems}
                className=""
                itemsWrapperClassName="animate-move-left [animation-duration:45s]"
              />
              <ToolboxItem
                items={toolboxItems}
                className="mt-6"
                itemsWrapperClassName="animate-move-right [animation-duration:30s]"
              />
            </Card>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-5 lg:grid-cols-3 gap-8">
            <Card className="h-[320px] p-0 flex flex-col md:col-span-3 lg:col-span-2">
              <CardHeader
                title="Beyond the Code"
                description="Explore my interest and hobbies beyond the digital realmn."
                className="px-6 pt-6"
              />
              <div className="relative flex-1" ref={constraintRef}>
                {hobbies.map((hobby) => (
                  <motion.div
                    key={hobby.title}
                    className="inline-flex items-center gap-2 px-6 bg-gradient-to-r from-emerald-300 to-sky-400 rounded-full py-1.5 absolute"
                    style={{
                      left: hobby.left,
                      top: hobby.top,
                    }}
                    drag
                    dragConstraints={constraintRef}>
                    <span className="font-medium text-gray-950">
                      {hobby.title}
                    </span>
                    <span>{hobby.emoji}</span>
                  </motion.div>
                ))}
              </div>
            </Card>
            <Card className="h-[320px] p-0 relative md:col-span-2 lg:col-span-1">
              <Image
                src={mapImage}
                alt="Map Image"
                className="h-full w-full object-cover object-left-top"
              />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-20 rounded-full after:content-[''] after:absolute after:inset-0 after:outline after:outline-2 after:-outline-offset-2 after:rounded-full after:outline-gray-950/30">
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-emerald-300 to-sky-400 -z-20 animate-ping [animation-duration:2s]"></div>
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-emerald-300 to-sky-400 -z-10"></div>
                <Image
                  src={myPhoto}
                  alt="My Photo"
                  className="size-20 rounded-full p-2"
                />
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};
