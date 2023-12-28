"use client";
import Image from "next/image";
import { useState, useEffect, useContext } from "react";
import { postMessageAndGetImage } from "./getMap";

export default function WayFinder() {
    const [imageUrl, setImageUrl] = useState('');
  useEffect(() => {
    const fetchData = async () => {
      const url = await postMessageAndGetImage({
        currentLocation: "A",
        destinationLocation: "B",
      });
    setImageUrl(url);
    };

    fetchData();
  }, []);

const myLoader = ({ src }: { src: string }) => {
    return src;
  };

  return (
    <div>
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
