# google sheets clone
## Project Description

Develop a web application that closely mimics the user interface and core functionalities 
of Google Sheets, with a focus on mathematical and data quality functions, data entry, 
and key UI interactions.

## Installation and Setup Instructions

1. **Clone the Repository:**

   ```bash
   git clone <repo link> ./
   ```

2. **Install Dependencies:**
   Ensure you have Node.js and npm installed. Then, run the following command to install the required packages:

   ```bash
   npm install or pnpm install
   ```

3. **Run the Development Server:**
   Start the application using Vite:

   ```bash
   npm run dev
   ```

## Spreadsheet Interface: 
1. Mimic Google Sheets UI: Strive for a visual design and layout that 
closely resembles Google Sheets, including the toolbar, formula bar, and 
cell structure. 
2. Drag Functions: Implement drag functionality for cell content, formulas, 
and selections to mirror Google Sheets' behavior. 
3. Cell Dependencies: Ensure that formulas and functions accurately reflect 
cell dependencies and update accordingly when changes are made to 
related cells. 
4. Support for basic cell formatting (bold, italics, font size, color). 
5. Ability to add, delete, and resize rows and columns. 
## Mathematical Functions:
1. SUM: Calculates the sum of a range of cells. 
2. AVERAGE: Calculates the average of a range of cells. 
3. MAX: Returns the maximum value from a range of cells. 
4. MIN: Returns the minimum value from a range of cells. 
5. COUNT: Counts the number of cells containing numerical values in a 
range.
And many more thanks to univer.

## Bonus Features: 
- Implement additional mathematical and data quality functions.
- Add support for more complex formulas and cell referencing (e.g., relative and 
absolute references). 
-  Allow users to save and load their spreadsheets. 
-  Incorporate data visualization capabilities (e.g., charts, graphs).