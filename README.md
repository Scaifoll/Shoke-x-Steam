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
   git clone <your-repo-url>
   cd <your-repo-folder>
````

Steps to build
Clone the repository:
git clone <your-repo-url>
cd <your-repo-folder>

Install dependencies:
If using npm:
npm install
If using yarn:
yarn install

Build the extension:
If you have a build script in package.json:
npm run build
or
yarn build
If using Grunt:
grunt build

Check output:
The final extension build will be located in the /dist or /build folder (depending on your configuration).

Load the extension in Opera:

Open Opera and navigate to opera://extensions

Enable Developer Mode

Click Load unpacked

Select the /dist or /build folder containing your manifest.json

Verify functionality:

Ensure icons, popup, and scripts work as expected.

Note: Always verify that your manifest.json is valid and contains all necessary icons and permissions before uploading.

**Note:**
Always verify that your `manifest.json` is valid and contains all necessary icons and permissions before uploading.

