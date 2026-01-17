import React from 'react'
import Card from './componentsForCard/Card'

const App = () => {

const barbieProfiles = [
  {
    username: "alex_smith",
    image: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg", // real person portrait
    coverImage: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg", // scenic cover
    description: "Software engineer and tech lover.",
    likes: 15420,
    views: 265000,
    posts: 82
  },
  {
    username: "sarah_johnson",
    image: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg",
    coverImage: "https://images.pexels.com/photos/414884/pexels-photo-414884.jpeg",
    description: "Digital artist and photographer.",
    likes: 22890,
    views: 402000,
    posts: 110
  },
  {
    username: "michael_lee",
    image: "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg",
    coverImage: "https://images.pexels.com/photos/33109/fall-autumn-red-season.jpg",
    description: "Travel blogger and explorer.",
    likes: 18450,
    views: 310500,
    posts: 96
  },
  {
    username: "emma_wilson",
    image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg",
    coverImage: "https://images.pexels.com/photos/210647/pexels-photo-210647.jpeg",
    description: "Fitness coach and wellness guide.",
    likes: 16780,
    views: 287000,
    posts: 89
  },
  {
    username: "liam_brown",
    image: "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg",
    coverImage: "https://images.pexels.com/photos/34950/pexels-photo.jpg",
    description: "Entrepreneur and startup mentor.",
    likes: 20110,
    views: 355600,
    posts: 101
  },
  {
    username: "olivia_martin",
    image: "https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg",
    coverImage: "https://images.pexels.com/photos/459225/pexels-photo-459225.jpeg",
    description: "Creative writer and storyteller.",
    likes: 19240,
    views: 333800,
    posts: 94
  }
];


  return (
    <div className=' h-full w-full p-3 items-start  flex  gap-6  bg-[#F6F6F6] 
    flws-nowrap'
     
     >    
     
     {
      barbieProfiles.map((elem)=>{
        return <Card info={elem} />
      })
     }
    </div> 
  )
}

export default App