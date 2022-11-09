import { Button } from "@chakra-ui/react";
import { useRouter } from "next/router";

export default function FirstPost() {
  const router = useRouter();
  return <Button onClick={() => router.push("/")}>return</Button>;
}
