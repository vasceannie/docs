import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/__docusaurus/debug',
    component: ComponentCreator('/__docusaurus/debug', '5ff'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/config',
    component: ComponentCreator('/__docusaurus/debug/config', '5ba'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/content',
    component: ComponentCreator('/__docusaurus/debug/content', 'a2b'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/globalData',
    component: ComponentCreator('/__docusaurus/debug/globalData', 'c3c'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/metadata',
    component: ComponentCreator('/__docusaurus/debug/metadata', '156'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/registry',
    component: ComponentCreator('/__docusaurus/debug/registry', '88c'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/routes',
    component: ComponentCreator('/__docusaurus/debug/routes', '000'),
    exact: true
  },
  {
    path: '/blog',
    component: ComponentCreator('/blog', 'b2f'),
    exact: true
  },
  {
    path: '/blog/archive',
    component: ComponentCreator('/blog/archive', '182'),
    exact: true
  },
  {
    path: '/blog/authors',
    component: ComponentCreator('/blog/authors', '0b7'),
    exact: true
  },
  {
    path: '/blog/authors/all-sebastien-lorber-articles',
    component: ComponentCreator('/blog/authors/all-sebastien-lorber-articles', '4a1'),
    exact: true
  },
  {
    path: '/blog/authors/yangshun',
    component: ComponentCreator('/blog/authors/yangshun', 'a68'),
    exact: true
  },
  {
    path: '/blog/first-blog-post',
    component: ComponentCreator('/blog/first-blog-post', '89a'),
    exact: true
  },
  {
    path: '/blog/long-blog-post',
    component: ComponentCreator('/blog/long-blog-post', '9ad'),
    exact: true
  },
  {
    path: '/blog/mdx-blog-post',
    component: ComponentCreator('/blog/mdx-blog-post', 'e9f'),
    exact: true
  },
  {
    path: '/blog/tags',
    component: ComponentCreator('/blog/tags', '287'),
    exact: true
  },
  {
    path: '/blog/tags/docusaurus',
    component: ComponentCreator('/blog/tags/docusaurus', '704'),
    exact: true
  },
  {
    path: '/blog/tags/facebook',
    component: ComponentCreator('/blog/tags/facebook', '858'),
    exact: true
  },
  {
    path: '/blog/tags/hello',
    component: ComponentCreator('/blog/tags/hello', '299'),
    exact: true
  },
  {
    path: '/blog/tags/hola',
    component: ComponentCreator('/blog/tags/hola', '00d'),
    exact: true
  },
  {
    path: '/blog/welcome',
    component: ComponentCreator('/blog/welcome', 'd2b'),
    exact: true
  },
  {
    path: '/markdown-page',
    component: ComponentCreator('/markdown-page', '3d7'),
    exact: true
  },
  {
    path: '/docs',
    component: ComponentCreator('/docs', '31a'),
    routes: [
      {
        path: '/docs',
        component: ComponentCreator('/docs', '3b4'),
        routes: [
          {
            path: '/docs',
            component: ComponentCreator('/docs', '685'),
            routes: [
              {
                path: '/docs/category/tutorial---basics',
                component: ComponentCreator('/docs/category/tutorial---basics', '20e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/category/tutorial---extras',
                component: ComponentCreator('/docs/category/tutorial---extras', '9ad'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/intro',
                component: ComponentCreator('/docs/intro', '61d'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/sourcing-agent/',
                component: ComponentCreator('/docs/sourcing-agent/', 'bee'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/sourcing-agent/Agent_Tools',
                component: ComponentCreator('/docs/sourcing-agent/Agent_Tools', '38f'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/sourcing-agent/Architecture_Flows',
                component: ComponentCreator('/docs/sourcing-agent/Architecture_Flows', '1b2'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/sourcing-agent/brave_api_integration',
                component: ComponentCreator('/docs/sourcing-agent/brave_api_integration', '7b7'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/sourcing-agent/Component_Interfaces',
                component: ComponentCreator('/docs/sourcing-agent/Component_Interfaces', '166'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/sourcing-agent/Configuration_Module',
                component: ComponentCreator('/docs/sourcing-agent/Configuration_Module', 'c5a'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/sourcing-agent/Enhanced_Retry_Functionality',
                component: ComponentCreator('/docs/sourcing-agent/Enhanced_Retry_Functionality', '18a'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/sourcing-agent/Flows',
                component: ComponentCreator('/docs/sourcing-agent/Flows', 'c78'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/sourcing-agent/Graph_Engine',
                component: ComponentCreator('/docs/sourcing-agent/Graph_Engine', 'e3b'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/sourcing-agent/Logging_System',
                component: ComponentCreator('/docs/sourcing-agent/Logging_System', '037'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/sourcing-agent/Module_Dependencies',
                component: ComponentCreator('/docs/sourcing-agent/Module_Dependencies', '8c2'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/sourcing-agent/Modules_Core',
                component: ComponentCreator('/docs/sourcing-agent/Modules_Core', '89e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/sourcing-agent/Prompt_Management',
                component: ComponentCreator('/docs/sourcing-agent/Prompt_Management', 'b70'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/sourcing-agent/README_DEV',
                component: ComponentCreator('/docs/sourcing-agent/README_DEV', '0ce'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/sourcing-agent/State_Management',
                component: ComponentCreator('/docs/sourcing-agent/State_Management', '073'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/sourcing-agent/System_Flows',
                component: ComponentCreator('/docs/sourcing-agent/System_Flows', 'aa6'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/sourcing-agent/Technical_Manual',
                component: ComponentCreator('/docs/sourcing-agent/Technical_Manual', '0d0'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/sourcing-agent/Utility_Functions',
                component: ComponentCreator('/docs/sourcing-agent/Utility_Functions', 'a83'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/tutorial-basics/congratulations',
                component: ComponentCreator('/docs/tutorial-basics/congratulations', '458'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/tutorial-basics/create-a-blog-post',
                component: ComponentCreator('/docs/tutorial-basics/create-a-blog-post', '108'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/tutorial-basics/create-a-document',
                component: ComponentCreator('/docs/tutorial-basics/create-a-document', '8fc'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/tutorial-basics/create-a-page',
                component: ComponentCreator('/docs/tutorial-basics/create-a-page', '951'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/tutorial-basics/deploy-your-site',
                component: ComponentCreator('/docs/tutorial-basics/deploy-your-site', '4f5'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/tutorial-basics/markdown-features',
                component: ComponentCreator('/docs/tutorial-basics/markdown-features', 'b05'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/tutorial-extras/manage-docs-versions',
                component: ComponentCreator('/docs/tutorial-extras/manage-docs-versions', '978'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/tutorial-extras/translate-your-site',
                component: ComponentCreator('/docs/tutorial-extras/translate-your-site', 'f9a'),
                exact: true,
                sidebar: "tutorialSidebar"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '/',
    component: ComponentCreator('/', '2e1'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
