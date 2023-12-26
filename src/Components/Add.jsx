import React,{useState} from 'react'
import { Button, Modal,FloatingLabel,Form } from 'react-bootstrap'
import { uploadNewVideoAPI } from "../services/allAPI"


function Add({setUploadVideoResponse}) {
  const [uploadVideo,setUploadVideo] = useState({
    id:"",caption:"",url:"",link:""
  })
  
  const [show, setShow] = useState(false);
  console.log(uploadVideo);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const getYoutubeEmbedLink = (e)=>{
    const {value} = e.target
    if(value.includes("v=")){
      let vID = value.split("v=")[1].slice(0,11)
    console.log(`https://www.youtube.com/embed/${vID}`);
    setUploadVideo({...uploadVideo,link:`https://www.youtube.com/embed/${vID}`})
    }else{
      setUploadVideo({...uploadVideo,link:""})
    }
  }
  const handleUpload =async ()=>{
    const {id,caption,url,link} = uploadVideo
    if(!id || !caption || !url || !link){
      alert("Uploading form is incomplete, Please fill the form completely!!!")
    }else{
      const result = await uploadNewVideoAPI(uploadVideo)
      console.log(result);
      if(result.status>=200 && result.status<300){
        // success
        handleClose()
        // reset uploadVideo
         setUploadVideo({
          id:"",caption:"",url:"",link:""
         })
         setUploadVideoResponse
      }else{
        alert(result.message)
      }
    }
  }

  return (
    <div>
      <div className="d-flex align-items-center">
        <h5>Upload A New Video</h5>
        <button onClick={handleShow} style={{color:'white'}} className='btn'><i style={{fontSize:'30px'}}  class="fa-solid fa-photo-film"></i></button>
      </div>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Upload A Video</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>
            Please Fill the Details!!!
          </p>
        <FloatingLabel
        controlId="floatingInput"
        label="Enter video Id"
        className="mb-3"
      >
        <Form.Control type="text" placeholder="Enter video Id" onChange={e=>setUploadVideo({...uploadVideo,id:e.target.value})} />
      </FloatingLabel>
      <FloatingLabel
        controlId="floatingInput"
        label="Enter video Caption"
        className="mb-3"
      >
        <Form.Control type="text" placeholder="Enter video Caption"  onChange={e=>setUploadVideo({...uploadVideo,caption:e.target.value})} />
      </FloatingLabel>
      <FloatingLabel
        controlId="floatingInput"
        label="Enter video Image URL"
        className="mb-3"
      >
        <Form.Control type="text" placeholder="Enter video Image URL" onChange={e=>setUploadVideo({...uploadVideo,url:e.target.value})} />
      </FloatingLabel>
      <FloatingLabel
        controlId="floatingInput"
        label="Enter Youtube video Link"
        className="mb-3"
      >
        <Form.Control type="text" placeholder="Enter Youtube video Link" onChange={e=>getYoutubeEmbedLink(e)} />
      </FloatingLabel>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button onClick={handleUpload} variant="primary">Upload</Button>
        </Modal.Footer>
      </Modal>
    </div>
  )
}

export default Add