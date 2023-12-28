"use client";
import * as React from "react";
import { Button } from "@/components/ui/button";
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
import Link from "next/link";
export default function MapInput() {
    return (
      <div className="bg-[#328C2A] flex h-screen justify-center items-center ">
        <Card className="w-[350px]">
          <CardHeader>
            <CardTitle>Find your way</CardTitle>
            <CardDescription>
              Wayfind in one click
            </CardDescription>
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
            <Button variant="outline" onClick={()=>window.location.reload()}>Clear</Button>
            <Button> <Link href="/WayFinder">WayFind</Link></Button>
          </CardFooter>
        </Card>
      </div>
    );
}
