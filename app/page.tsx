"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  CardTitle,
  CardDescription,
  CardHeader,
  CardContent,
  CardFooter,
  Card,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";

interface Course {
  name: string;
  credits: number;
  grade: string;
}

const Page = () => {
  const [courses, setCourses] = useState<Course[]>([]);
  const [courseName, setCourseName] = useState("");
  const [credits, setCredits] = useState("");
  const [grade, setGrade] = useState("");

  const deleteCourse = (index: number) => {
    const updatedCourses = [...courses];
    updatedCourses.splice(index, 1);
    setCourses(updatedCourses);
  };

  const addCourse = () => {
    if (courseName && credits && grade) {
      const newCourse = {
        name: courseName,
        credits: parseInt(credits),
        grade: grade,
      };

      setCourses([...courses, newCourse]);

      setCourseName("");
      setCredits("");
      setGrade("");
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      addCourse();
    }
  };

  const calculateGPA = () => {
    const totalCredits = courses.reduce(
      (acc, course) => acc + course.credits,
      0
    );
    const totalScore = courses.reduce((acc, course) => {
      const gradeScore = getGradeScore(course.grade);
      return acc + gradeScore * course.credits;
    }, 0);

    const rawGPA = totalCredits === 0 ? 0 : totalScore / totalCredits;
    const roundedGPA = parseFloat(rawGPA.toFixed(2));
    return roundedGPA;
  };

  const getGradeScore = (grade: string) => {
    const gradeScores: Record<string, number> = {
      "A+": 10,
      A: 9,
      "B+": 8,
      B: 7,
      "C+": 6,
      C: 5,
      D: 4,
      F: 0,
    };
    return gradeScores[grade] || 0;
  };

  return (
    <div className="flex flex-col w-full min-h-screen p-10">
      <header className="flex items-center justify-between mb-10">
        <div className="flex items-center gap-2 text-lg font-semibold sm:text-base custom-text-color">
          <img src="/favicon.png" alt="Logo" className="w-8 h-8" />
          {}
          <span>GPA Calculator</span>
        </div>
        <Link href="https://github.com/m3hu1/gpa-calculator">
          <Button className="rounded-full" size="icon" variant="ghost">
            <img
              alt="GitHub Icon"
              height="32"
              src="/github.png"
              style={{
                aspectRatio: "32/32",
                objectFit: "cover",
              }}
              width="32"
            />
            <span className="sr-only">GitHub Profile</span>
          </Button>
        </Link>
      </header>
      <main className="flex flex-col gap-8">
        {}
        <Card>
          <CardHeader>
            <CardTitle className="custom-text-color-3">Add Course</CardTitle>
            <CardDescription>Enter your course details below</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {}
            <div className="space-y-2">
              <Label htmlFor="courseName">Course Name</Label>
              <Input
                id="courseName"
                placeholder="Course Name"
                required
                type="text"
                value={courseName}
                onChange={(e) => setCourseName(e.target.value)}
                onKeyPress={handleKeyPress}
                style={{ color: "white", backgroundColor: "#1E1E1E" }}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="credits">Credits</Label>
              <Input
                id="credits"
                placeholder="Credits"
                required
                type="number"
                value={credits}
                onChange={(e) => setCredits(e.target.value)}
                onKeyPress={handleKeyPress}
                style={{ color: "white", backgroundColor: "#1E1E1E" }}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="grade">Grade</Label>
              <Input
                id="grade"
                placeholder="Expected Grade"
                required
                type="text"
                value={grade}
                onChange={(e) => setGrade(e.target.value)}
                onKeyPress={handleKeyPress}
                style={{ color: "white", backgroundColor: "#1E1E1E" }}
              />
            </div>
          </CardContent>
          <CardFooter>
            <Button className="w-full custom-text-color" onClick={addCourse}>
              Add Course
            </Button>
          </CardFooter>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle className="custom-text-color-3">Your Courses</CardTitle>
            <CardDescription>
              All your added courses will appear here
            </CardDescription>
          </CardHeader>

          <CardContent>
            {courses.length > 0 ? (
              <table className="w-full">
                <thead>
                  <tr>
                    <th className="text-left underline">Course Name</th>
                    <th className="text-center underline">Credits</th>
                    <th className="text-center underline">Grade</th>
                    {}
                  </tr>
                </thead>
                <tbody>
                  {courses.map((course, index) => (
                    <tr key={index} className="">
                      <td>{course.name}</td>
                      <td className="text-center">{course.credits}</td>
                      <td className="text-center">{course.grade}</td>
                      <td className="text-right">
                        <Button
                          className="custom-text-color"
                          variant="ghost"
                          onClick={() => deleteCourse(index)}
                        >
                          Delete
                        </Button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            ) : (
              <div className="space-y-2">
                <p className="text-sm">No courses added yet.</p>
              </div>
            )}
          </CardContent>
        </Card>
        {}
        <Card>
          <CardHeader>
            <CardTitle className="custom-text-color-3">Your GPA</CardTitle>
            <CardDescription>
              Your calculated GPA will appear here
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-xl">{calculateGPA()}</p>
          </CardContent>
        </Card>
      </main>
    </div>
  );
};

export default Page;
