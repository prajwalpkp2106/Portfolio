const images = [
    "https://images.unsplash.com/photo-1720048171230-c60d162f93a0?q=80&w=1974&auto=format&fit=crop",
    "https://plus.unsplash.com/premium_photo-1675553988173-a5249b5815fe?q=80&w=1964&auto=format&fit=crop",
    "https://plus.unsplash.com/premium_photo-1675297844586-534b030564e0?q=80&w=1964&auto=format&fit=crop",
    "https://plus.unsplash.com/premium_photo-1675555581018-7f1a352ff9a6?q=80&w=1964&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1719937050517-68d4e2a1702e?q=80&w=1974&auto=format&fit=crop",
  ];
  
  const container = document.querySelector(".image-cloud-container");
  
  images.forEach((src, index) => {
    const img = document.createElement("img");
    img.src = src;
    
    // Random position
    const x = Math.random() * 90;
    const y = Math.random() * 90;
    img.style.top = `${y}%`;
    img.style.left = `${x}%`;
  
    // Random animation delay for floating effect
    img.style.animationDelay = `${Math.random() * 5}s`;
  
    container.appendChild(img);
  });
  