const fs = require('fs');

const generateIcons = () => {
  const saveDir = `./src/xml`
  const svgDir = `./assets/svgs/`;

  let iconIndexOutput = `/**
 * Generated by scripts/generate-icons.ts
 * DO NOT EDIT!
 */

`;

let iconMap = {};

let iconStoryOutput = `/**
 * Generated by scripts/generate-icons.ts
 * DO NOT EDIT!
 */

import { storiesOf } from '@storybook/react-native';
import React, { ReactElement } from 'react';
import { View, ScrollView } from 'react-native';
import { Icon } from '../../src/components/icon';
import { Story, UseCase } from '../views';

storiesOf('Icon', module)
  `;

  // Read root Svg icon directory
  fs.readdirSync(svgDir).forEach(fileName => {
    if (fileName === '.DS_Store') return;

    // globalFileNames.push(fileName);
    iconMap[fileName] = {};
    const subDir = `${svgDir}${fileName}`;

let iconListOutput = `/**
 * Generated by scripts/generate-icons.ts
 * DO NOT EDIT!
 */

`;
    // Read sub-directory
    return fs.readdirSync(subDir).forEach(subDirFileName => {
      // trim qoutes & .svg off subDirFileName
      let trimmedStr = subDirFileName.replace(/(.svg)|-/g, '');
      let svgContent = fs.readFileSync(`${subDir}/${subDirFileName}`, 'utf8');
      iconListOutput += `export const ${trimmedStr} = () : any => \`${svgContent}\`;
  `;

    iconMap[fileName][trimmedStr] = () => `<View style={{ width: 75, height: 75, margin: 10 }}><Icon icon="${trimmedStr}" /></View>`;

    iconIndexOutput += `export { ${trimmedStr} } from './${fileName}'
  `;
    
    fs.writeFileSync(`${saveDir}/${fileName}.ts`, iconListOutput);
    fs.writeFileSync(`${saveDir}/index.ts`, iconIndexOutput);
    });
  });
  Object.keys(iconMap).map(category => {
    iconStoryOutput += `
      .add('${category}', () : ReactElement => (
        <Story>
          <UseCase
            text="Icon => ${category}"
          >
            <ScrollView>
              <View
                style={{
                  flex: 1,
                  flexDirection: 'row',
                  flexWrap: 'wrap',
                }}
              >
                ${Object.values(iconMap[category]).map(value => value()).join('')}
              </View>
            </ScrollView>
          </UseCase>
        </Story>
      ))
    `;
  });
  fs.writeFileSync(`./__stories__/story/icon-auto.story.tsx`, iconStoryOutput);
};

generateIcons();
