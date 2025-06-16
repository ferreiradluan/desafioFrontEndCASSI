import Image from "next/image";

export default function AppIcon() {
  return (
    <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: 120 }}>
      <Image src="/icone-cassi.png" alt="Ícone Desafio CASSI" width={64} height={64} />
    </div>
  );
}
