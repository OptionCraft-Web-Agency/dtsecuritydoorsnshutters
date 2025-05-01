"use client";

import Head from "next/head";
import React from "react";

import dynamic from "next/dynamic";

import HeroSection from "@/components/HeroSection";
const ContactUsInfo = dynamic(() => import("@/components/ContactUsInfo"));
const ContactUsForm = dynamic(() => import("@/components/ContactUsForm"));


export default function ContactUs() {
  return (
    <>
      <Head>
        <title>Contact DT Security Doors & Shutters - Secure Your Home in Style</title>
        <meta
          name="description"
          content="Reach out to DT Security Doors & Shutters for bespoke security solutions in Melbourne. Contact us today for a consultation to enhance the safety and elegance of your home."
        />
        <meta property="og:title" content="Get in Touch with DT Security Doors & Shutters" />
        <meta
          property="og:description"
          content="Looking for custom security doors or shutters? Contact DT Security Doors & Shutters in Melbourne for products that combine safety with style."
        />
        <meta
          property="og:image"
          content="https://dtsecuritydoorsandshutters.com.au/Logo1.png"
        />
        <meta
          property="og:url"
          content="https://dtsecuritydoorsandshutters.com.au/contact"
        />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content="Contact DT Security Doors & Shutters" />
        <meta
          name="twitter:description"
          content="Secure and stylize your Melbourne home with DT Security Doors & Shutters. Contact us for more information."
        />
        <meta
          name="twitter:image"
          content="https://dtsecuritydoorsandshutters.com.au/Logo1.png"
        />
      </Head>

      <main className="flex flex-col">
        <HeroSection title="Contact Us"/>
        <section className="mt-16">
          <ContactUsInfo />
        </section>
        <section className="mt-20">
          <ContactUsForm />
        </section>
      </main>
    </>
  );
}