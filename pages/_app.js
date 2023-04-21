import "../styles/globals.css";
// _app.js or _app.tsx
// import '../styles.css';
// ... rest of the file


export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />;
}
