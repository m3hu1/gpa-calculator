import { Button } from "@/components/ui/button"
import { CardTitle, CardDescription, CardHeader, CardContent, CardFooter, Card } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"

export function gpa() {
  return (
    <div className="flex flex-col w-full min-h-screen p-10">
      <header className="flex items-center justify-between mb-10">
        <div className="flex items-center gap-2 text-lg font-semibold sm:text-base">
          <span>GPA Calculator</span>
        </div>
        <Button className="rounded-full" size="icon" variant="ghost">
          <img
            alt="Avatar"
            className="rounded-full border"
            height="32"
            src="/placeholder.svg"
            style={{
              aspectRatio: "32/32",
              objectFit: "cover",
            }}
            width="32"
          />
          <span className="sr-only">User Profile</span>
        </Button>
      </header>
      <main className="flex flex-col gap-8">
        <Card>
          <CardHeader>
            <CardTitle>Add Course</CardTitle>
            <CardDescription>Enter your course details below</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="courseName">Course Name</Label>
              <Input id="courseName" placeholder="Course Name" required type="text" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="credits">Credits</Label>
              <Input id="credits" placeholder="Credits" required type="number" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="grade">Grade</Label>
              <Input id="grade" placeholder="Grade (A-F)" required type="text" />
            </div>
          </CardContent>
          <CardFooter>
            <Button className="w-full">Add Course</Button>
          </CardFooter>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Your Courses</CardTitle>
            <CardDescription>All your added courses will appear here</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <p className="text-sm">No courses added yet.</p>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Your GPA</CardTitle>
            <CardDescription>Your calculated GPA will appear here</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-xl">-</p>
          </CardContent>
        </Card>
      </main>
    </div>
  )
}

export default gpa;
