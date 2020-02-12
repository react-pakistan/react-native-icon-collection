const fs = require("fs");

const generateIcons = () => {
  const svgDir = `./assets/svgs/`;
  const svgExportDir = `./assets/xml/icon-list.js`;

  let iconIndexOutput = `/**
 * Generated by scripts/generate-icons.js
 * DO NOT EDIT!
 */

`;

  // Read root Svg icon directory
  fs.readdirSync(svgDir).forEach(fileName => {
    if (fileName === '.DS_Store') return;

    const subDir = `${svgDir}${fileName}`;

let iconListOutput = `/**
  * Generated by scripts/generate-icons.jssss
  * DO NOT EDIT!
  */
   
`;
    // Read sub-directory
    return fs.readdirSync(subDir).forEach(subDirFileName => {
      // trim qoutes & .svg off subDirFileName
      let trimmedStr = subDirFileName.replace(/(.svg)|-/g, '');
      let svgContent = fs.readFileSync(`${subDir}/${subDirFileName}`, 'utf8');
      iconListOutput += `export const ${trimmedStr} = () => \`${svgContent}\`;
    `;

    iconIndexOutput += `export { ${trimmedStr} } from './${fileName}.js'
    `;

    fs.writeFileSync(`./assets/xml/${fileName}.js`, iconListOutput);
    fs.writeFileSync(`./assets/xml/index.js`, iconIndexOutput);
    });
  });
};

generateIcons();
