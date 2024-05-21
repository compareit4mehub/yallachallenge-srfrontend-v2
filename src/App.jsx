import { useTheme } from "./context/ThemeContext";
import { ThemeToggler } from "./general_components";
import AppRouterProvider from "./router/AppRouterProvider";

function App() {
  const { isDark } = useTheme();

  return (
    <main
      data-theme={isDark ? "dark" : "light"}
      className="relative min-h-screen w-full flex flex-col justify-center items-center gap-3 poppins bg-base-100"
    >
      <ThemeToggler />
      <AppRouterProvider />
    </main>
  );
}

export default App;
