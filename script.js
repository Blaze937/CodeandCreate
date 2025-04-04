// Theme definitions with corresponding style properties
const themeDefinitions = {
  "cyberpunk": {
    background: "#090b10",
    textColor: "#33ff33",
    accentColor: "#54fcfc",
    fontFamily: "'Consolas', monospace",
    cardBackground: "rgba(10, 12, 18, 0.9)",
    cardBorder: "1px solid #33ff33",
    headerBackground: "rgba(9, 11, 16, 0.8)",
    buttonColor: "#33ff33",
    buttonHoverColor: "#54fcfc",
    layout: "grid",
    boxShadow: "0 0 15px rgba(51, 255, 51, 0.3)"
  },
  "nature": {
    background: "linear-gradient(to bottom,rgb(140, 197, 254),rgb(190, 245, 172))",
    textColor: "#333333",
    accentColor: "#4caf50",
    fontFamily: "'Georgia', serif",
    cardBackground: "#ffffff",
    cardBorder: "1px solid rgb(111, 212, 114)",
    headerBackground: "rgba(76, 175, 80, 0.1)",
    buttonColor: "#2e7d32",
    buttonHoverColor: "#388e3c",
    layout: "grid",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)"
  },
  "retro": {
    background: "#fdcf58",
    textColor: "#4a2511",
    accentColor: "#e84855",
    fontFamily: "'VT323', 'Courier', monospace",
    cardBackground: "#f7f6cf",
    cardBorder: "2px solid #4a2511",
    headerBackground: "#f7f6cf",
    buttonColor: "#e84855",
    buttonHoverColor: "#d1374e",
    layout: "grid",
    boxShadow: "5px 5px 0px #4a2511"
  },
  "minimalist": {
    background: "#ffffff",
    textColor: "#333333",
    accentColor: "#333333",
    fontFamily: "'Helvetica', 'Arial', sans-serif",
    cardBackground: "#ffffff",
    cardBorder: "1px solid #eeeeee",
    headerBackground: "#ffffff",
    buttonColor: "#333333",
    buttonHoverColor: "#555555",
    layout: "grid",
    boxShadow: "0 1px 3px rgba(0, 0, 0, 0.1)"
  },
  "futuristic": {
    background: "linear-gradient(to right, #141e30, #243b55)",
    textColor: "#ffffff",
    accentColor: "#64ffda",
    fontFamily: "'Orbitron', sans-serif, 'Arial'",
    cardBackground: "rgba(30, 40, 60, 0.8)",
    cardBorder: "1px solid #64ffda",
    headerBackground: "rgba(20, 30, 50, 0.8)",
    buttonColor: "#00bcd4",
    buttonHoverColor: "#64ffda",
    layout: "grid",
    boxShadow: "0 0 20px rgba(100, 255, 218, 0.3)"
  },
  "vintage": {
    background: "#f5f5dc",
    textColor: "#5d4037",
    accentColor: "#8d6e63",
    fontFamily: "'Playfair Display', serif, 'Times New Roman'",
    cardBackground: "#f9f5ea",
    cardBorder: "1px solid rgb(196, 88, 49)",
    headerBackground: "#efe8d8",
    buttonColor: "#8d6e63",
    buttonHoverColor: "#6d4c41",
    layout: "grid",
    boxShadow: "0 2px 4px rgba(93, 64, 55, 0.2)"
  },
  "ocean": {
    background: "linear-gradient(to bottom, #4fc3f7, #0288d1)",
    textColor: "black",
    accentColor: "#00acc1",
    fontFamily: "'Quicksand', sans-serif, 'Arial'",
    cardBackground: "rgba(255, 255, 255, 0.9)",
    cardBorder: "1px solid #b3e5fc",
    headerBackground: "rgba(3, 169, 244, 0.2)",
    buttonColor: "#0288d1",
    buttonHoverColor: "#0277bd",
    layout: "grid",
    boxShadow: "0 4px 8px rgba(2, 136, 209, 0.3)"
  },
  "space": {
    background: "linear-gradient(to bottom, #000000, #1a237e)",
    textColor: "#ffffff",
    accentColor: "#7986cb",
    fontFamily: "'Nova Square', sans-serif, 'Arial'",
    cardBackground: "rgba(13, 13, 33, 0.8)",
    cardBorder: "1px solid #3f51b5",
    headerBackground: "rgba(0, 0, 0, 0.5)",
    buttonColor: "#5c6bc0",
    buttonHoverColor: "#7986cb",
    layout: "grid",
    boxShadow: "0 0 25px rgba(121, 134, 203, 0.4)"
  }
};

