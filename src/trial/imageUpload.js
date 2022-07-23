import axios from 'axios';
import React,{useState} from 'react'

function ImageUpload() {
    const [newUser, setNewAuthor] = useState({
        name: '',
        birthdate: '',
        photo:''
    })


    const handleChange = (e) => {
        setNewAuthor({ ...newUser, [e.target.name]: e.target.value });
    }

    const handlePhoto = (e) => {
        setNewAuthor({ ...newUser, photo: e.target.files[0] });
        console.log(newUser.photo);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('photo', newUser.photo);
        formData.append('birthdate', newUser.birthdate);
        formData.append('name', newUser.name);
         

        axios.post('http://localhost:5000/users/add/', formData)
            .then(res => {
                console.log(res);
            })
            .catch(err => {
                console.log(err);
            })
    }

  return (
    <div>
          <form onSubmit={handleSubmit} encType='multipart/form-data'>
              <input
                  type="file"
                  accept='.png, .jpg, .jpeng'
                  name='photo'
                  onChange={handlePhoto}
              />
              <input
                  type="text"
                  placeholder='name'
                  name='name'
                  value={newUser.name}
                  onChange={handleChange}
              />
              <input
                  type="date"
                  name="birthdate"
                  value={newUser.date}
                  onChange={handleChange}
              />
              <div className='bg'>
                  
              </div>
              <input
                  type="submit"
              />
          </form> 
    </div>
  )
}

export default ImageUpload