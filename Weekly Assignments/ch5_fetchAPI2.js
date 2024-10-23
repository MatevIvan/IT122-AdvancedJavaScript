async function logJSONData() {
    try {
      const response = await fetch("https://www.1800flowers.com/");
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const jsonData = await response.json();
      console.log(jsonData);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }
  
  logJSONData();