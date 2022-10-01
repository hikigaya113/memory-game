import React,{useState} from "react";

const Meme=({trim,setTrim})=>{
    const[form,setForm]=useState({
        template_id:trim.id,
        username:"Pratham_Garg",
        password:"Yy72!H5gDW!fQje",
        boxes: [],
    });
    const generateMeme=()=>{
        let url=`https://api.imgflip.com/caption_image?template_id=${form.template_id}&username=${form.username}&password=${form.password}`;
        form.boxes.map((box,index) => {
       url += `&boxes[${index}][text]=${box.text}`;
        });
        fetch(url).then(res => res.json())
        .then(data=>{
            setTrim({...trim, url:data.data.url});
        });
    };
 return(
<div className='meme'>
 <img src={trim.url} alt="meme" />
 <div>
     {[...Array(trim.box_count)].map((__,index) => (
        <input key={index}
        type='text' placeholder={`Meme Caption ${index+1}`} onChange={(e)=>{
          const newBoxes=form.boxes;
          newBoxes[index]={text:e.target.value};
          setForm({...form,boxes:newBoxes
        });
        }} />
     ))}
 </div>
 <div className="a1">
 <button onClick={generateMeme}>Create Meme</button>
  <button onClick={()=>{
      setTrim(null);
  }}>Choose Template</button>
 </div>
  
</div>
 );
};

export default Meme;