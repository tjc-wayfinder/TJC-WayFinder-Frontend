"use client";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useAtom } from "jotai";
import { presentLocation, goLocation } from "@/atoms";
export default function Buttons() {
    const [selectedschLocation] = useAtom(presentLocation);
    const [destinationLocation] = useAtom(goLocation);
    return (<>
                <Button variant="outline" onClick={() => window.location.reload()}>
              Clear
            </Button>
            <Button disabled={!selectedschLocation || !destinationLocation}>
              <Link
                href={
                  selectedschLocation && destinationLocation
                    ? "/WayFinder"
                    : "#"
                }
              >
                WayFind
              </Link>
            </Button>
    </>)
}