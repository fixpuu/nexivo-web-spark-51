import fs from "fs";
import path from "path";

interface Props {
  files: string[];
}

export default function DownloadPage({ files }: Props) {
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Nexivo Server Panel</h1>

      <p style={styles.subtitle}>
        Developed by fixpu<br />
        discord: @fixpulol
      </p>

      <div style={styles.list}>
        {files.length === 0 && (
          <p style={{ opacity: 0.6 }}>Nessun file disponibile</p>
        )}

        {files.map((file) => (
          <div key={file} style={styles.card}>
            <a
              href={`/files/${file}`}
              download
              style={styles.button}
            >
              Scarica {file}
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

export async function getServerSideProps() {
  const filesDirectory = path.join(process.cwd(), "public/files");

  let files: string[] = [];

  try {
    files = fs.readdirSync(filesDirectory);
  } catch (error) {
    console.log("Cartella files non trovata");
  }

  return {
    props: {
      files,
    },
  };
}

const styles = {
  container: {
    backgroundColor: "#0f172a",
    minHeight: "100vh",
    color: "white",
    textAlign: "center" as const,
    paddingTop: "80px",
    fontFamily: "Arial, sans-serif"
  },
  title: {
    fontSize: "42px",
    marginBottom: "10px"
  },
  subtitle: {
    opacity: 0.6,
    marginBottom: "40px"
  },
  list: {
    display: "flex",
    flexDirection: "column" as const,
    alignItems: "center"
  },
  card: {
    marginBottom: "20px"
  },
  button: {
    backgroundColor: "#2563eb",
    padding: "15px 40px",
    borderRadius: "10px",
    color: "white",
    textDecoration: "none",
    fontSize: "18px",
    display: "inline-block",
    boxShadow: "0 5px 15px rgba(0,0,0,0.3)"
  }
};
