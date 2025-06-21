import { SubTitle, Title } from "@/components/Title";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center">
      <Title>Not Found</Title>
      <SubTitle>Could not find requested resource.</SubTitle>
      <Link href="/">
        <h2 className="hoverEffect hover:scale-105 hover:text-lightGreen">
          Return Home
        </h2>
      </Link>
    </div>
  );
}
