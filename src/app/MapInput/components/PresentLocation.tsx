"use client";

import * as React from "react";

import { useMediaQuery } from "@/hooks/use-media-query";
import { Button } from "@/components/ui/button";
import { Drawer, DrawerContent, DrawerTrigger } from "@/components/ui/drawer";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { SchLocationList } from "./schLocationList";
import { useAtom } from "jotai";
import { presentLocation } from "@/atoms";
export function PresentLocation() {
  const [open, setOpen] = React.useState(false);
  const isDesktop = useMediaQuery("(min-width: 768px)");
  const [destinationLocation, setSelectedschLocation] =
    useAtom(presentLocation);

  if (isDesktop) {
    return (
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button variant="outline" className="w-auto justify-start">
            {destinationLocation ? (
              <>{destinationLocation.label}</>
            ) : (
              <>Where are you currently?</>
            )}
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-[200px] p-0" align="start">
          <SchLocationList
            setOpen={setOpen}
            setSelectedschLocation={setSelectedschLocation}
          />
        </PopoverContent>
      </Popover>
    );
  }

  return (
    <Drawer open={open} onOpenChange={setOpen}>
      <DrawerTrigger asChild>
        <Button variant="outline" className="w-auto justify-start">
          {destinationLocation ? (
            <>{destinationLocation.label}</>
          ) : (
            <>Where are you currently?</>
          )}
        </Button>
      </DrawerTrigger>
      <DrawerContent>
        <div className="mt-4 border-t">
          <SchLocationList
            setOpen={setOpen}
            setSelectedschLocation={setSelectedschLocation}
          />
        </div>
      </DrawerContent>
    </Drawer>
  );
}

