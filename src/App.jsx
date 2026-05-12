import { useRef, useState } from "react";
import html2pdf from "html2pdf.js";

export default function App() {
  const pdfRef = useRef();

  const [data, setData] = useState({
    courseTitle: "",
    courseCode: "",
    assignmentNumber: "",
    assignmentTitle: "",
    studentName: "",
    studentId: "",
    program: "",
    semester: "",
    batch: "",
    teacherName: "",
    teacherDesignation: "",
    teacherDept: "",
    teacherCollege: "",
    submissionDate: "",
    blockAlign: "left",
  });

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const generatePDF = () => {
    const element = pdfRef.current;

    element.classList.add("pdf-export");

    const opt = {
      margin: 0,
      filename: "assignment-cover.pdf",
      image: { type: "jpeg", quality: 1 },
      html2canvas: {
        scale: 2,
        useCORS: true,
        scrollY: 0,
      },
      jsPDF: {
        unit: "px",
        format: [794, 1123],
        orientation: "portrait",
      },
    };

    html2pdf()
      .set(opt)
      .from(element)
      .save()
      .then(() => {
        element.classList.remove("pdf-export");
      });
  };

  const blockPosition =
    data.blockAlign === "left"
      ? "w-[430px] ml-0 text-left"
      : data.blockAlign === "center"
      ? "w-[430px] mx-auto text-left"
      : "w-[430px] ml-auto text-left";

  return (
    <div className="min-h-screen bg-gray-200 p-4 md:p-8">
      <div className="flex flex-col lg:flex-row gap-6 items-start">

        <div className="w-full lg:w-[340px] bg-white rounded-xl shadow-lg p-6">
          <h2 className="text-4xl font-bold text-center mb-6">
            Fill Information
          </h2>

          <div className="space-y-3">
            <Input name="courseTitle" placeholder="Course Title" value={data.courseTitle} onChange={handleChange} />
            <Input name="courseCode" placeholder="Course Code" value={data.courseCode} onChange={handleChange} />
            <Input name="assignmentNumber" placeholder="Assignment Number" value={data.assignmentNumber} onChange={handleChange} />
            <Input name="assignmentTitle" placeholder="Assignment Title" value={data.assignmentTitle} onChange={handleChange} />
            <Input name="studentName" placeholder="Student Name" value={data.studentName} onChange={handleChange} />
            <Input name="studentId" placeholder="Student ID" value={data.studentId} onChange={handleChange} />
            <Input name="program" placeholder="Program" value={data.program} onChange={handleChange} />
            <Input name="semester" placeholder="Semester" value={data.semester} onChange={handleChange} />
            <Input name="batch" placeholder="Batch" value={data.batch} onChange={handleChange} />
            <Input name="teacherName" placeholder="Teacher Name" value={data.teacherName} onChange={handleChange} />
            <Input name="teacherDesignation" placeholder="Teacher Designation" value={data.teacherDesignation} onChange={handleChange} />
            <Input name="teacherDept" placeholder="Department" value={data.teacherDept} onChange={handleChange} />
            <Input name="teacherCollege" placeholder="College Name" value={data.teacherCollege} onChange={handleChange} />
            <Input name="submissionDate" placeholder="Example: 4 May 2026" value={data.submissionDate} onChange={handleChange} />

            <select
              name="blockAlign"
              value={data.blockAlign}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg px-4 py-3 text-lg outline-none bg-white"
            >
              <option value="left">Submitted Block Left</option>
              <option value="center">Submitted Block Middle</option>
              <option value="right">Submitted Block Right</option>
            </select>
          </div>

          <button
            onClick={generatePDF}
            className="w-full mt-5 bg-green-600 hover:bg-green-700 text-white py-3 rounded-lg font-bold text-lg"
          >
            Generate PDF
          </button>
        </div>

        <div className="preview-area">
          <div className="mobile-preview">
            <div ref={pdfRef} className="pdf-page">
              <div className="cover-border">
                <h1 className="college-title">
                  Shyamoli Engineering College
                </h1>

                <h2 className="department-title">
                  Department of Computer Science and Engineering (CSE)
                </h2>

                <img src="/logo.png" alt="Logo" className="college-logo" />

                <div className="course-info">
                  <h3>
                    Course Title: {data.courseTitle || "Linear Algebra"}, Course Code: {data.courseCode || "MATH-2105"}
                  </h3>

                  <h3>
                    Assignment #{data.assignmentNumber || "01"}, Title: {data.assignmentTitle || "Matrix"}
                  </h3>
                </div>

                <div className={`submitted-section ${blockPosition}`}>
                  <h3>SUBMITTED BY:</h3>

                  <p>
                    Name: {data.studentName || "Tanjila Khanam Tamim"} <br />
                    ID: {data.studentId || "49/24|CSE-22"} <br />
                    Program: {data.program || "B.Sc. in CSE"} <br />
                    Semester: {data.semester || "3rd"} <br />
                    Batch: {data.batch || "5th"}
                  </p>

                  <h3 className="submitted-to">SUBMITTED TO:</h3>

                  <p>
                    {data.teacherName || "Khalid Bin Kaysar"} <br />
                    {data.teacherDesignation || "Lecturer, Mathematics"} <br />
                    {data.teacherDept || "Dept. Of Related Subjects"} <br />
                    {data.teacherCollege || "Shyamoli Engineering College"}
                  </p>

                  <h3 className="date-text">
                    DATE OF SUBMISSION: {data.submissionDate || "4 May 2026"}
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

function Input({ name, placeholder, value, onChange }) {
  return (
    <input
      type="text"
      name={name}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className="w-full border border-gray-300 rounded-lg px-4 py-3 text-lg outline-none focus:border-green-500"
    />
  );
}