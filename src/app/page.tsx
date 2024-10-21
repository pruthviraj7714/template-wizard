import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle, Code, Layout, Zap } from "lucide-react"
import Link from "next/link"

export default function Landing() {
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <header className="px-4 lg:px-6 h-14 flex items-center">
        <Link className="flex items-center justify-center" href="#">
          <Zap className="h-6 w-6" />
          <span className="ml-2 text-2xl font-bold">TemplateWizard</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#features">
            Features
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#pricing">
            Pricing
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#contact">
            Contact
          </Link>
        </nav>
      </header>
      <main className="flex-1 mx-auto">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                  Create Stunning Landing Pages in Minutes
                </h1>
                <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                  TemplateWizard empowers you to build beautiful, high-converting landing pages without any coding skills.
                </p>
              </div>
              <div className="space-x-4">
                <Button>Get Started</Button>
                <Button variant="outline">Learn More</Button>
              </div>
            </div>
          </div>
        </section>
        <section id="features" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">Why Choose TemplateWizard?</h2>
            <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-3">
              <Card>
                <CardHeader>
                  <Layout className="h-10 w-10 mb-2" />
                  <CardTitle>Drag-and-Drop Builder</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>Create stunning layouts with our intuitive drag-and-drop interface. No coding required.</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <Code className="h-10 w-10 mb-2" />
                  <CardTitle>Customizable Templates</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>Choose from hundreds of professionally designed templates and customize them to fit your brand.</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <Zap className="h-10 w-10 mb-2" />
                  <CardTitle>Lightning Fast</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>Our optimized templates ensure your landing pages load quickly, improving user experience and SEO.</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        <section id="pricing" className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">Simple, Transparent Pricing</h2>
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              <Card>
                <CardHeader>
                  <CardTitle>Basic</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-4xl font-bold mb-2">$19/mo</div>
                  <ul className="space-y-2">
                    <li className="flex items-center">
                      <CheckCircle className="h-5 w-5 mr-2 text-green-500" />
                      5 Landing Pages
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-5 w-5 mr-2 text-green-500" />
                      Basic Templates
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-5 w-5 mr-2 text-green-500" />
                      Email Support
                    </li>
                  </ul>
                  <Button className="w-full mt-4">Choose Basic</Button>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Pro</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-4xl font-bold mb-2">$49/mo</div>
                  <ul className="space-y-2">
                    <li className="flex items-center">
                      <CheckCircle className="h-5 w-5 mr-2 text-green-500" />
                      Unlimited Landing Pages
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-5 w-5 mr-2 text-green-500" />
                      Premium Templates
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-5 w-5 mr-2 text-green-500" />
                      Priority Support
                    </li>
                  </ul>
                  <Button className="w-full mt-4">Choose Pro</Button>
                </CardContent>
              </Card>
              <Card className="sm:col-span-2 lg:col-span-1">
                <CardHeader>
                  <CardTitle>Enterprise</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-4xl font-bold mb-2">Custom</div>
                  <ul className="space-y-2">
                    <li className="flex items-center">
                      <CheckCircle className="h-5 w-5 mr-2 text-green-500" />
                      Unlimited Everything
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-5 w-5 mr-2 text-green-500" />
                      Custom Templates
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-5 w-5 mr-2 text-green-500" />
                      24/7 Dedicated Support
                    </li>
                  </ul>
                  <Button className="w-full mt-4">Contact Sales</Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        <section id="contact" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Ready to Get Started?</h2>
                <p className="max-w-[600px] text-muted-foreground md:text-xl">
                  Join thousands of satisfied customers and start creating amazing landing pages today.
                </p>
              </div>
              <div className="w-full max-w-sm space-y-2">
                <form className="flex space-x-2">
                  <input
                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 max-w-lg flex-1"
                    placeholder="Enter your email"
                    type="email"
                  />
                  <Button type="submit">Sign Up</Button>
                </form>
                <p className="text-xs text-muted-foreground">
                  By signing up, you agree to our{" "}
                  <Link className="underline underline-offset-2" href="#">
                    Terms & Conditions
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-muted-foreground">© 2024 TemplateWizard. All rights reserved.</p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Terms of Service
          </Link>
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Privacy
          </Link>
        </nav>
      </footer>
    </div>
  )
}