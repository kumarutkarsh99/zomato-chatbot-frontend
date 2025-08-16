import React, { useEffect, useState } from "react";
import {
  FaUtensils,
  FaMapMarkedAlt,
  FaRegClock,
  FaCommentDots,
} from "react-icons/fa";
import Chatbot from "./components/Chatbot";
import "./App.css";

const FEATURES = [
  {
    id: 1,
    icon: <FaUtensils />,
    title: "Find Restaurants",
    desc: "Discover nearby restaurants using filters like cuisine, price, rating or distance.",
  },
  {
    id: 2,
    icon: <FaRegClock />,
    title: "Track Orders",
    desc: "Live order tracking with ETA and delivery partner info, so you're never wondering.",
  },
  {
    id: 3,
    icon: <FaMapMarkedAlt />,
    title: "Dine-in Bookings",
    desc: "Reserve a table in seconds and get confirmation right away.",
  },
  {
    id: 4,
    icon: <FaUtensils />,
    title: "Personalized Picks",
    desc: "Smart suggestions based on your history and current location.",
  },
];

export default function App() {
  return (
    <div className="relative min-h-screen font-sans overflow-x-hidden bg-gradient-to-br from-[#120016] via-[#2a0538] to-[#11011e] text-violet-100">
      <svg
        className="hero-blob absolute -top-40 -right-40 opacity-30 pointer-events-none"
        viewBox="0 0 600 600"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="g1" x1="0%" x2="100%">
            <stop offset="0%" stopColor="#6a0dad" />
            <stop offset="100%" stopColor="#3f0d60" />
          </linearGradient>
        </defs>
        <path
          fill="url(#g1)"
          d="M421.2,358.1Q377,466,260.5,478.4Q144,490.9,86.6,374.7Q29.2,258.4,84.4,165.5Q139.6,72.6,256.9,61.6Q374.2,50.6,429.7,143.9Q485.2,237.1,421.2,358.1Z"
        />
      </svg>

      <nav className="flex items-center justify-between p-4 bg-black bg-opacity-20 backdrop-blur-lg fixed w-full z-50 shadow-lg">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-full overflow-hidden bg-[#9126d9]">
            <img
              src="/bot-4.png"
              alt="Zomato Chatbot Logo"
              className="w-full h-full object-cover"
            />
          </div>
          <span className="text-xl font-bold text-violet-200">
            Zomato Chatbot
          </span>
        </div>
      </nav>

      <header className="flex relative px-6 md:px-20 min-h-screen items-center w-full">
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h1 className="text-6xl md:text-6xl font-extrabold leading-tight text-white">
              Hungry?
            </h1>
            <h1 className="text-xl md:text-xl mt-4 font-extrabold leading-tight text-white">
              Let&apos;s find your next meal — fast.
            </h1>
            <p className="mt-6 text-lg text-violet-200 max-w-xl">
              A smarter assistant to discover restaurants, place orders and book
              tables — tailored to your tastes.
            </p>

            <div className="mt-10 flex gap-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-violet-700/40 flex items-center justify-center">
                  ⭐
                </div>
                <div>
                  <div className="text-md text-violet-200 font-semibold">
                    4.8/5 average
                  </div>
                  <div className="text-sm text-violet-300">
                    Over 200k happy users
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-violet-700/40 flex items-center justify-center">
                  ⚡
                </div>
                <div>
                  <div className="text-md text-violet-200 font-semibold">
                    Superfast
                  </div>
                  <div className="text-sm text-violet-300">
                    Quick recommendations
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-end w-full">
            <div className="rounded-3xl overflow-hidden shadow-2xl flex items-center">
              <img
                src="https://images.unsplash.com/photo-1600891964599-f61ba0e24092?auto=format&fit=crop&w=900&q=80"
                alt="Delicious food"
                className="w-[80vw] h-[40vh] object-cover block"
              />
            </div>
          </div>
        </div>
      </header>

      <main className="px-6 md:px-20 pb-20">
        <section className="py-10">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-violet-200 mb-12">
            Core Features
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {FEATURES.map((f) => (
              <article
                key={f.id}
                className="glass-card p-6 rounded-2xl border border-transparent hover:border-violet-400/40 text-center"
              >
                <div className="icon-wrap text-4xl text-violet-300 mb-4 flex items-center justify-center">
                  {f.icon}
                </div>
                <h4 className="text-xl font-semibold text-white mb-2">
                  {f.title}
                </h4>
                <p className="text-violet-200">{f.desc}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="mt-12 bg-violet-900/20 border border-violet-800 rounded-2xl p-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center w-full">
            <h3 className="text-2xl font-bold text-white">
              Ready to chat with your new food assistant?
            </h3>
            <p className="text-violet-200 mt-2">
              Start a conversation and get personalized recommendations
              instantly.
            </p>
          </div>
        </section>
      </main>

      <footer className="bg-[#0e0314] text-violet-300 py-8 text-center">
        <p className="mb-2 font-semibold">Developed by:</p>
        <p className="font-medium">
          Kumar Utkarsh &nbsp;|&nbsp; Harsh Maurya &nbsp;|&nbsp; Adarsh Dhakar
        </p>
        <p className="mt-4 text-sm text-violet-400">
          &copy; {new Date().getFullYear()} Zomato Chatbot
        </p>
      </footer>

      <Chatbot />
    </div>
  );
}
