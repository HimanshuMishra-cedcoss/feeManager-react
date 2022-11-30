import React from "react";
import { useState } from "react";
// import Button from "react-bootstrap/Button";
import Button from '@mui/material/Button';
import Form from "react-bootstrap/Form";
import axios from "axios";
import { TextField } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Register = () => {
  let navigate = useNavigate();
  const [image, setImage] = useState(null)
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

  const handleImageChange=(e)=> {
    e.preventDefault();

    let reader = new FileReader();
    let file = e.target.files[0];

    reader.onloadend = () => {
      setImage({
            image: file,
            imagePreviewUrl: reader.result
        });
    }

    reader.readAsDataURL(file)
}

const createItem=(newItem)=> {
  console.log('PHOTO:', newItem.image);
  const h = {}; //headers
  let data = new FormData();
  data.append('image', newItem.image);
  data.append('name', newItem.name);
  h.Accept = 'application/json'; //if you expect JSON response
  fetch('/api/item', {
    method: 'POST',
    headers: h,
    body: data
  }).then(response => {
      // TODO : Do something
  }).catch(err => {
      // TODO : Do something
  });
}

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
    <div>
         <div>
        <div htmlFor="SrNo">SrNo</div>
   
        <TextField
          halfWidth
          id="SrNo"
          type="number"
          onChange={(e) =>
            setStudentData({ ...studentData, SrNo: e.target.value })
          }
        />
        <div style={{display:"inline",margin:"10px"}}>

        <span>Photograph</span>
       { (image) ?<img src={image.imagePreviewUrl} width="50px"  className={'img-preview'} />:""}
     
    
        <input type="file" onChange={(e) => handleImageChange(e)} />
    </div>
    <div style={{display:"inline",margin:"10px"}}>

        <span>ID</span>

        {  (image) ?<img src={image.imagePreviewUrl} width="50px"  className={'img-preview'} />
      :
      ""
    }
        <input type="file" onChange={(e) => handleImageChange(e)} />
    </div>
      </div>
      <div>
        <div
          htmlFor="admissionNo
"
        >
          admissionNo
        </div>

        <TextField
          fullWidth
          id="admissionNo
"
          type="number"
          onChange={(e) =>
            setStudentData({ ...studentData, admissionNo: e.target.value })
          }
        />
      </div>

       <div>
        
        <div htmlFor="AadharNo">AadharNo</div>

        <TextField
          fullWidth
          id="AadharNo"
          type="number"
          onChange={(e) =>
            setStudentData({ ...studentData, AadharNo: e.target.value })
          }
        />
      </div>
      <div htmlFor="age">student Name</div>
      <TextField
        id="studentName"
        type="text"
        onChange={(e) =>
          setStudentData({ ...studentData, studentName: e.target.value })
        }
        fullWidth
      />
       <div htmlFor="age">Father Name</div>
      <TextField
        id="FatherName"
        type="text"
        onChange={(e) =>
          setStudentData({ ...studentData, FatherName: e.target.value })
        }
        fullWidth
      />
         <div className="form-group">
        <div htmlFor="motherName">motherName</div>

        <TextField
          fullWidth
          id="motherName"
          type="text"
          onChange={(e) =>
            setStudentData({ ...studentData, motherName: e.target.value })
          }
        />
      </div>
      <div className="form-group">
        <div htmlFor="permanentAddress">permanentAddress</div>

        <TextField
          fullWidth
          id="permanentAddress"
          type="text"
          onChange={(e) =>
            setStudentData({ ...studentData, permanentAddress: e.target.value })
          }
        />
      </div>
      <div className="form-group">
        <div htmlFor="address">Address</div>

        <TextField
          fullWidth
          id="address"
          type="text"
          onChange={(e) =>
            setStudentData({ ...studentData, address: e.target.value })
          }
        />
      </div>
      <div className="form-group">
        <div htmlFor="religion">religion</div>

        <TextField
          fullWidth
          id="religion"
          type="text"
          onChange={(e) =>
            setStudentData({ ...studentData, religion: e.target.value })
          }
        />
      </div>
      <div className="form-group">
        <div htmlFor="caste">caste</div>

        <TextField
          fullWidth
          id="caste"
          type="text"
          onChange={(e) =>
            setStudentData({ ...studentData, caste: e.target.value })
          }
        />
      </div>
      <div className="form-group">
        <div
          htmlFor="parentsOccupation
"
        >
          parentsOccupation
        </div>

        <TextField
          fullWidth
          id="parentsOccupation
"
          type="text"
          onChange={(e) =>
            setStudentData({
              ...studentData,
              parentsOccupation: e.target.value,
            })
          }
        />
      </div>
      <div className="form-group">
        <div htmlFor="parentAnnualInc">parentAnnualInc</div>

        <TextField
          fullWidth
          id="parentAnnualInc"
          type="text"
          onChange={(e) =>
            setStudentData({ ...studentData, parentAnnualInc: e.target.value })
          }
        />
      </div>
      <div>
        <div htmlFor="dob">dob</div>

        <TextField
          fullWidth
          id="dob"
          type="number"
          onChange={(e) =>
            setStudentData({ ...studentData, dob: e.target.value })
          }
        />
      </div>
      <div className="form-group">
        <div
          htmlFor="gender
"
        >
          gender
        </div>

        <TextField
          fullWidth
          id="gender
"
          type="text"
          onChange={(e) =>
            setStudentData({ ...studentData, gender: e.target.value })
          }
        />
      </div>
    
     

   
     
     
      <div className="form-group">
        <div htmlFor="addmissionFor">addmissionFor</div>

        <TextField
          fullWidth
          id="addmissionFor"
          type="text"
          onChange={(e) =>
            setStudentData({ ...studentData, addmissionFor: e.target.value })
          }
        />
      </div>


     
      <div className="form-group">
        <div htmlFor="lastExam">lastExam</div>

        <TextField
          fullWidth
          id="lastExam"
          type="text"
          onChange={(e) =>
            setStudentData({ ...studentData, lastExam: e.target.value })
          }
        />
      </div>
   
    
      <div className="form-group">
        <div htmlFor="previousSchool">previousSchool</div>

        <TextField
          fullWidth
          id="previousSchool"
          type="text"
          onChange={(e) =>
            setStudentData({ ...studentData, previousSchool: e.target.value })
          }
        />
      </div>
     
    
      <div className="form-group">
        <div
          htmlFor="medium
"
        >
          medium
        </div>

        <TextField
          fullWidth
          id="medium
"
          type="text"
          onChange={(e) =>
            setStudentData({ ...studentData, medium: e.target.value })
          }
        />
      </div>
      <div className="form-group">
        <div
          htmlFor="localAddress
"
        >
          localAddress
        </div>

        <TextField
          fullWidth
          id="localAddress
"
          type="text"
          onChange={(e) =>
            setStudentData({ ...studentData, localAddress: e.target.value })
          }
        />
      </div>
    
      <div className="form-group">
        <div htmlFor="parentName">Parent Name</div>
        {/* <input
        type="text"
        id="parentName"
        aria-describedby="passwordHelpBlock"
        onChange={(e)=>setStudentData({...studentData,parentName:e.target.value})}
      /> */}
        <TextField
          fullWidth
          type="text"
          id="parentName"
          aria-describedby="passwordHelpBlock"
          onChange={(e) =>
            setStudentData({ ...studentData, parentName: e.target.value })
          }
        />
      </div>
      <div className="form-group">
        <div htmlFor="parentNo">Parent Number</div>
        {/* <input
        type="number"
        id="parentNo"
        aria-describedby="passwordHelpBlock"
        onChange={(e)=>setStudentData({...studentData,parentNo:e.target.value})}
        /> */}
        <TextField
          fullWidth
          type="number"
          id="parentNo"
          aria-describedby="passwordHelpBlock"
          onChange={(e) =>
            setStudentData({ ...studentData, parentNo: e.target.value })
          }
        />
      </div>
      <div className="form-group">
        <div htmlFor="className">Class</div>
        {/* <input
        type="text"
        id="className"
        aria-describedby="passwordHelpBlock"
        onChange={(e)=>setStudentData({...studentData,class:e.target.value})}
        /> */}
        <TextField
          fullWidth
          input
          type="text"
          id="className"
          aria-describedby="passwordHelpBlock"
          onChange={(e) =>
            setStudentData({ ...studentData, class: e.target.value })
          }
        />
      </div>
      <div className="form-group">
        <div htmlFor="previousSchool">Previous School</div>

        <TextField
          fullWidth
          type="text"
          id="previousSchool"
          aria-describedby="passwordHelpBlock"
          onChange={(e) =>
            setStudentData({ ...studentData, previousSchool: e.target.value })
          }
        />
      </div>

      <div className="form-group">
        <div htmlFor="totalFee">Total Fees</div>

        <TextField
          fullWidth
          type="number"
          id="totalFee"
          aria-describedby="passwordHelpBlock"
          onChange={(e) =>
            setStudentData({ ...studentData, totalFee: e.target.value })
          }
        />
      </div>
      <div className="form-group">
        <div htmlFor="contactNo">contact No</div>

        <TextField
          fullWidth
          id="contactNo"
          type="number"
          onChange={(e) =>
            setStudentData({ ...studentData, contactNo: e.target.value })
          }
        />
      </div>
      <div>
        <div htmlFor="alterContactNo">alterContactNo</div>

        <TextField
          fullWidth
          id="alterContactNo"
          type="number"
          onChange={(e) =>
            setStudentData({ ...studentData, alterContactNo: e.target.value })
          }
        />
      </div>
      <div className="form-group">
        <Button
        style={{"marginTop":"20px"}}
        variant="contained"
          onClick={(e) => submitForm(e)}
        >
          Submit
        </Button>
      </div>
     
    </div>
  );
};

export default Register;
