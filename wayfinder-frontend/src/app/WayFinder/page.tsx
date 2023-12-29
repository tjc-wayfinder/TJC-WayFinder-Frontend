"use client";
import Image from "next/image";
import { useState, useEffect } from "react";
import { postMessageAndGetImage } from "./getMap";
import { useAtom } from "jotai";
import { presentLocation, goLocation } from "@/atoms";
export default function WayFinder() {
  const [imageUrl, setImageUrl] = useState('');
  const [selectedschLocation] = useAtom(presentLocation);
  const [destinationLocation] = useAtom(goLocation)
  useEffect(() => {
    const fetchData = async () => {
      const url = await postMessageAndGetImage({
        currentLocation: selectedschLocation?.code || '',
        destinationLocation: destinationLocation?.code || '',
      });
    setImageUrl(url);
    };

    fetchData();
  }, []);

const myLoader = ({ src }: { src: string }) => {
    return src;
  };

  return (
    <div className="bg-[#328C2A] flex flex-col h-screen justify-center items-center ">
      <h1>WayFinder</h1>
      {imageUrl ? (
        <Image
          loader={myLoader}
          src={imageUrl}
          alt="Map"
          width={500}
          height={500}
        />
      ) : null}
    </div>
  );
}
