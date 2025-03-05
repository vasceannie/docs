# Sourcing Agent Documentation

This directory contains the comprehensive documentation for the Sourcing Agent project, a LangGraph-aligned agent framework. The documentation is built using [Mintlify](https://mintlify.com/), a modern documentation platform.

## Documentation Structure

- `sourcing-agent/` - Main documentation files for the Sourcing Agent project
- `images/` - Images and diagrams used in the documentation
- `logo/` - Project logo files
- `snippets/` - Reusable code snippets
- `api-reference/` - API reference documentation
- `essentials/` - Essential documentation components

## Viewing the Documentation

### Local Development

Install the [Mintlify CLI](https://www.npmjs.com/package/mintlify) to preview the documentation changes locally:

```bash
npm i -g mintlify
```

Run the following command at the root of the documentation directory (where docs.json is):

```bash
mintlify dev
```

This will start a local server at http://localhost:3000 where you can preview your documentation.

### Troubleshooting

- If Mintlify dev isn't running, try `mintlify install` to re-install dependencies
- If a page loads as a 404, make sure you are running in a folder with `docs.json`
- If you're currently using the legacy `mint.json` configuration file, upgrade with:
  ```bash
  npm i -g mintlify@latest
  mintlify upgrade
  ```

## Contributing to Documentation

When contributing to the documentation:

1. Follow the [Mintlify documentation guidelines](https://mintlify.com/docs/introduction)
2. Use MDX syntax for rich interactive documentation
3. Add images and diagrams to clarify complex concepts
4. Include code examples where appropriate
5. Test all links and navigation
6. Preview your changes locally before submitting

## Content Guidelines

- **Be clear and concise**: Use simple language and avoid jargon
- **Use examples**: Provide code examples and use cases
- **Be comprehensive**: Cover all aspects of the topic
- **Structure content**: Use headings, lists, and tables to organize information
- **Cross-reference**: Link to related topics and resources

## Publishing Changes

Changes to the documentation will be automatically deployed when merged to the main branch through our GitHub integration.

## Documentation TODOs

- [ ] Complete API reference documentation
- [ ] Add more code examples
- [ ] Create tutorial content for beginners
- [ ] Add diagrams for system architecture
- [ ] Create video walkthroughs

For any questions or suggestions regarding the documentation, please open an issue on the GitHub repository.
