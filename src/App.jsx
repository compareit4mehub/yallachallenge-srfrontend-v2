import { useTheme } from "./context/ThemeContext";
import { ThemeToggler } from "./generalComponents";
import AppRouterProvider from "./router/AppRouterProvider";

function App() {
  const { isDark } = useTheme();

  return (
    <main
      data-theme={isDark ? "dark" : "light"}
      className="relative min-h-screen w-full flex flex-col justify-center items-center gap-3 poppins bg-base-100 px-5 lg:px-10 py-20"
    >
      <ThemeToggler />
      <AppRouterProvider />
    </main>
  );
}

export default App;
