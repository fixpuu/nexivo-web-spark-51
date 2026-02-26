export default function DownloadPage() {
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Nexivo Server Panel</h1>

      <p style={styles.subtitle}>
        Developed by fixpu<br />
        discord: @fixpulol
      </p>

      <div style={styles.card}>
        <a
          href="/files/manuale.pdf"
          download
          style={styles.button}
        >
          Scarica manuale.pdf
        </a>
      </div>

      <div style={styles.card}>
        <a
          href="/files/archivio.zip"
          download
          style={styles.button}
        >
          Scarica archivio.zip
        </a>
      </div>
    </div>
  );
}

const styles = {
  container: {
    backgroundColor: "#0f172a",
    minHeight: "100vh",
    color: "white",
    textAlign: "center" as const,
    paddingTop: "80px",
    fontFamily: "Arial"
  },
  title: {
    fontSize: "40px",
    marginBottom: "10px"
  },
  subtitle: {
    opacity: 0.7,
    marginBottom: "40px"
  },
  card: {
    marginBottom: "20px"
  },
  button: {
    backgroundColor: "#2563eb",
    padding: "15px 30px",
    borderRadius: "8px",
    color: "white",
    textDecoration: "none",
    fontSize: "18px",
    display: "inline-block"
  }
};
