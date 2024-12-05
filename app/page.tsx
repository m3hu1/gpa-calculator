"use client";

import React, { useState } from "react";
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
import Select from "react-select";
import Header from "@/components/header";
import Footer from "@/components/footer";
import Script from "next/script";

interface CustomStyles {
  control: (provided: any, state: any) => any;
  option: (provided: any, state: any) => any;
  menu: (provided: any) => any;
  singleValue: (provided: any) => any;
  placeholder: (provided: any) => any;
}

const customStyles: CustomStyles = {
  control: (provided) => ({
    ...provided,
    border: "1px solid #ccc",
    borderRadius: "5px",
    backgroundColor: "#1E1E1E",
  }),
  option: (provided, state) => ({
    ...provided,
    backgroundColor: state.isSelected ? "#1E1E1E" : "#1E1E1E",
  }),
  menu: (provided) => ({
    ...provided,
    backgroundColor: "#1E1E1E",
  }),
  singleValue: (provided) => ({
    ...provided,
    color: "white",
  }),
  placeholder: (provided) => ({
    ...provided,
    color: "#9CA3AF",
    fontSize: "14px",
  }),
};

interface Course {
  name: string;
  credits: number;
  grade: string;
}

const Page = () => {
  const [isClearable, setIsClearable] = useState(true);
  const [isCustomCourse, setIsCustomCourse] = useState(false);
  const [customCourseCode, setCustomCourseCode] = useState("");
  const [courses, setCourses] = useState<Course[]>([]);
  const [selectedCourse, setSelectedCourse] = useState<{
    value: string;
    label: string;
    credits: number;
  } | null>(null);
  const [selectedCredits, setSelectedCredits] = useState("");
  const [selectedGrade, setSelectedGrade] = useState<string | null>(null);
  const [selectedYear, setSelectedYear] = useState<{
    value: string;
    label: string;
  } | null>(null);
  const gradeOptions: { value: string; label: string }[] = [
    { value: "A+", label: "A+" },
    { value: "A", label: "A" },
    { value: "B+", label: "B+" },
    { value: "B", label: "B" },
    { value: "C+", label: "C+" },
    { value: "C", label: "C" },
    { value: "D", label: "D" },
    { value: "F", label: "F" },
  ];
  const courseOptions: {
    label: string;
    options: { value: string; label: string; credits: number }[];
  }[] = [
    {
      label: "1st Year",
      options: [
        {
          value: "CSET101",
          label: "Computational Thinking and Programming",
          credits: 5,
        },
        { value: "EMAT101", label: "Engineering Calculus ", credits: 4 },
        {
          value: "EPHY111L",
          label: "Electromagnetics + Mechanics",
          credits: 5,
        },
        {
          value: "CSET108",
          label: "Environment and Sustainability",
          credits: 3,
        },
        {
          value: "CSET107",
          label: "Foundations of Innovation and Entrepreneurship",
          credits: 2,
        },
        { value: "CSET103 ", label: "New Age Life Skills", credits: 2 },
        {
          value: "CSET102",
          label: "Introduction to Electrical and Electronics Engineering",
          credits: 4,
        },
        {
          value: "EMAT102",
          label: "Linear Algebra and Ordinary Differential Equations",
          credits: 4,
        },
        {
          value: "CSET106",
          label: "Discrete Mathematical Structures",
          credits: 4,
        },
        { value: "CSET105", label: "Digital Design", credits: 4 },
        {
          value: "CSET109",
          label: "Object Oriented Programming using Java",
          credits: 6,
        },
        {
          value: "CUSTOM",
          label: "Custom Course",
          credits: 0,
        },
      ],
    },
    {
      label: "2nd Year",
      options: [
        {
          value: "CSET201",
          label: "Information Management Systems",
          credits: 4,
        },
        { value: "CSET202", label: "Data Structures using C++", credits: 7 },
        {
          value: "CSET203",
          label: "Microprocessors and Computer Architecture",
          credits: 4,
        },
        { value: "CSET240", label: "Probability and Statistics", credits: 5 },
        { value: "CSET205", label: "Software Engineering", credits: 4 },
        { value: "CSET211", label: "AI", credits: 3 },
        { value: "CSET212", label: "Blockchain", credits: 3 },
        { value: "CSET213", label: "Cyber Security", credits: 3 },
        { value: "CSET214", label: "Data Science", credits: 3 },
        { value: "CSET216", label: "Core", credits: 3 },
        {
          value: "CSET217",
          label: "DevOps",
          credits: 3,
        },
        { value: "CSET218", label: "Full Stack", credits: 3 },
        { value: "CSET224", label: "Cloud", credits: 3 },
        {
          value: "CSET206",
          label: "Design and Analysis of Algorithms",
          credits: 6,
        },
        {
          value: "CSET207",
          label: "Computer Networks",
          credits: 4,
        },
        {
          value: "CSET208",
          label: "Ethics for Engineers, Patents, Copyrights and IPR",
          credits: 1,
        },
        {
          value: "CSET209",
          label: "Operating Systems",
          credits: 4,
        },
        {
          value: "CSET210",
          label: "Design Thinking & Innovation",
          credits: 2,
        },
        { value: "CSETxxx", label: "Biological Machines", credits: 3 },
        { value: "CSETxxx", label: "Growth Hacking", credits: 3 },
        {
          value: "CSETxxx",
          label: "Linux Apache MySQL PHP (LAMP)",
          credits: 3,
        },
        { value: "CSETxxx", label: "Fostering Mental Health", credits: 3 },
        {
          value: "CSETxxx",
          label: "Quality and Reliability Engineering",
          credits: 3,
        },
        { value: "CSETxxx", label: "Sociology Of Gender", credits: 3 },
        { value: "CUSTOM", label: "Custom Course", credits: 0 },
      ],
    },
    {
      label: "3rd Year",
      options: [
        {
          value: "CSET301",
          label: "Artificial Intelligence and Machine Learning ",
          credits: 5,
        },
        {
          value: "CSET302",
          label: "Automata Theory and Computability",
          credits: 4,
        },
        {
          value: "CSET305",
          label: "High Performance Computing ",
          credits: 4,
        },
        {
          value: "CSET303",
          label: "Seminar on Special Topics in Emerging Areas",
          credits: 1,
        },
        {
          value: "CSET304",
          label: "Competitive Programming",
          credits: 2,
        },
        {
          value: "CSETxxx",
          label: "Specialization Elective",
          credits: 3,
        },
        {
          value: "CSETxxx",
          label: "Open Elective",
          credits: 3,
        },
        { value: "CUSTOM", label: "Custom Course", credits: 0 },
      ],
    },
  ];

  const deleteCourse = (index: number) => {
    const updatedCourses = [...courses];
    updatedCourses.splice(index, 1);
    setCourses(updatedCourses);
  };

  const addCourse = () => {
    if (
      (selectedCourse && selectedCourse.value !== "Select...") ||
      (isCustomCourse && customCourseCode)
    ) {
      const newCourse = {
        name: isCustomCourse ? customCourseCode : selectedCourse?.value || "",
        credits: parseInt(selectedCredits),
        grade: selectedGrade || "",
      };

      setCourses([...courses, newCourse]);
      setSelectedCourse(null);
      setIsCustomCourse(false);
      setCustomCourseCode("");
      setSelectedCredits("");
      setSelectedGrade(null);
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

  const filteredCourseOptions =
    courseOptions.find((year) => year.label === selectedYear?.value)?.options ||
    [];

  return (
    <div className="flex flex-col w-full min-h-screen p-10">
      <Header />
      <Script src="https://www.googletagmanager.com/gtag/js?id=G-M7PLQDK70Q" />
      <Script id="google-analytics">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
 
          gtag('config', 'G-M7PLQDK70Q');
        `}
      </Script>
      <main className="flex flex-col gap-8">
        <Card>
          <CardHeader>
            <CardTitle className="custom-text-color-3">Add Course</CardTitle>
            <CardDescription>Enter your course details below</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="courseName">Year</Label>
              <Select
                options={[
                  { value: "1st Year", label: "1st Year" },
                  { value: "2nd Year", label: "2nd Year" },
                  { value: "3rd Year", label: "3rd Year" },
                ]}
                value={selectedYear}
                onChange={(selectedOption) =>
                  selectedOption && setSelectedYear(selectedOption)
                }
                isSearchable={false}
                styles={customStyles}
                placeholder="Select Year"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="courseName">Course Name</Label>
              <Select
                id="courseName"
                options={filteredCourseOptions}
                value={isCustomCourse ? null : selectedCourse}
                defaultValue={null}
                onChange={(selectedOption) => {
                  if (selectedOption && selectedOption.value === "CUSTOM") {
                    setIsCustomCourse(true);
                  } else {
                    setSelectedCourse(selectedOption);
                    setIsCustomCourse(false);
                  }
                  setSelectedCredits(String(selectedOption?.credits || 0));
                }}
                styles={customStyles}
                placeholder={isCustomCourse ? "Custom Course" : "Select Course"}
                isClearable={isClearable}
              />
              {isCustomCourse && (
                <Input
                  id="customCourseInput"
                  placeholder="Enter the course code"
                  value={customCourseCode}
                  onChange={(e) => setCustomCourseCode(e.target.value)}
                  style={{
                    color: "white",
                    backgroundColor: "#1E1E1E",
                  }}
                />
              )}
            </div>
            <div className="space-y-2">
              <Label htmlFor="credits">Credits</Label>
              <Input
                id="credits"
                placeholder="Credits"
                required
                type="number"
                value={selectedCredits}
                onChange={(e) => setSelectedCredits(e.target.value)}
                onKeyPress={handleKeyPress}
                style={{ color: "white", backgroundColor: "#1E1E1E" }}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="grade">Grade</Label>
              <Select
                id="grade"
                options={gradeOptions}
                value={
                  gradeOptions.find(
                    (option) => option.value === selectedGrade
                  ) || null
                }
                defaultValue={null}
                onChange={(selectedOption) =>
                  setSelectedGrade(selectedOption?.value || null)
                }
                isSearchable={true}
                styles={customStyles}
                placeholder="Select Expected Grade"
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
                    <th className="text-left underline hidden sm:inline">
                      Course Code
                    </th>
                    <th className="text-left underline sm:hidden">Code</th>
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
      <br></br>
      <Footer />
    </div>
  );
};

export default Page;
