import React, { useEffect } from "react";
import { Platform } from "react-native";

export const WebStyles: React.FC = () => {
  const isWeb = Platform.OS === "web";

  useEffect(() => {
    if (isWeb) {
      // Add global CSS styles for web
      const style = document.createElement("style");
      style.textContent = `
        * {
          box-sizing: border-box;
        }
        
        body {
          margin: 0;
          padding: 0;
          font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
        }
        
        #root {
          min-height: 100vh;
        }
        
        /* Custom scrollbar for webkit browsers */
        ::-webkit-scrollbar {
          width: 8px;
          height: 8px;
        }
        
        ::-webkit-scrollbar-track {
          background: #f1f1f1;
          border-radius: 4px;
        }
        
        ::-webkit-scrollbar-thumb {
          background: #c1c1c1;
          border-radius: 4px;
        }
        
        ::-webkit-scrollbar-thumb:hover {
          background: #a8a8a8;
        }
        
        /* Dark mode scrollbar */
        @media (prefers-color-scheme: dark) {
          ::-webkit-scrollbar-track {
            background: #2d2d2d;
          }
          
          ::-webkit-scrollbar-thumb {
            background: #404040;
          }
          
          ::-webkit-scrollbar-thumb:hover {
            background: #555555;
          }
        }
        
        /* Ensure proper scrolling behavior */
        .scrollable-container {
          overflow-y: auto;
          overflow-x: hidden;
        }
        
        /* Fix for React Native Web scrolling */
        [data-rn-scrollview] {
          overflow-y: auto !important;
        }
        
        /* Ensure proper list item styling */
        .rn-scrollview {
          overflow-y: auto !important;
        }
        
        /* Fix for FlatList on web */
        [data-rn-scrollview] > div {
          overflow-y: auto !important;
        }
        
        /* Smooth transitions for theme changes */
        * {
          transition: background-color 0.2s ease, color 0.2s ease, border-color 0.2s ease;
        }
        
        /* Focus styles for accessibility */
        button:focus,
        input:focus,
        select:focus,
        textarea:focus {
          outline: 2px solid #A763D7;
          outline-offset: 2px;
        }
        
        /* Print styles */
        @media print {
          body {
            background: white !important;
            color: black !important;
          }
          
          .no-print {
            display: none !important;
          }
        }
      `;

      document.head.appendChild(style);

      return () => {
        document.head.removeChild(style);
      };
    }
  }, [isWeb]);

  return null; // This component doesn't render anything
};
