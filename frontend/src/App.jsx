import AppRouter from "./routes/AppRouter";

export default function App() {
  // Do NOT wrap AppRouter with PageLayout here
  // The PageLayout should be used inside AppRouter for each route
  return <AppRouter />;
}
