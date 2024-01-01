import * as React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { GoLocation } from "./components/GoLocation";
import { PresentLocation } from "./components/PresentLocation";
import Buttons from "./components/Buttons";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "WayFinder",
  description: "WayFinder is a webapp that helps you find your way around TJC!",
};

export default function MapInput() {

    return (
      <div className="bg-[#328C2A] flex h-screen justify-center items-center ">
        <Card className="w-[350px]">
          <CardHeader>
            <CardTitle>Find your way</CardTitle>
            <CardDescription>Wayfind in one click</CardDescription>
          </CardHeader>
          <CardContent>
            <form>
              <div className="grid w-full items-center gap-4">
                <div className="flex flex-col space-y-1.5">
                  <PresentLocation />
                </div>
                <div className="flex flex-col space-y-1.5">
                  <GoLocation />
                </div>
              </div>
            </form>
          </CardContent>
          <CardFooter className="flex justify-between">
           <Buttons />
          </CardFooter>
        </Card>
      </div>
    );
}
