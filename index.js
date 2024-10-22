// useEffect(() => {
//     const aboutSection = document.getElementById('index');
//     aboutSection.classList.add('slide-up');
// }, []);

useEffect(() => {
    const aboutSection = document.getElementById('about');
    
    const handleScroll = () => {
      const rect = aboutSection.getBoundingClientRect();
      const windowHeight = window.innerHeight;
  
      // Check if the "about" section is in view (adjust this based on when you want the animation to trigger)
      if (rect.top <= windowHeight * 0.75 && rect.bottom >= 0) {
        aboutSection.classList.add('slide-up');
      } else {
        aboutSection.classList.remove('slide-up'); // Remove if not needed
      }
    };
  
    // Add the scroll event listener
    window.addEventListener('scroll', handleScroll);
  
    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  