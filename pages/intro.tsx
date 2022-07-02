import Image from 'next/image'

export default function About() {
    return (
        <div
        id="fontsss" 
        style={{
            fontFamily:"",
            height:"900px", 
            backgroundColor: "lightyellow",
            paddingLeft:"100px",
            paddingRight:"100px",
            textAlign:"center"
            }}>
          

<a style={{
        color:"black",
        padding: "10px 20px",
        fontSize:"40px",
}}>Tree Map</a>

<h1 style={{color:"black",
             textAlign: "left",
             padding: "10px 20px",
             fontSize:"22px",            
        }}>
<p>
{"Hello:))This is a collaborative project created by Cecilia, a photographer, who love taking portraits of trees, as she thinks every single tree has its personality(no, this term is too human-centered)--> characteristics( this is much better) -> treenality(perfect). "}
</p> 

<p>
She created this map for
<ul>
    <li>
    all of us who love trees can explore the trees around the globe
    </li>
    <li>
    for all different trees to be celebrated
    </li>
   
    </ul>
</p>

<p>

To join this Collaborative Project and grow more trees on the map: 
<ol>
1. First of all all all: you appreciate and love trees, you feel emotionally connected with trees, or you find trees genuinely interesting
</ol>
<ol>
2. You have a photo of the tree(s), you remember the location of the tree
</ol>
<ol>
3. Design a pixel icon for your tree, you can use tools like Pixilart or Dotpict
</ol>
<div style={{paddingLeft:"200px"}}>
    <Image 
      width= '200vw' 
      height='200vw'
    src={"/assets/FlorenceIcon.GIF"} alt="loading..."  />
</div>
<Image 
  width= '200vw' 
  height='200vw'
src={"/assets/brooklynBG.GIF"} alt="loading..."  />
</p>

I’ve been working on the back-end of the website, so hopefully, there will be a tree photo upload feature on the website soon (stay tuned). For now, please send tree portrait, location, pixel icon, and brief thoughts/feelings about the tree, through my <a style={{color:"black"}}href="mailto:chenyiyuecyy@gmail.com"> email </a>, I’ll update your trees on the map manually.  

</h1>
        </div>
    )};
