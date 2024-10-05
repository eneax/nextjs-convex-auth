import { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardDescription,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { SignInFlow } from "../types";

interface SignUpCardProps {
  setState: (state: SignInFlow) => void;
}

export const SignUpCard = ({ setState }: SignUpCardProps) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  return (
    <Card className="w-full h-full p-8">
      <CardHeader className="pt-0 px-0">
        <CardTitle>Sign up to continue</CardTitle>
        <CardDescription>Use your email or another service</CardDescription>
      </CardHeader>
      <CardContent className="px-0 pb-0 space-y-5">
        <form className="space-y-2.5">
          <Input
            disabled={false}
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <Input
            disabled={false}
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <Input
            disabled={false}
            type="password"
            placeholder="Confirm password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
          <Button type="submit" className="w-full" size="lg" disabled={false}>
            Continue
          </Button>
        </form>

        <Separator />

        <div className="flex flex-col gap-y-2.5">
          <Button
            disabled={false}
            variant="outline"
            onClick={() => {}}
            size="lg"
            className="w-full relative"
          >
            <FcGoogle className="size-5 absolute top-3 left-2.5" />
            Continue with Google
          </Button>
          <Button
            disabled={false}
            variant="outline"
            onClick={() => {}}
            size="lg"
            className="w-full relative"
          >
            <FaGithub className="size-5 absolute top-3 left-2.5" />
            Continue with GitHub
          </Button>
        </div>
        <p className="text-xs text-muted-foreground">
          Already have an account?{" "}
          <span
            onClick={() => setState("signIn")}
            className="text-sky-700 hover:underline cursor-pointer"
          >
            Sign in
          </span>
        </p>
      </CardContent>
    </Card>
  );
};
