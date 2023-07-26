import React from 'react'
import { BrowserRouter as Router, Routes, Route, Link, Navigate } from 'react-router-dom'
import axios from 'axios';



export default function ProfilePhotoUpload() {

    useEffect(() => {
        axios.get("api/users/list/")
            .then(res => {
                console.log("user profiles are:")
                console.log(res.data)
                setAllUsers(res.data)
            })
            .catch(err => {
                console.log(err)
            })
    }, [])

    const [data, setData] = useState({
        title: "",
        description: "",
        image_url: "",
    });
    const [errors, setErrors] = useState({
        title: "",
        description: "",
        image_url: "",
    });


    const handleChange = ({ currentTarget: input }) => {
        let newData = { ...data };
        newData[input.name] = input.value;
        setData(newData);
    };

    const handleImageChange = (e) => {
        let newData = { ...data };
        newData["image_url"] = e.target.files[0];
        setData(newData);
    };

    const doSubmit = async (e) => {
        e.preventDefault();
        // const response = await API.createMyModelEntry(data);

        axios.post("api/users/<pk>/update")
        .then(
        ).catch(err => {
          console.log(err)
        })

        if (res.status === 400) {
            setErrors(res.data);
        }
    };


  return (
    <div>ProfilePhotoUpload</div>
  )
}
