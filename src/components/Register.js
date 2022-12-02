import React from "react";
import { useState } from "react";
// import Button from "react-bootstrap/Button";
import { PageHeader, Card, Row, Col, Upload } from "antd";
import { Button, Checkbox, Form, Input } from "antd";
import { UploadOutlined } from "@ant-design/icons";

// import Button from "@mui/material/Button";s
// import Form from "react-bootstrap/Form";
import axios from "axios";
import { TextField } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Register = () => {
  let navigate = useNavigate();
  const [image, setImage] = useState(null);
  const [studentData, setStudentData] = useState({
    AadharNo: "",
    SrNo: "",
    addmissionFor: "",
    admissionNo: "",
    alterContactNo: "",
    caste: "",
    contactNo: "",
    dob: "",
    fatherName: "",
    gender: "",
    lastExam: "",
    localAddress: "",
    medium: "",
    motherName: "",
    parentAnnualInc: "",
    parentsOccupation: "",
    permanentAddress: "",
    previousSchool: "",
    religion: "",
    studentName: "",
  });

  const handleImageChange = (e) => {
    e.preventDefault();

    let reader = new FileReader();
    let file = e.target.files[0];

    reader.onloadend = () => {
      setImage({
        image: file,
        imagePreviewUrl: reader.result,
      });
    };

    reader.readAsDataURL(file);
  };

  const createItem = (newItem) => {
    console.log("PHOTO:", newItem.image);
    const h = {}; //headers
    let data = new FormData();
    data.append("image", newItem.image);
    data.append("name", newItem.name);
    h.Accept = "application/json"; //if you expect JSON response
    fetch("/api/item", {
      method: "POST",
      headers: h,
      body: data,
    })
      .then((response) => {
        // TODO : Do something
      })
      .catch((err) => {
        // TODO : Do something
      });
  };

  const submitForm = (e) => {
    e.preventDefault();

    console.log(studentData);

    axios
      .post("http://localhost:4000/register", studentData)
      .then(function (response) {
        console.log(response.data);
        navigate("/");
      });
  };
  return (
    <>
      <PageHeader
        className="site-page-header"
        // onBack={() => null}
        title="Register"
        // avatar={{
        //   src: "https://avatars1.githubusercontent.com/u/8186664?s=460&v=4",
        // }}
        subTitle="Here You Can Register Student"
      />
      <br />
      <Row justify="center">
        <Col span={20}>
          <Form layout="vertical">
            <Form.Item label="Sr. No" name="SrNo">
              <Input
                onChange={(e) =>
                  setStudentData({
                    ...studentData,
                    SrNo: e.target.value,
                  })
                }
              />
            </Form.Item>
            <Row justify={"space-between"}>
              <Col span={12}>
                <Form.Item label="Photograph">
                  <Upload>
                    <Button icon={<UploadOutlined />}>Click to Upload</Button>
                  </Upload>
                </Form.Item>
              </Col>
              <Col span={12}>
                <Form.Item label="Id Photo">
                  <Upload>
                    <Button icon={<UploadOutlined />}>Click to Upload</Button>
                  </Upload>
                </Form.Item>
              </Col>
            </Row>
            <Form.Item label="Admission No">
              <Input
                onChange={(e) =>
                  setStudentData({
                    ...studentData,
                    admissionNo: e.target.value,
                  })
                }
              />
            </Form.Item>
            <Form.Item label="Sessions">
              <Input
                onChange={(e) =>
                  setStudentData({
                    ...studentData,
                    session: e.target.value,
                  })
                }
              />
            </Form.Item>
            <Form.Item label="Aadhar Number">
              <Input
                onChange={(e) =>
                  setStudentData({
                    ...studentData,
                    AadharNo: e.target.value,
                  })
                }
              />
            </Form.Item>
            <Form.Item label="Student Name">
              <Input
                onChange={(e) =>
                  setStudentData({
                    ...studentData,
                    studentName: e.target.value,
                  })
                }
              />
            </Form.Item>
            <Form.Item label="Father Name">
              <Input
                onChange={(e) =>
                  setStudentData({
                    ...studentData,
                    fatherName: e.target.value,
                  })
                }
              />
            </Form.Item>
            <Form.Item label="Mother Name">
              <Input
                onChange={(e) =>
                  setStudentData({
                    ...studentData,
                    motherName: e.target.value,
                  })
                }
              />
            </Form.Item>
            <Form.Item label="Permanent Address">
              <Input
                onChange={(e) =>
                  setStudentData({
                    ...studentData,
                    permanentAddress: e.target.value,
                  })
                }
              />
            </Form.Item>
            <Form.Item label="Local Address">
              <Input
                onChange={(e) =>
                  setStudentData({
                    ...studentData,
                    localAddress: e.target.value,
                  })
                }
              />
            </Form.Item>
            <Form.Item label="Religion">
              <Input
                onChange={(e) =>
                  setStudentData({
                    ...studentData,
                    religion: e.target.value,
                  })
                }
              />
            </Form.Item>
            <Form.Item label="Caste">
              <Input
                onChange={(e) =>
                  setStudentData({
                    ...studentData,
                    caste: e.target.value,
                  })
                }
              />
            </Form.Item>
            <Form.Item label="Parent's Occupation">
              <Input
                onChange={(e) =>
                  setStudentData({
                    ...studentData,
                    parentsOccupation: e.target.value,
                  })
                }
              />
            </Form.Item>
            <Form.Item label="Parent's Annual Income">
              <Input
                onChange={(e) =>
                  setStudentData({
                    ...studentData,
                    parentAnnualInc: e.target.value,
                  })
                }
              />
            </Form.Item>
            <Form.Item label="Date Of Birth">
              <Input
                onChange={(e) =>
                  setStudentData({
                    ...studentData,
                    dob: e.target.value,
                  })
                }
              />
            </Form.Item>
            <Form.Item label="Gender">
              <Input
                onChange={(e) =>
                  setStudentData({
                    ...studentData,
                    gender: e.target.value,
                  })
                }
              />
            </Form.Item>
            <Form.Item label="Class Applied For Admission">
              <Input
                onChange={(e) =>
                  setStudentData({
                    ...studentData,
                    addmissionFor: e.target.value,
                  })
                }
              />
            </Form.Item>
            <Form.Item label="Name of Class/Exam Passed">
              <Input
                onChange={(e) =>
                  setStudentData({
                    ...studentData,
                    lastExam: e.target.value,
                  })
                }
              />
            </Form.Item>
            <Form.Item label="Contact Number">
              <Input
                onChange={(e) =>
                  setStudentData({
                    ...studentData,
                    contactNo: e.target.value,
                  })
                }
              />
            </Form.Item>
            <Form.Item label="Alternate Contact Number">
              <Input
                onChange={(e) =>
                  setStudentData({
                    ...studentData,
                    alterContactNo: e.target.value,
                  })
                }
              />
            </Form.Item>
          </Form>
        </Col>
      </Row>
    </>
  );
};

export default Register;
