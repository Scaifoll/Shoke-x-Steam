# Build Instructions

## Operating System  
- Windows 10 / 11 (Recommended)  
- macOS 12+ or Linux Ubuntu 20.04+ (Optional)

## Tools Versions  
- Node.js: v18.x.x  
- npm: v9.x.x  
- yarn (optional): v1.22.x  
- grunt (if used): v1.6.x

## Steps to build

1. **Clone the repository:**  
   ```bash
      git clone [https://github.com/Scaifoll/Shoke-x-Steam.git](https://github.com/Scaifoll/Shoke-x-Steam.git)
      cd Shoke-x-Steam

2. **Install dependencies:**
   Using npm:

   ```bash
   npm install
   ```

   Or using yarn:

   ```bash
   yarn install
   ```

3. **Build the extension:**
   If a build script is defined in `package.json`:

   ```bash
   npm run build
   ```

   Or:

   ```bash
   yarn build
   ```

   If using Grunt:

   ```bash
   grunt build
   ```

4. **Check output:**
   The final build of the extension will be located in the `/dist` or `/build` folder, depending on your configuration.

5. **Load the extension in Opera:**

   * Open Opera and go to `opera://extensions`
   * Enable **Developer Mode** (toggle switch)
   * Click **Load unpacked**
   * Select the `/dist` or `/build` folder containing the `manifest.json` file

6. **Verify functionality:**

   * Make sure icons, popup, and scripts work correctly.

---

## Notes

* Always verify your `manifest.json` file is valid and contains all necessary icons and permissions before publishing.
* Adjust the Node.js, npm, yarn, and grunt versions if your project requires specific versions.

---

*This guide assumes basic familiarity with Git and command line usage.*
