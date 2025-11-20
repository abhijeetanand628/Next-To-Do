# To Do List App

A modern, beautiful, and feature-rich to-do list application built with Next.js, React, and Tailwind CSS. This application helps you stay organized and get things done with an intuitive interface and local storage persistence.

## ✨ Features

- ✅ **Add Tasks** - Quickly add new tasks to your list
- ✏️ **Edit Tasks** - Update existing tasks inline
- 🗑️ **Delete Tasks** - Remove individual tasks or clear all at once
- ✔️ **Mark Complete** - Toggle task completion status with checkboxes
- 📊 **Task Counter** - See total tasks and tasks remaining
- 💾 **Local Storage** - Your tasks are automatically saved in your browser
- ⌨️ **Keyboard Shortcuts** - Press Enter to add/save, Escape to cancel editing
- 🎨 **Beautiful UI** - Modern gradient design with smooth animations and transitions
- 📱 **Responsive Design** - Works seamlessly on desktop and mobile devices

## 🛠️ Tech Stack

- **Framework**: [Next.js](https://nextjs.org/) 16.0.3
- **UI Library**: React 19.2.0
- **Language**: TypeScript 5
- **Styling**: Tailwind CSS 4
- **Icons**: Lucide React

## 📋 Prerequisites

Before you begin, ensure you have the following installed:
- Node.js (version 18 or higher)
- npm, yarn, pnpm, or bun package manager

## 🚀 Getting Started

### Installation

1. Clone the repository:
```bash
git clone <your-repository-url>
cd to-do-list
```

2. Install dependencies:
```bash
npm install
# or
yarn install
# or
pnpm install
# or
bun install
```

### Development

Run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

### Building for Production

Create an optimized production build:

```bash
npm run build
npm start
# or
yarn build
yarn start
# or
pnpm build
pnpm start
```

## 📖 Usage

### Adding a Task
1. Type your task in the input field
2. Click the "Add" button or press Enter

### Editing a Task
1. Click the "Edit" button on any task
2. Modify the text in the input field
3. Click "Save" or press Enter to save changes
4. Press Escape or click "Cancel" to discard changes

### Completing a Task
- Click the checkbox next to a task to mark it as completed
- Completed tasks will appear with a strikethrough

### Deleting a Task
- Click the "Delete" button on any individual task
- Use "Delete All" button to remove all tasks at once

### Keyboard Shortcuts
- **Enter** - Add a new task or save an edited task
- **Escape** - Cancel editing a task

## 📁 Project Structure

```
to-do-list/
├── src/
│   └── app/
│       ├── page.tsx          # Main application component
│       ├── layout.tsx        # Root layout
│       ├── globals.css       # Global styles
│       └── components/       # React components
├── public/                   # Static assets
├── package.json              # Dependencies and scripts
├── tsconfig.json            # TypeScript configuration
└── tailwind.config          # Tailwind CSS configuration
```

## 🎯 Key Features Explained

### Local Storage Persistence
All tasks are automatically saved to your browser's local storage. Your tasks will persist even after closing the browser.

### Task Management
- Tasks are displayed in reverse chronological order (newest first)
- Each task maintains its own completion state
- Edit mode prevents other actions to avoid conflicts

### Responsive Design
The application uses Tailwind CSS for a fully responsive design that adapts to different screen sizes.

## 🔧 Available Scripts

- `npm run dev` - Start the development server
- `npm run build` - Build the application for production
- `npm start` - Start the production server
- `npm run lint` - Run ESLint to check code quality

## 📝 License

This project is private and not licensed for public use.

## 🤝 Contributing

This is a private project. If you have suggestions or improvements, please contact the project owner.

## 📞 Support

For issues, questions, or contributions, please open an issue in the repository or contact the project maintainer.

---

**Enjoy staying organized! 🎉**
