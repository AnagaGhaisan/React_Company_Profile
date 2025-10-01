import React from "react";
import { useParams, Link } from "react-router-dom";

const productData: Record<string, { title: string; desc: string; link: string }> = {
  ripple10: {
    title: "Ripple10",
    desc: "Ripple10 adalah Digital Monitoring Tools untuk memantau percakapan digital, tren, dan opini pelanggan secara real-time.",
    link: "https://ivosights.com/ripple10",
  },
  sociomile: {
    title: "Sociomile",
    desc: "Sociomile adalah layanan WhatsApp Business API resmi dengan fitur lengkap untuk mendukung komunikasi bisnis Anda.",
    link: "https://ivosights.com/sociomile",
  },
  sociomation: {
    title: "Sociomation",
    desc: "Sociomation memberikan analisis big data untuk insight yang lebih akurat & strategis.",
    link: "https://ivosights.com/sociomation",
  },
};

const ProductDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const product = id ? productData[id] : undefined;

  if (!product) {
    return (
      <div className="container py-5 text-center">
        <h2>Produk tidak ditemukan</h2>
        <Link to="/" className="btn btn-primary mt-3">
          Kembali ke Beranda
        </Link>
      </div>
    );
  }

  return (
    <div className="container py-5">
      <h1>{product.title}</h1>
      <p>{product.desc}</p>
      <a
        href={product.link}
        target="_blank"
        rel="noopener noreferrer"
        className="btn btn-success"
      >
        Kunjungi {product.title}
      </a>
      <div className="mt-3">
        <Link to="/" className="btn btn-secondary">
          ← Kembali ke Beranda
        </Link>
      </div>
    </div>
  );
};

export default ProductDetail;
