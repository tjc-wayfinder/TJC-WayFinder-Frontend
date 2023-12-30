"use client";
import { Progress } from "@/components/ui/progress";
import { useAtom } from "jotai";
import { presentLocation, goLocation } from "@/atoms";
import Image from "next/image";
import { useState, useEffect } from "react";
import { postMessageAndGetImage } from "./getMap";
export default function Images() {
  const [progress, setProgress] = useState(0);
  const [isImageLoaded, setImageLoaded] = useState(false);
  const [imageUrl, setImageUrl] = useState("");
  const [selectedschLocation] = useAtom(presentLocation);
  const [destinationLocation] = useAtom(goLocation);

  useEffect(() => {
    const fetchData = async () => {
      const url = await postMessageAndGetImage({
        currentLocation: selectedschLocation?.code || "",
        destinationLocation: destinationLocation?.code || "",
      });
      setImageUrl(url);
    };

    fetchData();
  }, []);

  useEffect(() => {
    let progressInterval: NodeJS.Timeout;

    // Start the progress interval as soon as the component mounts
    progressInterval = setInterval(() => {
      setProgress((oldProgress) => {
        if (oldProgress >= 100) {
          clearInterval(progressInterval);
          return 100;
        }
        return Math.min(oldProgress + 10, 100);
      });
    }, 1000);

    // Clear the progress interval when the image is loaded
    if (imageUrl) {
      setImageLoaded(false);
      clearInterval(progressInterval);
    }

    // Clear the progress interval when the component unmounts
    return () => {
      clearInterval(progressInterval);
    };
  }, [imageUrl]);




  const myLoader = ({ src }: { src: string }) => {
    return src;
  };
  return (
    <>
      <div className="relative">
        {!isImageLoaded && (
          <div className="absolute inset-0 flex items-center justify-center">
            <Progress value={progress} />
          </div>
        )}
        {imageUrl && (
          <Image
            loader={myLoader}
            src={imageUrl}
            alt="Map"
            layout="responsive"
            width={100}
            height={100}
            onLoad={() => {
              setImageLoaded(true);
              setProgress(100);
            }}
          />
        )}
      </div>
    </>
  );
}
