import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

function Login({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      className={cn(
        "relative mx-auto flex w-full max-w-3xl flex-1 flex-col",
        className,
      )}
      {...props}
    >
      <Card>
        <CardHeader>
          <CardTitle>Login to your Spotify Account</CardTitle>
        </CardHeader>
        <CardContent>
          <form>
            <div className="flex flex-col gap-6">
              <div className="grid gap-3">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="m@example.com"
                  required
                />
              </div>
              <div className="grid gap-3">
                <div className="flex items-center">
                  <Label htmlFor="password">Password</Label>
                  <a
                    href="#"
                    className="ml-auto inline-block text-sm underline-offset-4 hover:underline"
                  >
                    Forgot your password?
                  </a>
                </div>
                <Input id="password" type="password" required />
              </div>
              <div className="flex flex-col gap-3">
                <Button
                  type="submit"
                  className="w-full bg-[#1DB954] hover:bg-[#1ED760]"
                >
                  Login
                </Button>
                <Button
                  variant="outline"
                  className="w-full bg-white hover:bg-gray-50"
                >
                  Forgot password
                </Button>
              </div>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
export default Login;
