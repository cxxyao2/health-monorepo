# HealthMonorepo
## Tech Stack
- RESTful API, with reference to HL7 FHIR
- Frontend: Anuglar 18+
- Backend:  DOTNET Web API using c#
- Backend optional: Express + Node

## Monorepo Generator

<a alt="Nx logo" href="https://nx.dev" target="_blank" rel="noreferrer"><img src="https://raw.githubusercontent.com/nrwl/nx/master/images/nx-logo.png" width="45"></a>

✨ Your new, shiny [Nx workspace](https://nx.dev) is almost ready ✨.

[Learn more about this workspace setup and its capabilities](https://nx.dev/getting-started/tutorials/angular-monorepo-tutorial?utm_source=nx_project&amp;utm_medium=readme&amp;utm_campaign=nx_projects) or run `npx nx graph` to visually explore what was created. Now, let's get you up to speed!

## Finish your CI setup

[Click here to finish setting up your workspace!](https://cloud.nx.app/connect/WststNCCMJ)


## Run tasks

To run the dev server for your app, use:

```sh
npx nx serve health-frontend
```

To create a production bundle:

```sh
npx nx build health-frontend
```

To see all available targets to run for a project, run:

```sh
npx nx show project health-frontend
```
        
These targets are either [inferred automatically](https://nx.dev/concepts/inferred-tasks?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects) or defined in the `project.json` or `package.json` files.

[More about running tasks in the docs &raquo;](https://nx.dev/features/run-tasks?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects)

## Add new projects

While you could add new projects to your workspace manually, you might want to leverage [Nx plugins](https://nx.dev/concepts/nx-plugins?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects) and their [code generation](https://nx.dev/features/generate-code?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects) feature.

Use the plugin's generator to create new projects.

To generate a new application, use:

```sh
npx nx g @nx/angular:app demo
```

To generate a new library, use:

```sh
npx nx g @nx/angular:lib mylib
```

You can use `npx nx list` to get a list of installed plugins. Then, run `npx nx list <plugin-name>` to learn about more specific capabilities of a particular plugin. Alternatively, [install Nx Console](https://nx.dev/getting-started/editor-setup?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects) to browse plugins and generators in your IDE.

[Learn more about Nx plugins &raquo;](https://nx.dev/concepts/nx-plugins?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects) | [Browse the plugin registry &raquo;](https://nx.dev/plugin-registry?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects)


[Learn more about Nx on CI](https://nx.dev/ci/intro/ci-with-nx#ready-get-started-with-your-provider?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects)

## Install Nx Console

Nx Console is an editor extension that enriches your developer experience. It lets you run tasks, generate code, and improves code autocompletion in your IDE. It is available for VSCode and IntelliJ.

[Install Nx Console &raquo;](https://nx.dev/getting-started/editor-setup?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects)

## Useful links

Learn more:

- [Learn more about this workspace setup](https://nx.dev/getting-started/tutorials/angular-monorepo-tutorial?utm_source=nx_project&amp;utm_medium=readme&amp;utm_campaign=nx_projects)
- [Learn about Nx on CI](https://nx.dev/ci/intro/ci-with-nx?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects)
- [Releasing Packages with Nx release](https://nx.dev/features/manage-releases?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects)
- [What are Nx plugins?](https://nx.dev/concepts/nx-plugins?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects)

And join the Nx community:
- [Discord](https://go.nx.dev/community)
- [Follow us on X](https://twitter.com/nxdevtools) or [LinkedIn](https://www.linkedin.com/company/nrwl)
- [Our Youtube channel](https://www.youtube.com/@nxdevtools)
- [Our blog](https://nx.dev/blog?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects)

## CI/CD
- Finish it by visiting: https://cloud.nx.app/connect/MuNbcoTUBE

## NX Commands
### NX Angular
- npx nx serve my-app
- npx nx @nx/angular:app  my-app --directory=apps/my-app --routing=true
- npx nx @nx/angular:workspace-config --routing=true
- npx nx @nx/angular:component my-component --directory apps/my-app/src/my-component
-  navigate to your Angular app, run 
```
npx nx g service services/my-service
```
- at monorepo root folder, create a component for Angular
- npx nx g component components/component-name --project=angular-project-name
- npx nx test inpatientsys # run the unit tests for inpatientsys Angular app
- npx nx lint inpatientsys # runs the linter on inpatientsys Angular app
- npx nx e2e inpatientsys

- npx nx graph  # show dependencies
- npx nx show project inpatientsys --web
- npx nx run-many -t test lint e2e
- npx nx run my-app:test
- npx nx run-many -t build
- npx nx run my-app:build:production
### NX Dontnet
- npm install --save-dev @nx-dotnet/core --legacy-peer-deps
- npx nx g @nx-dotnet/core:init
- npx nx g @nx-dotnent/core:app health-api 
for this app, use the nx path naming convention and the web-api project template
- npx nx show project generated
### NX Express API
- npx nx add @nx/express
- npx nx add cors @types@cors --legacy-peer-deps
- npx nx g @nx/express:app my-experss-api 
- npx nx serve my-express-api
### Others
- npx nx reset
- npx nx dep-graph # show dependencies