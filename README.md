# Coder Take-Home Project

![coder_wizard](https://github.com/marcomo/coder-react-ui/assets/5035442/716da864-a797-426b-8e44-05389118ebd0)

## Create Workspaces Flow - Wizard

This project is a POC of an alternative workflow for creating workspaces in Coder's code-server. The app illustrates how users can create workspaces from a single Dialog box walking through template selection, configuration, and build.

The app is built from scratch using reference from the code-server UI and Github repo.

### Instructions

Pull it:

```
git clone https://github.com/marcomo/coder-react-ui.git
```

Install dependencies:

```
npm install
```

Run it in development:

```
npm start
```

View it:

```
http://localhost:3000
```

### How I Developed this Project

When I got started with Coder, I created a Template based on [sharkymark/coder-react](https://github.com/sharkymark/coder-react). This template had a Create React App basic project set up, so I decided to work from there. I developed this project completely in a Coder workspace and pushed the code out to Github from there.

### What I Worked on

I developed a Wizard for the Create Workspace flow. The Wizard has three steps:

1. Select Template
2. Configure
3. Build

The Wizard keeps the user informed about the stages of creating a workspace without moving them around various screens. User is in control of where they go next and stay where they started if they cancel.

### Features

- All in one screen, no changing routes
- Cancel from step 1 or 2
- Template selection uses same Table UI as Templates page
- Input validation
- Go back to template selection from configuration
- Simple checklist animation of build process
- Stay on Workspaces or go to new Workspace after completion
- New workspace displays in Workspaces view after creation

### Tech

- React (CRA) and Typescript
- Sass/Dart, CSS Variables
- Material UI components and theme
- MUI experimental CssVarsProvider
- Figma variables and tokens
- Custom theming
- React Router
- Custom Hooks
- Dialog Box
- Transitions and Animation

### Things I didn't get to or would do

- Tests
- CI/CD Deployment
- Responsive design
- Accessibility
- Convert CRA to Vite
- Light mode
- Cache created workspaces
- Table row deselection in (wizard 'select template' step)

### Resources

[Figma Presentation](https://www.figma.com/proto/8h3ymWdvjyTkIg8CkV4kMV/Workspace-Creation?page-id=33%3A3646&type=design&node-id=33-3647&viewport=978%2C684%2C0.13&t=0aZAqtjmq0furLtI-1&scaling=contain&mode=design)

[Figma File](https://www.figma.com/file/8h3ymWdvjyTkIg8CkV4kMV/Workspace-Creation?type=design&node-id=33%3A3646&mode=design&t=l91DniDOy2Va3t88-1)
