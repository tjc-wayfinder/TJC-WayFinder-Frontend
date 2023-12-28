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
import { DestinationList } from "./destinationList";
import { useAtom } from "jotai";
import {  goLocation } from "@/atoms";
export function GoLocation() {
  const [open, setOpen] = React.useState(false);
  const isDesktop = useMediaQuery("(min-width: 768px)");
  const [destinationLocation, setDestinationLocation] = useAtom(goLocation);

  if (isDesktop) {
    return (
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button variant="outline" className="w-auto justify-start">
            {destinationLocation ? (
              <>{destinationLocation.label}</>
            ) : (
              <>Where are you going?</>
            )}
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-[200px] p-0" align="start">
          <DestinationList
            setOpen={setOpen}
            setDestinationLocation={setDestinationLocation}
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
            <>Where are you going?</>
          )}
        </Button>
      </DrawerTrigger>
      <DrawerContent>
        <div className="mt-4 border-t">
          <DestinationList
            setOpen={setOpen}
            setDestinationLocation={setDestinationLocation}
          />
        </div>
      </DrawerContent>
    </Drawer>
  );
}