// Function to apply a theme based on user input
function applyTheme() {
  const themeInput = document.getElementById('themeInput').value.toLowerCase().trim();
  
  // Find the best matching theme or generate one if no exact match
  let themeStyles = findOrGenerateTheme(themeInput);
  
  // Apply the theme styles to the page
  document.body.style.background = themeStyles.background;
  document.body.style.color = themeStyles.textColor;
  document.body.style.fontFamily = themeStyles.fontFamily;
  
  // Update header styles
  const header = document.querySelector('header');
  header.style.backgroundColor = themeStyles.headerBackground;
  
  // Update button styles
  const button = document.querySelector('button');
  button.style.backgroundColor = themeStyles.buttonColor;
  
  // Store original button color for hover effect
  button.onmouseenter = function() {
    this.style.backgroundColor = themeStyles.buttonHoverColor;
  };
  button.onmouseleave = function() {
    this.style.backgroundColor = themeStyles.buttonColor;
  };
  
  // Update all cards
  const cards = document.querySelectorAll('.card');
  cards.forEach(card => {
    card.style.backgroundColor = themeStyles.cardBackground;
    card.style.borderColor = themeStyles.cardBorder;
    card.style.boxShadow = themeStyles.boxShadow;
  });
  
  // Update heading colors
  const headings = document.querySelectorAll('h1, h2');
  headings.forEach(heading => {
    heading.style.color = themeStyles.accentColor;
  });
  
  // Update content layout if specified
  const content = document.querySelector('.content');
  if (themeStyles.layout === 'grid') {
    content.style.display = 'grid';
  } else if (themeStyles.layout === 'flex') {
    content.style.display = 'flex';
    content.style.flexDirection = 'column';
  }
}

// Function to find the best matching theme or generate a new one
function findOrGenerateTheme(themeInput) {
  // Check if we have an exact match
  for (const [themeName, themeStyles] of Object.entries(themeDefinitions)) {
    if (themeInput.includes(themeName)) {
      return themeStyles;
    }
  }
  
  // If no exact match, create a procedurally generated theme
  return generateTheme(themeInput);
}

// Function to procedurally generate a theme based on the input
function generateTheme(themeInput) {
  // Create a hash from the theme name for consistent generation
  let hash = 0;
  for (let i = 0; i < themeInput.length; i++) {
    hash = themeInput.charCodeAt(i) + ((hash << 5) - hash);
  }
  
  // Use the hash to generate colors
  const hue = Math.abs(hash % 360);
  const saturation = 60 + Math.abs((hash >> 8) % 40); // 60-100%
  const lightness = 40 + Math.abs((hash >> 16) % 20); // 40-60%
  
  // Create the primary color
  const primaryColor = `hsl(${hue}, ${saturation}%, ${lightness}%)`;
  const textColor = lightness > 50 ? '#333333' : '#ffffff';
  const accentHue = (hue + 180) % 360; // Complementary color
  const accentColor = `hsl(${accentHue}, ${saturation}%, ${lightness}%)`;
  
  // Choose a font family based on the hash
  const fontFamilies = [
    "'Arial', sans-serif",
    "'Georgia', serif",
    "'Verdana', sans-serif",
    "'Courier New', monospace",
    "'Trebuchet MS', sans-serif",
    "'Times New Roman', serif"
  ];
  const fontIndex = Math.abs((hash >> 24) % fontFamilies.length);
  
  return {
    background: `linear-gradient(to right, ${primaryColor}, ${lightenColor(primaryColor, 15)})`,
    textColor: textColor,
    accentColor: accentColor,
    fontFamily: fontFamilies[fontIndex],
    cardBackground: textColor === '#333333' ? '#ffffff' : 'rgba(30, 30, 30, 0.8)',
    cardBorder: `1px solid ${accentColor}`,
    headerBackground: `${primaryColor}22`, // Add transparency
    buttonColor: accentColor,
    buttonHoverColor: darkenColor(accentColor, 10),
    layout: 'grid',
    boxShadow: `0 4px 12px ${primaryColor}66`
  };
}

// Helper function to lighten a color
function lightenColor(color, percent) {
  if (color.startsWith('hsl')) {
    // Extract HSL values
    const values = color.match(/\d+/g).map(Number);
    return `hsl(${values[0]}, ${values[1]}%, ${Math.min(values[2] + percent, 100)}%)`;
  }
  return color;
}

// Helper function to darken a color
function darkenColor(color, percent) {
  if (color.startsWith('hsl')) {
    // Extract HSL values
    const values = color.match(/\d+/g).map(Number);
    return `hsl(${values[0]}, ${values[1]}%, ${Math.max(values[2] - percent, 0)}%)`;
  }
  return color;
}

// Apply default theme on load
window.onload = function() {
  document.getElementById('themeInput').value = "Minimalist";
  applyTheme();
};