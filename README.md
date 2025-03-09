# Sourcing Agent Documentation

[code:agent/tools/search/providers/jina.py]

[code:agent/tools/search/providers/searxng.py]

[code:agent/tools/search/providers/brave.py]

[code:agent/tools/search/providers/__init__.py]

[code:agent/tools/search/providers/composite.py]

[code:agent/tools/search/factory.py]

[code:agent/tools/search/base.py]

[code:agent/tools/search/__init__.py]

[code:agent/tools/generators/base_generator.py]

[code:agent/tools/generators/txt_generator.py]

[code:agent/tools/generators/json_generator.py]

[code:agent/tools/generators/__init__.py]

[code:agent/tools/generators/generator_factory.py]

[code:agent/tools/extractors/csv_extractor.py]

[code:agent/tools/extractors/base_extractor.py]

[code:agent/tools/extractors/pdf_extractor.py]

[code:agent/tools/extractors/__init__.py]

[code:agent/tools/extractors/extractor_factory.py]

[code:agent/services/qdrant.py]

[code:agent/services/postgres.py]

[code:agent/services/__init__.py]

[code:agent/reflection/critique.py]

[code:agent/reflection/feedback.py]

[code:agent/reflection/evaluator.py]

[code:agent/reflection/__init__.py]

[code:agent/checkpoints/persistence.py]

[code:agent/checkpoints/recovery.py]

[code:agent/checkpoints/versioning.py]

[code:agent/checkpoints/__init__.py]

[code:agent/utils/logging.py]

[code:agent/utils/error_handling.py]

[code:agent/utils/cache.py]

[code:agent/utils/proxy.py]

[code:agent/utils/http.py]

[code:agent/utils/langgraph_adapter.py]

[code:agent/utils/extraction.py]

[code:agent/utils/async_utils.py]

[code:agent/utils/retry_stats.py]

[code:agent/utils/company_extraction.py]

[code:agent/utils/__init__.py]

[code:agent/prompts/validation.py]

[code:agent/prompts/templates.py]

[code:agent/prompts/research.py]

[code:agent/prompts/reflection.py]

[code:agent/prompts/__init__.py]

[code:agent/prompts/analysis.py]

[code:agent/tools/document_processor.py]

[code:agent/tools/code_executor.py]

[code:agent/tools/base.py]

[code:agent/tools/vizualization.py]

[code:agent/tools/human_feedback.py]

[code:agent/tools/scraper.py]

[code:agent/tools/storage.py]

[code:agent/tools/evaluator.py]

[code:agent/tools/__init__.py]

[code:agent/tools/mock_tools.py]

[code:agent/core/state.py]

[code:agent/core/graph.py]

[code:agent/core/agent.py]

[code:agent/core/__init__.py]

[code:agent/cli/visualize.py]

[code:agent/cli/__init__.py]

[code:agent/cli/run.py]

[code:agent/subgraphs/analysis_flow.py]

[code:agent/subgraphs/validation_flow.py]

[code:agent/subgraphs/research_flow.py]

[code:agent/subgraphs/__init__.py]

[code:agent/supervisors/team_supervisor.py]

[code:agent/supervisors/orchestrator.py]

[code:agent/supervisors/__init__.py]

[code:agent/supervisors/task_manager.py]

[code:agent/nodes/market.py]

[code:agent/nodes/validation.py]

[code:agent/nodes/research.py]

[code:agent/nodes/__init__.py]

[code:agent/nodes/analysis.py]

[code:agent/nodes/error.py]

[code:agent/nodes/main.py]

[code:agent/config/settings.py]

[code:agent/config/types.py]

[code:agent/config/__init__.py]

[code:agent/config/configuration.py]

[code:agent/examples/simple_graph.py]

[code:agent/examples/__init__.py]

[code:agent/constants.py]

[code:agent/log_config.py]

[code:agent/exceptions.py]

[code:agent/__init__.py]

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
