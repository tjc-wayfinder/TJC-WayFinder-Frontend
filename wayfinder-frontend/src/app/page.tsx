import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";
export default function Home() {
  return (
    <div className="bg-[#328C2A] flex h-screen justify-center items-center ">

      <div >
        <Card className=" bg-[#E1ECDE] my-5">
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
          <CardFooter className="flex items-center justify-center basis-1">
            <Button className="bg-[#328C2A]">
              <Link href="/MapInput">Get Started!</Link></Button>
          </CardFooter>
        </Card>
        <div className="text-xs  text-white text-center">This webapp is devloped by the alumni from 04/22</div>
        </div>
    </div>
  );
}
