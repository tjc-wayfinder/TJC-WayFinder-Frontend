"use client";
import Image from "next/image";
import { useState, useEffect } from "react";
import { postMessageAndGetImage } from "./getMap";
import { useAtom } from "jotai";
import { presentLocation, goLocation } from "@/atoms";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Progress } from "@/components/ui/progress";

export default function WayFinder() {
  const [imageUrl, setImageUrl] = useState('');
  const [selectedschLocation] = useAtom(presentLocation);
  const [destinationLocation] = useAtom(goLocation)

  const [progress, setProgress] = useState(0);
  const [isImageLoaded, setImageLoaded] = useState(false);
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

  useEffect(() => {
    let progressInterval: NodeJS.Timeout;

    if (imageUrl) {
      setImageLoaded(false);
      progressInterval = setInterval(() => {
        setProgress((oldProgress) => {
          if (oldProgress >= 100) {
            clearInterval(progressInterval);
            return 100;
          }
          return Math.min(oldProgress + 10, 100);
        });
      }, 500);
    }

    return () => clearInterval(progressInterval);
  }, [imageUrl]);

  const myLoader = ({ src }: { src: string }) => {
    return src;
  };

  return (
    <div className="bg-[#328C2A] flex flex-col h-screen justify-center items-center ">
      <Card className="w-auto">
        <CardHeader>
          <CardTitle>Find your way</CardTitle>
        </CardHeader>
        <CardContent>
          {imageUrl ? (
            <div className="relative">
              {!isImageLoaded && (
                <div className="absolute inset-0 flex items-center justify-center">
                  <Progress value={progress} />
                </div>
              )}
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
            </div>
          ) : null}
        </CardContent>
        <CardFooter className="flex justify-center">
          <Button className="px-8 py-4 text-lg">
            <Link href="/MapInput">Back</Link>
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}
