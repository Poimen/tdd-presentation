import Markdown from '@pity/vite-plugin-react-markdown'
export default {
  plugins: [
    // react(),
    Markdown({
    //   wrapperComponentName: 'ReactMarkdown',
    //   wrapperComponentPath: './src/components/page',
      // if you want use components in md file, please add it in this
      // [ComponentName]: `componentPath`
      // ?‍?: the `ComponentName` must be `CamelCase`
    //   importComponentsPath: {
    //     ReactTest: './src/components/pages/mdtest',
    //   },
      // markdownItUses: [
      //   prism,
      // ],
    }),
  ],
}