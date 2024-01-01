import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import { schlocations, schLocation } from "./locations";
export function SchLocationList({
  setOpen,
  setSelectedschLocation,
}: {
  setOpen: (open: boolean) => void;
  setSelectedschLocation: (schLocation: schLocation | null) => void;
}) {
  return (
    <Command>
      <CommandInput placeholder="Filter locations" />
      <CommandList>
        <CommandEmpty>No results found.</CommandEmpty>
        <CommandGroup>
          {schlocations.map((schLocation) => (
            <CommandItem
              key={schLocation.value}
              value={schLocation.value}
              onSelect={(value) => {
                setSelectedschLocation(
                  schlocations.find((priority) => priority.value === value) ||
                    null
                );
                setOpen(false);
              }}
            >
              {schLocation.label}
            </CommandItem>
          ))}
        </CommandGroup>
      </CommandList>
    </Command>
  );
}
