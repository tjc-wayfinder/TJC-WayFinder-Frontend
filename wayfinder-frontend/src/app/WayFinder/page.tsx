"use client";
import Image from "next/image";
import { useState, useEffect } from "react";
import { postMessageAndGetImage } from "./getMap";
import { useAtom } from "jotai";
import { presentLocation, goLocation } from "@/atoms";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
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
      <Card className="w-auto">
        <CardHeader>
          <CardTitle>Find your way</CardTitle>
          <CardDescription>Wayfind in one click</CardDescription>
        </CardHeader>
        <CardContent>
          {imageUrl ? (
            <Image
              loader={myLoader}
              src={imageUrl}
              alt="Map"
              layout="responsive"
              width={100}
              height={100}
            />
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
