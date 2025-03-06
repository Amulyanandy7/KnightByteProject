import React,  { useRef } from 'react';
import Layout from "./Layout"
import Home from './Home';
import About from './About';
import Menu from './Menu';


const Franchise = () => {
  const videoRef = useRef(null);
  return (
    <>
   <>
   <Layout/>
   <div style={{position:'relative',width:'100%',margin:'0 auto'}}>
     <video
        ref={videoRef}
        src="./images/franchise.mp4"
        width="100%"
        height="757"
        type="video/mp4"
        style={{ objectFit: 'cover' }}
        loop
        muted
        autoPlay
        playsInline // Ensures autoplay works on mobile devices.
      />
       <div style={{ textAlign: 'center', marginTop: '10px' }}>
      </div>
    <div style={{display:'flex',justifyContent:'space-between',backgroundColor:'rgba(1,1,1,0.8)',width:'100%'}}>
    
    <h1 style={{display:'flex',fontFamily:'nicotine',fontSize:'60px', position:'absolute',top:'260px',color:'white',paddingLeft:'340px'}}>Franchise with knight bite<br/><h1 style={{display:'flex',fontFamily:'nicotine',fontSize:'25px', position:'absolute',top:'70px',color:'white',paddingLeft:'80px'}} >get started with the modern way of doing business</h1></h1>
    <a href='https://docs.google.com/forms/d/e/1FAIpQLScbn9-k82FPvK7vaPUOtnSUNMtcsTlkdxPIdIAG_d7HvftUlA/viewform'><button style={{backgroundColor:'#ff5672',fontFamily:'nunito',fontSize:'19px',padding:'11px 42px',fontWeight:'700',borderRadius:'30px',outline:'none', border:'none',cursor:'pointer', transition:'all 0.3s', position:'absolute',top:'450px',color:'white',marginLeft:'43%'}}>APPLY NOW</button></a>
    </div>
    </div>

    <div style={{display:'flex',flexDirection:'column',textAlign:'center'}}>
      <h1 style={{textAlign:'center'}}>Mission and Vision</h1>
      <h4 style={{textAlign:'center'}}>Our Mission is to deliver the<br/> best food with the ultimate customer service.<br/>
      Our Vision is to be the <br/>most favourite food chain brand in the country and world.</h4>
    </div>

    <div style={{width:'85vw',height:'2.5px',margin:'0 auto 40px',background:'#c77bf4'}}></div>

    <h1 style={{textAlign:'center'}}>Key Benefits Of Knight Bite Franchise</h1>
    <div style={{display:'grid',flexDirection:'column'}}>
    <div style={{display:'flex'}}>
       <div style={{display:'flex',flexDirection:'column'}}><img src='./images/1.jpg' style={{ position:'absolute',top:'1090px',width:'85px',height:'90px',paddingLeft:'250px'}}></img><h1 style={{ position:'absolute',top:'1190px',height:'145px',paddingLeft:'220px',fontSize:'18px'}}>LOW INVESTMENT</h1><br/><h6 style={{ position:'absolute',top:'1210px',height:'145px',paddingLeft:'200px',textAlign:'center'}}>No need of prime roadside location, interior <br/>decor. A office desk and any well hygenic<br/>kitchen space is enough.</h6></div>
       <div style={{display:'flex',flexDirection:'column'}}><img src='./images/2.jpg' style={{ position:'absolute',top:'1090px',width:'85px',height:'90px',paddingLeft:'610px'}}></img><h1 style={{ position:'absolute',top:'1190px',height:'145px',paddingLeft:'560px',fontSize:'18px'}}>LOW MAINTAINANCE</h1><br/><h6 style={{ position:'absolute',top:'1210px',height:'145px',paddingLeft:'545px',textAlign:'center'}}>The hygiene, rent, staff and storage is the <br/>only maintenance the franchise would have<br/> to focus on.</h6></div>
       <div style={{display:'flex',flexDirection:'column'}}><img src='./images/3.jpg' style={{ position:'absolute',top:'1090px',width:'85px',height:'90px',paddingLeft:'910px'}}></img><h1 style={{ position:'absolute',top:'1190px',paddingLeft:'890px',fontSize:'18px'}}>BASIC SKILLSET</h1><br/><h6 style={{ position:'absolute',top:'1210px',height:'145px',paddingLeft:'850px',textAlign:'center'}}>Anyone with basic training can step into the<br/>shoes of the staff. No serious training is<br/>required. Materials are sent.</h6></div>
       <div style={{display:'flex',flexDirection:'column'}}><img src='./images/4.jpg' style={{ position:'absolute',top:'1090px',width:'85px',height:'90px',paddingLeft:'1190px'}}></img><h1 style={{ position:'absolute',top:'1190px',paddingLeft:'1180px',fontSize:'18px'}}>IN-HOUSE POS</h1><br/><h6 style={{ position:'absolute',top:'1210px',height:'145px',paddingLeft:'1130px',textAlign:'center'}}>POS will be provided to manage and track<br/>orders with ease. All the applications are<br/>interconnected to the POS. Moreover call<br/>centre customer support will also be<br/>Provided.</h6></div>
    </div>

    <div style={{display:'grid',flexDirection:'column'}}>
    <div style={{display:'flex'}}>
    <div style={{display:'flex',flexDirection:'column'}}><img src='./images/5.jpg' style={{ position:'absolute',top:'1320px',width:'85px',height:'90px',paddingLeft:'610px'}}></img><h1 style={{ position:'absolute',top:'1410px',height:'145px',paddingLeft:'560px',fontSize:'18px'}}>GOOD PROFIT MARGIN</h1><br/><h6 style={{ position:'absolute',top:'1430px',height:'145px',paddingLeft:'555px',textAlign:'center'}}>Establishment running cost is much lesser<br/>than traditional restaurant. You are in for a<br/>good profit margin.</h6></div>
    <div style={{display:'flex',flexDirection:'column'}}><img src='./images/6.jpg' style={{ position:'absolute',top:'1320px',width:'85px',height:'90px',paddingLeft:'910px'}}></img><h1 style={{ position:'absolute',top:'1410px',paddingLeft:'870px',fontSize:'18px'}}>PANDEMIC FRIENDLY</h1></div><br/><h6 style={{ position:'absolute',top:'1430px',height:'145px',paddingLeft:'855px',textAlign:'center'}}>Knight Bite is the most successful business<br/>to run hassle-free even during the Pandemic.<br/>The faith in Knight Bite has taken a hit due to<br/>its high efficiency and extraordinary<br/>sustainability</h6> </div>
     </div>
    </div>

    <div style={{width:'85vw',height:'2.5px',marginLeft:'100px',background:'#c77bf4',position:'absolute',top:'1620px'}}></div>

    <div>
    <h2 style={{textAlign:'center',position:'absolute',top:'1650px',marginLeft:'50%'}}>Apply here</h2>
      <h5 style={{textAlign:'center',position:'absolute',top:'1680px',marginLeft:'48.5%'}}>Request For Initial Meeting</h5>
      <img src='./images/apply-grid.png' height='500px' width='900px' style={{margin:'10px 30px 0px 350px',position:'absolute',top:'1780px'}}></img>
     <a href='https://docs.google.com/forms/d/e/1FAIpQLScbn9-k82FPvK7vaPUOtnSUNMtcsTlkdxPIdIAG_d7HvftUlA/viewform'> <button style={{backgroundColor:'#ff5672',fontFamily:'nunito',fontSize:'19px',padding:'11px 42px',fontWeight:'700',borderRadius:'30px',outline:'none', border:'none',cursor:'pointer', transition:'all 0.3s', position:'absolute',top:'2360px',color:'white',marginLeft:'48%'}}>APPLY NOW</button></a>
      <div style={{width:'85vw',height:'2.5px',marginLeft:'100px',background:'#c77bf4',position:'absolute',top:'2450px'}}></div>
      </div>

      <div style={{ position: 'absolute', top: '2490px', margin: '10px 0 0 480px', textAlign: 'center' }}>
      <h2 style={{ margin: 0, display: 'inline-block' }}>Franchise Queries</h2>
      <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '20px', gap: '20px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <img src="./images/footer-1.jpg" width="50px" height="50px" alt="Franchise Brochure" />
          <a href="brochure.pdf"><h4>Franchise</h4></a>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <img src="./images/footer-3.jpg" width="50px" height="50px" alt="Phone Icon" />
          <h4>08047192034</h4>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <img src="./images/footer-2.jpg" width="50px" height="50px" alt="Email Icon" />
          <h4>info@knight-bite.com</h4>
        </div>
      </div>
    </div>
      <div style={{display:'flex',alignItems:'center',justifyContent:'center',background:'linear-gradient(90deg,#C77BF4 0%,#FF5672 100%)',boxShadow:'-5px -5px 19px rgba(0,0,0,.23)',height:'50px',width:'100%',color:'#fff',fontSize:'18px',position:'absolute',top:'2680px'}}>
      <h5>Ⓒ Copyright 2024. Knight Bite Foods Pvt. Ltd. All Rights Reserved</h5>
    </div>
    
    </>
    
    </>       
  )
}

export default Franchise