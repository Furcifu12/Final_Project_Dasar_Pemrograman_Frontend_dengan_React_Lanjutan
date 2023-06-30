import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import { Button, Input, Box, Stack } from "@chakra-ui/react";

const EditStudent = () => {
  const [formData, setFormData] = useState({
    fullname: "",
    profilePicture: "",
    address: "",
    phoneNumber: "",
    birthDate: "",
    gender: "",
    programStudy: "",
    faculty: "",
  });
  const [loading, setLoading] = useState(true);
  const { id } = useParams();
  const navigate = useNavigate();
  const [isDataLoaded, setIsDataLoaded] = useState(false);

  useEffect(() => {
    const fetchStudentData = async () => {
      try {
        const response = await fetch(`http://localhost:3001/student/${id}`);
        const studentData = await response.json();
        setFormData(studentData);
        setLoading(false);
        setIsDataLoaded(true);
      } catch (error) {
        console.error(error);
        setLoading(false);
        setIsDataLoaded(true);
      }
    };

    fetchStudentData();
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    let updatedFaculty = "";

    const facultyMapping = {
      Ekonomi: "Fakultas Ekonomi",
      Manajemen: "Fakultas Ekonomi",
      Akuntansi: "Fakultas Ekonomi",
      "Administrasi Publik": "Fakultas Ilmu Sosial dan Politik",
      "Administrasi Bisnis": "Fakultas Ilmu Sosial dan Politik",
      "Hubungan Internasional": "Fakultas Ilmu Sosial dan Politik",
      "Teknik Sipil": "Fakultas Teknik",
      Arsitektur: "Fakultas Teknik",
      Matematika: "Fakultas Teknologi Informasi dan Sains",
      Fisika: "Fakultas Teknologi Informasi dan Sains",
      Informatika: "Fakultas Teknologi Informasi dan Sains",
    };

    if (name === "programStudy" && facultyMapping.hasOwnProperty(value)) {
      updatedFaculty = facultyMapping[value];
    }

    setFormData({
      ...formData,
      [name]: value,
      faculty: updatedFaculty,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await fetch(`http://localhost:3001/student/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      navigate("/student");
    } catch (error) {
      console.error(error);
    }
  };

  if (!isDataLoaded) {
    return <p>Loading ...</p>;
  }

  return (
    <>
      <Navbar />
      <Box className="container" p={4}>
        <h1 className="text-dark mt-4 mb-4">Edit Student</h1>
        <Box d="flex" justifyContent="center" alignItems="center" h="200px">
          <Box
            w="200px"
            h="200px"
            borderRadius="50%"  // Set the borderRadius to 50% for a circle shape
            overflow="hidden"
            display="flex"
            justifyContent="center"
            alignItems="center"
            boxShadow="0px 0px 10px rgba(0, 0, 0, 0.1)"
          >
            <img
              src={formData.profilePicture}
              alt="Profile"
              className="img-fluid"
              style={{ width: '100%', height: '100%' }}  // Adjust the image to fit the circular container
            />
          </Box>
        </Box>
        <form onSubmit={handleSubmit} className="text-dark">
          <Stack spacing={4} mt={4}>
            <Box>
              <label htmlFor="fullname" className="form-label fs-5">
                Full Name:
              </label>
              <Input
                variant="outline"
                type="text"
                id="fullname"
                name="fullname"
                value={formData.fullname}
                onChange={handleChange}
                data-testid="name"
              />
            </Box>
            <Box>
              <label htmlFor="address" className="form-label fs-5">
                Address:
              </label>
              <Input
                variant="outline"
                type="text"
                id="address"
                name="address"
                value={formData.address}
                onChange={handleChange}
                data-testid="address"
              />
            </Box>
            <Box>
              <label htmlFor="phoneNumber" className="form-label fs-5">
                Phone Number:
              </label>
              <Input
                variant="outline"
                type="text"
                id="phoneNumber"
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleChange}
                data-testid="phoneNumber"
              />
            </Box>
            <Box>
              <label htmlFor="birthDate" className="form-label fs-5">
                Birth Date:
              </label>
              <Input
                variant="outline"
                type="date"
                id="birthDate"
                name="birthDate"
                value={formData.birthDate}
                onChange={handleChange}
                data-testid="date"
              />
            </Box>
            <Box>
              <label htmlFor="gender" className="form-label fs-5">
                Gender:
              </label>
              <Input
                as="select"
                id="gender"
                name="gender"
                value={formData.gender}
                onChange={handleChange}
                data-testid="gender"
              >
                <option value="">Select Gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
              </Input>
            </Box>
            <Box>
              <label htmlFor="programStudy" className="form-label fs-5">
                Program Study:
              </label>
              <Input
                as="select"
                id="programStudy"
                name="programStudy"
                value={formData.programStudy}
                onChange={handleChange}
                data-testid="prody"
              >
                <option value="">Select Program Study</option>
                <option value="Ekonomi">Ekonomi</option>
                <option value="Manajemen">Manajemen</option>
                <option value="Akuntansi">Akuntansi</option>
                <option value="Administrasi Publik">Administrasi Publik</option>
                <option value="Administrasi Bisnis">Administrasi Bisnis</option>
                <option value="Hubungan Internasional">
                  Hubungan Internasional
                </option>
                <option value="Teknik Sipil">Teknik Sipil</option>
                <option value="Arsitektur">Arsitektur</option>
                <option value="Matematika">Matematika</option>
                <option value="Fisika">Fisika</option>
                <option value="Informatika">Informatika</option>
              </Input>
            </Box>
            <Button type="submit" colorScheme="red" data-testid="edit-btn">
              Edit Student
            </Button>
          </Stack>
        </form>
      </Box>
    </>
  );
};

export default EditStudent;
