import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";

export default function Home() {
  return (
    <main className="bg-[#328C2A] ">
      <div className="flex flex-col flex-wrap items-center justify-center h-full">
        <div className="py-5"></div>
        <Card className=" bg-[#E1ECDE] h-full max-w-[3/4]">
          <CardHeader>
            <CardTitle className="bg-white rounded-full text-center py-2 leading-2">
              Welcome to
              <br />
              WayFinder
            </CardTitle>
          </CardHeader>
          <CardContent>
            <Image
              className="w-auto h-auto"
              src="/logo.png"
              alt="WayFinder Logo"
              width={200}
              height={200}
              priority={true}
              quality={100}
            />
          </CardContent>
          <CardFooter className="flex items-center justify-center">
            <Button className="bg-[#328C2A]">Get Started!</Button>
          </CardFooter>
        </Card>
        <div className="text-xs py-5 text-white">This webapp is devloped by the alumni from 04/22</div>
      </div>
    </main>
  );
}
