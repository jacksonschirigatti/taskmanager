import { Github } from "lucide-react";

function Footer() {
  return (
    <footer className="flex flex-col min-h-screenbg-white rounded-lg shadow-sm m-4 dark:bg-gray-800">
      <div className="w-full mx-auto max-w-screen-xl p-4 flex items-center justify-between">
        <span className="text-sm text-gray-500 dark:text-gray-400">
          By Jackson Schirigatti
        </span>
        <a
          href="https://github.com/jacksonschirigatti/taskmanager"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
        >
          <Github className="w-7 h-7" />
        </a>
      </div>
    </footer>
  );
}

export default Footer;
