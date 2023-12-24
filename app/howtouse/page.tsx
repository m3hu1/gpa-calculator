import React from "react";
import Header from "@/components/header";
import { CardTitle, CardHeader, Card } from "@/components/ui/card";

const HowToUse = () => {
  return (
    <div className="flex flex-col w-full min-h-screen p-10">
      <Header />
      <main className="flex flex-col gap-8">
        <Card>
          <CardHeader>
            <CardTitle className="custom-text-color-3 text-center underline">
              How to Use
            </CardTitle>
            <br />
            <div className="text-center">
              <p>
                To help you estimate your GPA, I have provided grade ranges
                based on the total marks scored last year. These ranges are
                indicative and can serve as a guide for predicting your expected
                grades.
              </p>
              <br />
              <p>Here are the average marks associated with each grade:</p>
              <br />
              <table className="mx-auto border-collapse border border-gray-700">
                <thead>
                  <tr>
                    <th className="border border-gray-700 p-2">Grade</th>
                    <th className="border border-gray-700 p-2">Total Marks</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-700 p-2">A+</td>
                    <td className="border border-gray-700 p-2">80+</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-700 p-2">A</td>
                    <td className="border border-gray-700 p-2">71-80</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-700 p-2">B+</td>
                    <td className="border border-gray-700 p-2">61-70</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-700 p-2">B</td>
                    <td className="border border-gray-700 p-2">52-60</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-700 p-2">C+</td>
                    <td className="border border-gray-700 p-2">43-51</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-700 p-2">C</td>
                    <td className="border border-gray-700 p-2">35-42</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-700 p-2">D</td>
                    <td className="border border-gray-700 p-2">32-35</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-700 p-2">F</td>
                    <td className="border border-gray-700 p-2">Below 32</td>
                  </tr>
                </tbody>
              </table>
              <br />
              <p>
                To calculate your GPA, you can select your expected grades based
                on your total marks. Use these ranges as a reference while
                selecting your grades.
              </p>
              <br />
              <p>
                Remember, this tool is designed to provide an estimate, and the
                actual grading criteria may vary. Some subjects have higher
                average marks, and some have lower, so the criteria for
                different subjects can differ. Feel free to add your courses,
                enter your grades, and let the GPA Calculator do the math for
                you!
              </p>
            </div>
          </CardHeader>
        </Card>
      </main>
    </div>
  );
};

export default HowToUse;
